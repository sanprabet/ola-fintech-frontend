import React, { useState } from 'react';
import DatosPersonales from './DatosPersonales';
import DatosProfesionales from './DatosProfesionales';
import VerificationStep from './VerificarDatos';
import { UserInformationRequest } from 'types/types';

import { useCreditHandlers } from '../../../hooks/useAppHandlers';
import { useAuthHandlers } from '../../../hooks/useAuthHandlers';


const ProgressBar: React.FC<{ steps: { title: string }[]; currentStep: number }> = ({ steps, currentStep }) => (
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

const FormularioRegistro: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<UserInformationRequest>({
    personalInfo: {
      primerNombre: "",
      segundoNombre: "",
      primerApellido: "",
      segundoApellido: "",
      estadoCivil: "",
      fechaNacimiento: "",
      genero: "",
      nivelEducativo: "",
      departamento: "",
      ciudad: ""
    },
    professionalInfo: {
      ocupacion: "",
      actividadEconomica: "",
      estrato: "",
      tieneCuentaBancaria: "",
      situacionCrediticia: "",
      antiguedadTelefonoMovil: ""
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const creditHandlers = useCreditHandlers();
  const authHandlers = useAuthHandlers();

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await creditHandlers.handleFormularioRegistro(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: 'Información básica' },
    { title: 'Otros datos' },
    { title: 'Revisar Información' }
  ];

  return (
    <section className="bg-fondo">
      <div className="lg:grid min-h-screen lg:grid-cols-12">
        <main className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:col-span-12 lg:px-8 lg:py-12">
          <ProgressBar steps={steps} currentStep={currentStep} />
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            {currentStep === 1 && (
              <DatosPersonales
                handleNext={handleNext}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {currentStep === 2 && (
              <DatosProfesionales
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {currentStep === 3 && (
              <VerificationStep
                handlePrevious={handlePrevious}
                handleSubmit={onSubmit}
                personalInfo={formData.personalInfo}
                professionalInfo={formData.professionalInfo}
                isSubmitting={isSubmitting}
                submitError={submitError}
              />
            )}
          </div>
          <div className="mt-8 w-full flex justify-center">
            <button
              onClick={authHandlers.logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Logout
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default FormularioRegistro;