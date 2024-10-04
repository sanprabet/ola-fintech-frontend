import React, { useState, useRef, useEffect } from 'react';
import { useAuthHandlers } from '../../../hooks/useAuthHandlers';

interface OtpVerificationProps {
  handlePrev: () => void;
  handleNext: (otpCode: string) => Promise<void>;
  isSubmitting: boolean;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  handlePrev,
  handleNext,
  isSubmitting,
}) => {
  const [code, setCode] = useState<string>('');
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [displayTimeout, setDisplayTimeout] = useState<number>(40);
  const resendTimeout = useRef<number>(40);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuthHandlers();

  useEffect(() => {
    // Retrieve timer from sessionStorage if available
    const savedTimeout = sessionStorage.getItem('resendTimeout');
    if (savedTimeout) {
      const parsedTimeout = parseInt(savedTimeout, 10);
      if (!isNaN(parsedTimeout) && parsedTimeout > 0 && parsedTimeout <= 40) {
        resendTimeout.current = parsedTimeout;
        setDisplayTimeout(resendTimeout.current);
        setIsCodeSent(true); // Assume timer was running before component reloaded
      } else {
        // If the savedTimeout is invalid, reset the timer
        resendTimeout.current = 0;
        setDisplayTimeout(0);
        setIsCodeSent(false);
        sessionStorage.removeItem('resendTimeout');
      }
    }

    let timer: NodeJS.Timeout | undefined;
    if (isCodeSent && resendTimeout.current > 0) {
      timer = setInterval(() => {
        resendTimeout.current -= 1;
        setDisplayTimeout(Math.max(0, resendTimeout.current));
        sessionStorage.setItem('resendTimeout', resendTimeout.current.toString());

        if (resendTimeout.current <= 0) {
          if (timer) clearInterval(timer);
          setIsCodeSent(false);
          sessionStorage.removeItem('resendTimeout');
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isCodeSent]);

  const handleInputChange = (value: string) => {
    if (/^\d{0,6}$/.test(value)) {
      setCode(value);
    }
  };

  const handleResendCode = async () => {
    resendTimeout.current = 40;
    setDisplayTimeout(resendTimeout.current);
    setIsCodeSent(true);
    sessionStorage.setItem('resendTimeout', '40'); // Save timer to sessionStorage
    await auth.sendOtp();
  };

  const handleSubmit = async () => {
    if (code.length === 6 && !isSubmitting) {
      await handleNext(code);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg mx-auto mt-4">
      <div className="py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-texto text-center pb-2">Verificación vía SMS</h2>
        <hr className="border-gray-200" />
        <p className="text-base sm:text-lg text-gray-500 mt-2 text-center">
          Escribe el código de <strong>6 dígitos</strong> que te enviamos a tu celular registrado.
        </p>
      </div>

      <div className="bg-white space-y-6">
        <div className="flex justify-center">
          <input
            ref={inputRef}
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-48 h-14 sm:w-64 sm:h-16 text-center text-2xl sm:text-3xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:border-principal focus:ring-2 focus:ring-principal"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={handleResendCode}
            disabled={isCodeSent}
            className={`py-3 px-5 font-medium rounded-full shadow ${
              isCodeSent
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-principal text-white hover:bg-principalHover'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal`}
          >
            {isCodeSent ? `Reenviar en ${displayTimeout}s` : 'Enviar código'}
          </button>
        </div>

        <div className="bg-gray-100 py-4 border-t border-dashed border-gray-300 flex justify-between items-center mt-6 px-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isSubmitting}
            className="py-3 px-5 bg-gray-400 text-white font-medium rounded-full shadow hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Anterior
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!(code.length === 6) || isSubmitting}
            className={`py-3 px-5 font-medium rounded-full shadow ${
              code.length === 6 && !isSubmitting
                ? 'bg-principal text-white hover:bg-secondario hover:text-texto'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal`}
          >
            {isSubmitting ? 'Verificando...' : 'Verificar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;