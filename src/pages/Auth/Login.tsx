import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { useAuthHandlers } from '../../hooks/useAuthHandlers';


function Login() {
  const [documentNumber, setDocumentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const auth = useAuthHandlers();

  const isValidInput = documentNumber.length >= 8 && documentNumber.length <= 13 && /^\d+$/.test(documentNumber) && password.length >= 8;

  const handleDocumentNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setDocumentNumber(value.slice(0, 13));
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
      auth.loginAccount({ documentNumber, password });
    }
  };

  return (
    <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 mt-12">
      <div className="w-full max-w-md sm:max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-texto">
          Ingresa a tu cuenta
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-xl text-gray-600">
          Digita tu número de documento y contraseña para verificar tu cuenta.
        </p>
        <form onSubmit={onSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="documentNumber" className="block text-base sm:text-lg font-medium text-texto">
              Número de documento
            </label>
            <input
              type="text"
              id="documentNumber"
              name="documentNumber"
              value={documentNumber}
              onChange={handleDocumentNumberChange}
              className="mt-1 sm:mt-2 block w-full rounded-md shadow-sm focus:ring-principal text-base sm:text-lg h-12 sm:h-16 px-3 sm:px-4"
              maxLength={13}
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
            Acceder a mi cuenta
          </button>

          <div className="mt-6 sm:mt-8 text-center space-y-2">
            <p className="text-sm sm:text-lg text-texto">
              ¿No tienes una cuenta?{" "}
              <Link to="/auth/registro" className="text-principal underline">
                Crea una ahora
              </Link>
              .
            </p>
            <p className="text-sm sm:text-lg text-texto">
              ¿Olvidaste tu contraseña?{" "}
              <Link to="/auth/recuperar" className="text-principal underline">
                Da click aquí.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;