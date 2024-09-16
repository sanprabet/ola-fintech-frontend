import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Calculator from './Calculadora';
import ConfirmarDatos from './ConfirmarDatos';
import VistaContrato from './VistaContrato';
import FirmaOTP from './FirmaOTP';
import ConfirmarCredito from './ConfirmacionCredito';
import BankAccountForm from './BankAccountForm';

import { CreditRequestData, UserDB, BankAccountData } from 'types';

interface Step {
  title: string;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => (
  <div className="w-full mb-8">
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`w-10 h-10 rounded-full mx-auto ${
              index + 1 <= currentStep ? 'bg-principal text-white' : 'bg-white text-texto'
            } flex items-center justify-center`}
          >
            {index + 1}
          </div>
          <p className="mt-2 text-sm font-medium text-texto">{step.title}</p>
        </div>
      ))}
    </div>
    <div className="w-full bg-white h-1 mt-4 relative">
      <div
        className="absolute top-0 left-0 h-1 bg-principal"
        style={{ width: `${(currentStep / steps.length) * 100}%` }}
      />
    </div>
  </div>
);


interface FormularioCreditoProps {
  handleSubmit: (formData: CreditRequestData) => Promise<void>;
  fetchUserAccount: () => Promise<UserDB | null>;
  handleAddBankAccount: (account: BankAccountData) => Promise<void>;
}

const FormularioCredito: React.FC<FormularioCreditoProps> = ({ 
  handleSubmit, 
  fetchUserAccount,
  handleAddBankAccount 
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<CreditRequestData>({
    montoSolicitado: 0,
    interesCorriente: 0,
    administracion: 0,
    iva: 0,
    totalPagar: 0,
    fechaCuota: '',
    otpCode: '',
    otpTimestamp: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [userAccount, setUserAccount] = useState<UserDB | null>(null);
  const [isLoadingAccount, setIsLoadingAccount] = useState(true);

  useEffect(() => {
    const loadUserAccount = async () => {
      setIsLoadingAccount(true);
      try {
        const account = await fetchUserAccount();
        setUserAccount(account);
      } catch (error) {
        console.error('Error fetching user account:', error);
        setSubmitError('An error occurred while fetching your account information.');
      } finally {
        setIsLoadingAccount(false);
      }
    };

    loadUserAccount();
  }, [fetchUserAccount]);

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = async (otpCode: string) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const updatedFormData = {
        ...formData,
        otpCode,
        otpTimestamp: Date.now(),
      };
      await handleSubmit(updatedFormData);
      handleNext(); // Move to the confirmation step after successful submission
    } catch (error) {
      console.error('Error submitting credit request:', error);
      setSubmitError('An error occurred while submitting the credit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onAddBankAccount = async (accountData: BankAccountData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await handleAddBankAccount(accountData);
      setUserAccount(prevAccount => prevAccount ? {...prevAccount, accountInformation: accountData} : null);
      handleNext();
    } catch (error) {
      console.error('Error adding bank account:', error);
      setSubmitError('An error occurred while adding your bank account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: 'Calcular crédito' },
    ...(userAccount?.accountInformation ? [] : [{ title: 'Agregar cuenta bancaria' }]),
    { title: 'Confirmar datos' },
    { title: 'Revisar contrato' },
    { title: 'Verificar OTP' },
    { title: 'Confirmar solicitud' },
  ];

  if (isLoadingAccount) {
    return <div>Loading account information...</div>;
  }

  return (
    <div className="bg-fondo min-h-screen py-12">
      <div className="container mx-auto px-4">
        <ProgressBar steps={steps} currentStep={currentStep} />
        {currentStep === 1 && <Calculator handleNext={handleNext} setFormData={setFormData} />}
        {currentStep === 2 && !userAccount?.accountInformation && (
          <BankAccountForm onSubmit={onAddBankAccount} />
        )}
        {((currentStep === 2 && userAccount?.accountInformation) || (currentStep === 3 && !userAccount?.accountInformation)) && (
          <ConfirmarDatos handlePrev={handlePrev} handleNext={handleNext} formData={formData} />
        )}
        {((currentStep === 3 && userAccount?.accountInformation) || (currentStep === 4 && !userAccount?.accountInformation)) && (
          <VistaContrato handlePrev={handlePrev} handleNext={handleNext} />
        )}
        {((currentStep === 4 && userAccount?.accountInformation) || (currentStep === 5 && !userAccount?.accountInformation)) && (
          <FirmaOTP 
            handlePrev={handlePrev} 
            handleNext={onSubmit} 
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        )}
        {((currentStep === 5 && userAccount?.accountInformation) || (currentStep === 6 && !userAccount?.accountInformation)) && (
          <ConfirmarCredito />
        )}
      </div>
    </div>
  );
};

export default FormularioCredito;