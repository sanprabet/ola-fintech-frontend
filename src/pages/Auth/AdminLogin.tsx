import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { useAuthHandlers } from '../../hooks/useAuthHandlers';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlers = useAuthHandlers();

  const isValidInput = /\S+@\S+\.\S+/.test(email) && password.length >= 8;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidInput) {
      handlers.loginAdminAccount({ email, password });
    }
  };

  return (
    <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="w-full max-w-md sm:max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-texto">
          Admin Dashboard
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-xl text-gray-600">
          Ingresa tu correo electrónico y contraseña para acceder al panel de administración.
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

          <div>
            <label htmlFor="password" className="block text-base sm:text-lg font-medium text-texto">
              Contraseña
            </label>
            <div className="mt-1 sm:mt-2 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md shadow-sm focus:ring-principal text-base sm:text-lg h-12 sm:h-16 px-3 sm:px-4 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={toggleShowPassword}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
          </div>

          <div className="g-recaptcha mt-4 sm:mt-6" data-sitekey="your-site-key"></div>

          <button
            type="submit"
            className={`w-full inline-flex justify-center py-3 sm:py-5 px-4 sm:px-8 rounded-full shadow-sm text-base sm:text-xl font-medium text-white ${
              isValidInput
                ? 'bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isValidInput}
          >
            Acceder al panel
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;