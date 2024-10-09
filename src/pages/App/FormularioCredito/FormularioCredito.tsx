import React, { useState, useEffect } from 'react';
import Calculator from './Calculadora';
import ConfirmarDatos from './ConfirmarDatos';
import VistaContrato from './VistaContrato';
import FirmaOTP from './FirmaOTP';
import ConfirmarCredito from './ConfirmacionCredito';
import BankAccountForm from './BankAccountForm';

import { CreditData, BankAccountRequest } from 'types/types';
import { useAuth } from '../../../hooks/useAuth';
import { useAuthHandlers } from '../../../hooks/useAuthHandlers';
import { useCreditHandlers } from '../../../hooks/useAppHandlers';

interface Step {
  title: string;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => (
  <div className="w-full">
    <div className="hidden sm:flex justify-between items-center mb-4">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full mx-auto ${
              index + 1 <= currentStep ? 'bg-principal text-white' : 'bg-white text-texto'
            } flex items-center justify-center text-sm sm:text-base font-medium`}
          >
            {index + 1}
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium text-texto hidden sm:block">{step.title}</p>
        </div>
      ))}
    </div>
    <div className="hidden sm:block w-full bg-white h-1 mt-4 relative">
      <div
        className="absolute top-0 left-0 h-1 bg-principal transition-all duration-300 ease-in-out"
        style={{ width: `${(currentStep / steps.length) * 100}%` }}
      />
    </div>

    {/* Mobile view */}
    <div className="sm:hidden">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-principal text-white flex items-center justify-center text-sm font-medium">
          {currentStep}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-texto">{steps[currentStep - 1].title}</p>
          <p className="text-xs text-gray-500">Step {currentStep} of {steps.length}</p>
        </div>
      </div>
      <div className="w-full bg-white h-2 rounded-full">
        <div
          className="h-2 bg-principal rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>
    </div>
  </div>
);

const FormularioCredito: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<CreditData>({
    montoSolicitado: 0,
    interesCorriente: 0,
    administracion: 0,
    iva: 0,
    totalPagar: 0,
    fechaCuota: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { dbUser, isLoading } = useAuth();
  const authHandlers = useAuthHandlers();
  const creditHandlers = useCreditHandlers();

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = async (otpCode: string) => {
    setIsSubmitting(true);
    try {
      await creditHandlers.requestCredit(formData, otpCode);
      handleNext();
    } catch (error) {
      console.error('Hubo un error al procesar tu peticion.', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onAddBankAccount = async (accountData: BankAccountRequest) => {
    setIsSubmitting(true);

    try {
      await authHandlers.handleUpdateBankInformation(accountData);
      handleNext();
    } catch (error) {
      console.error('Error adding bank account:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: 'Calcular' }, ...(dbUser?.accountInformation ? [] : [{ title: 'Cuenta bancaria' }]),
    { title: 'Confirmar datos' },
    { title: 'Revisar contrato' },
    { title: 'Verificar OTP' },
    { title: 'Confirmar' },
  ];

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-principal"></div>
    </div>;
  }

  return (
    <div className="bg-fondo min-h-screen">
      <div className="container mx-auto">
        <ProgressBar steps={steps} currentStep={currentStep} />
        {currentStep === 1 && 
          <Calculator handleNext={handleNext} setFormData={setFormData} />
        }

        {currentStep === 2 && !dbUser?.accountInformation && (
          <BankAccountForm onSubmit={onAddBankAccount} onStepBack={handlePrev} />
        )}
        {((currentStep === 2 && dbUser?.accountInformation) || (currentStep === 3 && !dbUser?.accountInformation)) && (
          <ConfirmarDatos handlePrev={handlePrev} handleNext={handleNext} formData={formData} />
        )}
        {((currentStep === 3 && dbUser?.accountInformation) || (currentStep === 4 && !dbUser?.accountInformation)) && (
          <VistaContrato handlePrev={handlePrev} handleNext={handleNext} />
        )}
        {((currentStep === 4 && dbUser?.accountInformation) || (currentStep === 5 && !dbUser?.accountInformation)) && (
          <FirmaOTP 
            handlePrev={handlePrev}
            handleNext={onSubmit}
            isSubmitting={isSubmitting}
          />
        )}
        {((currentStep === 5 && dbUser?.accountInformation) || (currentStep === 6 && !dbUser?.accountInformation)) && (
          <ConfirmarCredito />
        )}
      </div>
    </div>
  );
};

export default FormularioCredito;
