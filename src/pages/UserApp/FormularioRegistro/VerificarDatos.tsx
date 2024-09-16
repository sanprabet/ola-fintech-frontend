import React from 'react';
import { PersonalInfo, ProfessionalInfo } from 'types';

interface VerificationStepProps {
  handlePrevious: () => void;
  handleSubmit: () => void;
  personalInfo: PersonalInfo;
  professionalInfo: ProfessionalInfo;
  isSubmitting: boolean;
  submitError: string | null;
}

const capitalizeWords = (str: string) => {
  return str.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <label className="block text-base font-medium text-principal">
      {capitalizeWords(label)}
    </label>
    <p className="mt-1 flex justify-start content-center w-full rounded-md shadow-sm sm:text-base leading-tight h-14 px-3 py-4 bg-gray-100">
      {value}
    </p>
  </div>
);

const InfoSection: React.FC<{ title: string; data: Record<string, string> }> = ({ title, data }) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-texto mb-6">{title}</h3>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {Object.entries(data).map(([key, value]) => (
        <InfoItem key={key} label={key} value={value} />
      ))}
    </div>
  </div>
);

const VerificationStep: React.FC<VerificationStepProps> = ({
  handlePrevious,
  handleSubmit,
  personalInfo,
  professionalInfo,
  isSubmitting,
  submitError,
}) => {
  const { primerNombre, segundoNombre, primerApellido, segundoApellido, ...otraInformacionPersonal } = personalInfo;
  const nombreCompleto = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`.trim();

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-texto mb-6 text-center my-4">Verifica tus Datos Personales</h2>
      <form className="space-y-8">
        <InfoSection
          title="Información Personal"
          data={{
            'Nombre Completo': nombreCompleto,
            ...Object.fromEntries(Object.entries(otraInformacionPersonal).map(([key, value]) => [capitalizeWords(key), value])),
            'Ubicación': `${personalInfo.ciudad}, ${personalInfo.departamento}`,
          }}
        />
        <InfoSection
          title="Información Profesional"
          data={{
            ...Object.fromEntries(Object.entries(professionalInfo).map(([key, value]) => [capitalizeWords(key), value])),
            'Tienes Una Cuenta Bancaria A Tu Nombre': professionalInfo.tieneCuentaBancaria,
          }}
        />

        {submitError && (
          <div className="text-red-500 text-center font-medium">
            {submitError}
          </div>
        )}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationStep;