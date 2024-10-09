import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { useAuthHandlers } from '../../hooks/useAuthHandlers';

function RequestPasswordReset() {
  const [email, setEmail] = useState('');
  const auth = useAuthHandlers();

  const isValidInput = email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidInput) {
      auth.sendResetEmail(email);
    }
  };

  return (
    <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 mt-12">
      <div className="w-full max-w-md sm:max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-texto">
          Restablecer contraseña
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-xl text-gray-600">
          Ingresa tu correo electrónico para recibir un enlace de restablecimiento de contraseña.
        </p>
        <form onSubmit={onSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-base sm:text-lg font-medium text-texto">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 sm:mt-2 block w-full rounded-md shadow-sm focus:ring-principal text-base sm:text-lg h-12 sm:h-16 px-3 sm:px-4"
            />
          </div>

          <button
            type="submit"
            className={`w-full inline-flex justify-center py-3 sm:py-5 px-4 sm:px-8 rounded-full shadow-sm text-base sm:text-xl font-medium text-white ${
              isValidInput
                ? 'bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isValidInput}
          >
            Da click aquí
          </button>

          <div className="mt-6 sm:mt-8 text-center space-y-2">
            <p className="text-sm sm:text-lg text-texto">
              ¿Recordaste tu contraseña?{" "}
              <Link to="/auth/ingreso" className="text-principal underline">
                Inicia sesión aquí.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default RequestPasswordReset;