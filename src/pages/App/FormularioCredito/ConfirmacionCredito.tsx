import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmacionCredito = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('approved');

  const handleRetry = () => {
    setState('loading');
    // Simulate an API call
    setTimeout(() => {
      setState('error');
    }, 20);
  };

  const handleGoToAccount = () => {
    
    // Add your navigation logic here
  };

  if (state === 'loading') {
    return (
      <div className="bg-white shadow-xl rounded-lg overflow-hidden space-y-4 px-8 py-4 mt-4">
        <div className="flex flex-col items-center justify-center p-4">
          <svg className="animate-spin h-16 w-16 text-principal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-base text-gray-500">Cargando...</p>
        </div>
      </div>
    );
  }

  if (state === 'approved') {
    return (
      <div className="bg-white shadow-xl rounded-lg overflow-hidden space-y-4 px-8 py-4 mt-4">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-3xl font-bold text-texto mt-4">Aprobado</h2>
          <p className="text-base text-gray-500 mt-2">
            Espera tu respuesta por correo/WhatsApp/SMS
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <button 
            onClick={handleGoToAccount}
            className="inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Ir a mi cuenta
          </button>
        </div>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="bg-white shadow-xl rounded-lg overflow-hidden space-y-4 px-8 py-4 mt-4">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-3xl font-bold text-texto mt-4">Error</h2>
          <p className="text-base text-gray-500 mt-2">
            Hubo un problema al procesar tu solicitud.
          </p>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button 
            onClick={handleRetry}
            className="inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Intentar de nuevo
          </button>
          <button 
            onClick={handleGoToAccount}
            className="inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Ir a mi cuenta
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ConfirmacionCredito;