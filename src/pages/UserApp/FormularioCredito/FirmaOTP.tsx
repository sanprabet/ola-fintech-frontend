import React, { useState, useRef } from 'react';

interface OtpVerificationProps {
  handlePrev: () => void;
  handleNext: (otpCode: string) => Promise<void>;
  isSubmitting: boolean;
  submitError: string | null;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ handlePrev, handleNext, isSubmitting, submitError }) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleResendCode = () => {
    // Implement logic to resend the SMS code
    alert('Código reenviado');
  };

  const isCodeComplete = code.every((digit) => digit !== '');

  const handleSubmit = async () => {
    if (isCodeComplete && !isSubmitting) {
      const otpCode = code.join('');
      await handleNext(otpCode);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden space-y-4 px-8 py-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-texto">Verificación vía SMS</h2>
        <p className="text-base text-gray-500 mt-2">
          Escribe el código de <strong>6 dígitos</strong> que te enviamos a tu celular registrado.
        </p>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(e.target.value, index)}
            className="w-12 h-12 text-center text-xl font-bold border border-gray-600 rounded-md focus:outline-none focus:border-principal"
          />
        ))}
      </div>
      <button
        onClick={handleResendCode}
        className="text-lg text-purple-600 underline hover:text-purple-800 focus:outline-none w-full text-center"
      >
        Reenviar código
      </button>
      {submitError && (
        <p className="text-red-500 text-center">{submitError}</p>
      )}
      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePrev}
          disabled={isSubmitting}
          className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          Anterior
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isCodeComplete || isSubmitting}
          className={`inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white ${
            isCodeComplete && !isSubmitting
              ? 'bg-principal hover:bg-secondario hover:text-texto'
              : 'bg-gray-300 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal`}
        >
          {isSubmitting ? 'Verificando...' : 'Verificar y continuar'}
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;