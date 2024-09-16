import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';

interface AdminLoginData {
  email: string;
  password: string;
}

interface AdminLoginProps {
  handleSubmit: (data: AdminLoginData) => void;
}

function AdminLogin({ handleSubmit }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      handleSubmit({ email, password });
    }
  };

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-texto sm:text-5xl">
          Admin Dashboard
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Ingresa tu correo electrónico y contraseña para acceder al panel de administración.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-texto">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-2 block w-full rounded-md shadow-sm focus:ring-principal text-lg h-16 px-4"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-texto">
              Contraseña
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md shadow-sm focus:ring-principal text-lg h-16 px-4 pr-10"
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

          <div className="g-recaptcha mt-6" data-sitekey="your-site-key"></div>

          <button
            type="submit"
            className={`w-full inline-flex justify-center py-5 px-8 rounded-full shadow-sm text-xl font-medium text-white ${
              isValidInput
                ? 'bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isValidInput}
          >
            Acceder al panel de administración
          </button>

          <div className="mt-8 text-center space-y-2">
            <p className="text-lg text-texto">
              ¿Olvidaste tu contraseña?{" "}
              <Link to="/admin/recuperar" className="text-principal underline">
                Recupérala dando click aquí
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;