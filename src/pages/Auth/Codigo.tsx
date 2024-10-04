import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useAuthHandlers } from '../../hooks/useAuthHandlers';


function OTPCode() {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(0);
  const isValidInput = code.length === 6 && /^\d+$/.test(code);

  const handlers = useAuthHandlers();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCode(value.slice(0, 6));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidInput) {
      handlers.verifyOtp(code);
    }
  };

  const onSendCode = () => {
    handlers.sendOtp();
    setTimer(45);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 mt-12">
      <div className="w-full max-w-md sm:max-w-2xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-texto">
          Verificación de seguridad
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-texto">
          Digita el código de 6 dígitos que enviaremos a tu celular.
        </p>
        <form onSubmit={onSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <div className="flex justify-center">
            <input
              type="text"
              value={code}
              onChange={handleInputChange}
              maxLength={6}
              className="w-full h-12 sm:h-16 rounded-md text-center text-2xl sm:text-4xl font-bold tracking-widest text-principal focus:outline-none focus:border-principal focus:ring-principal"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={onSendCode}
              disabled={timer > 0}
              className={`w-full sm:w-1/2 py-3 sm:py-5 px-4 rounded-full shadow-sm text-base sm:text-xl font-medium text-white ${
                timer > 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal'
              }`}
            >
              {timer > 0 ? `Espera ${timer}s` : 'Enviar código'}
            </button>
            <button
              type="submit"
              disabled={!isValidInput}
              className={`w-full sm:w-1/2 py-3 sm:py-5 px-4 rounded-full shadow-sm text-base sm:text-xl font-medium text-white ${
                isValidInput
                  ? 'bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Verificar código
            </button>
          </div>
        </form>
        <button
          onClick={handlers.logout}
          className="mt-4 sm:mt-6 text-sm sm:text-lg text-principal hover:underline cursor-pointer"
        >
          Cerrar sesión
        </button>
      </div>
    </main>
  );
}

export default OTPCode;