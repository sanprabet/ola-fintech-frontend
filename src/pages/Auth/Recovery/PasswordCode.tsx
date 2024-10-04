import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { PasswordRecoveryData } from 'types/types';

interface PasswordRecoveryCodeProps {
  handleSubmit: (data: PasswordRecoveryData) => void;
}

function PasswordCode({ handleSubmit }: PasswordRecoveryCodeProps) {
  const [code, setCode] = useState('');
  const isValidInput = code.length === 6 && /^\d+$/.test(code);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCode(value.slice(0, 6));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidInput) {
      handleSubmit({ code });
    }
  };

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-texto sm:text-5xl">
          Verifica tu código
        </h1>
        <p className="mt-6 text-xl text-texto">
          Ingresa el código de verificación que hemos enviado a tu correo electrónico.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="flex justify-center">
            <input
              type="text"
              value={code}
              onChange={handleInputChange}
              maxLength={6}
              className="w-full h-16 rounded-md text-center text-4xl font-bold tracking-widest text-principal focus:outline-none focus:border-principal focus:ring-principal"
              placeholder=""
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
            />
          </div>

          <button
            type="submit"
            className={`mt-6 mx-auto w-3/4 inline-flex justify-center py-5 px-8 rounded-full shadow-sm text-xl font-medium text-white ${
              isValidInput
                ? 'bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isValidInput}
          >
            Verificar código
          </button>

          <p className="mt-6 text-lg text-texto">
            ¿No recibiste el código?{" "}
            <Link to="/auth/recuperar" className="text-principal hover:underline">
              Solicitar nuevo código
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default PasswordCode;