import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from "react-router-dom";

import { PasswordRequestData } from 'types/types';

interface PasswordRecoveryRequestProps {
  handleSubmit: (data: PasswordRequestData) => void;
}

function PasswordRequest({ handleSubmit }: PasswordRecoveryRequestProps) {
  const [documentNumber, setDocumentNumber] = useState('');

  const isValidInput = documentNumber.length === 10 && /^\d+$/.test(documentNumber);

  const handleDocumentNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setDocumentNumber(value.slice(0, 10));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidInput) {
      handleSubmit({ documentNumber });
    }
  };

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-texto sm:text-5xl">
          Recupera tu contraseña
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Ingresa tu número de documento para iniciar el proceso de recuperación de contraseña.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="documentNumber" className="block text-lg font-medium text-texto">
              Número de documento
            </label>
            <input
              type="text"
              id="documentNumber"
              name="documentNumber"
              value={documentNumber}
              onChange={handleDocumentNumberChange}
              className="mt-2 block w-full rounded-md shadow-sm focus:ring-principal text-lg h-16 px-4"
              maxLength={10}
            />
          </div>

          <button
            type="submit"
            className={`w-full inline-flex justify-center py-5 px-8 rounded-full shadow-sm text-xl font-medium text-white ${
              isValidInput
                ? 'bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isValidInput}
          >
            Solicitar recuperación
          </button>

          <div className="mt-8 text-center">
            <p className="text-lg text-texto">
              ¿Recordaste tu contraseña?{" "}
              <Link to="/auth/ingreso" className="text-principal underline">
                Volver al inicio de sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default PasswordRequest;