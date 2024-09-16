import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { PasswordResetData } from 'types';

interface PasswordResetProps {
  handleSubmit: (data: PasswordResetData) => void;
}

function PasswordReset({ handleSubmit }: PasswordResetProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/;
    return regex.test(password);
  };

  const isValidInput = validatePassword(newPassword) && newPassword === confirmPassword;

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    const value = e.target.value;
    setter(value);
    if (e.target.name === 'newPassword') {
      if (!validatePassword(value)) {
        setPasswordError('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales');
      } else {
        setPasswordError('');
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidInput) {
      handleSubmit({ newPassword, confirmPassword });
    }
  };

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-texto sm:text-5xl">
          Restablece tu contraseña
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Ingresa y confirma tu nueva contraseña para completar el proceso de recuperación.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="newPassword" className="block text-lg font-medium text-texto">
              Nueva contraseña
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => handlePasswordChange(e, setNewPassword)}
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
            {passwordError && (
              <p className="mt-2 text-sm text-red-600">{passwordError}</p>
            )}
            <p className="mt-2 text-sm text-gray-500">
              La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales como: ! @ # $ % ^ & * ( ) _ + - = [ ] { } ; : " ' \ | , . &lt; &gt; / ?
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-texto">
              Confirmar nueva contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handlePasswordChange(e, setConfirmPassword)}
              className="mt-2 block w-full rounded-md shadow-sm focus:ring-principal text-lg h-16 px-4"
            />
            {newPassword !== confirmPassword && confirmPassword !== '' && (
              <p className="mt-2 text-sm text-red-600">Las contraseñas no coinciden</p>
            )}
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
            Restablecer contraseña
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

export default PasswordReset;