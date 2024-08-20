import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Inicio = () => {
  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col justify-between">
      <h1 className='text-5xl mb-5'>Inicio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-principal p-6 rounded-lg text-white shadow-md relative flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Crédito vigente</h2>
            <div className="bg-white rounded-full p-2.5">
              <img src={Logo} alt="Bank Logo" className="h-10 w-10 object-cover" />
            </div>
          </div>
          
          <div>
            <p className="text-3xl font-bold mb-2">$271,525</p>
            <p className="text-sm">Deuda a la fecha</p>
          </div>

          <div className="mt-6">
            <p className="text-sm mb-1">Fecha límite de pago:</p>
            <p className="text-lg font-semibold">30/08/2024</p>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <span className="text-sm font-semibold">N. 67468761</span>
            <Link to="/app/creditos" className="text-sm underline hover:text-gray-300">Ver más &gt;</Link>
          </div>
        </div>

        {/* Existing Second Card */}
        <div className="bg-white p-6 rounded-lg flex flex-col items-center">

          {/* Client Level Indicator */}
          <div className="mb-6">
            <p className="text-center text-gray-500 text-sm mb-2">Nivel de cliente</p>
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-3xl font-bold text-red-500">1</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 transform rotate-[-90deg]" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e53e3e"
                    strokeWidth="2.8"
                    strokeDasharray="20, 100"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Latest Activity Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mejora tu credito</h3>
            <p className="text-gray-700">
              Firmaste los documentos <span className="font-bold text-green-500">+20 Puntos</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">07/08/2024</p>
          </div>

          {/* New Button Section */}
          <div className="mt-4">
            <Link to="/app/cuenta" className="bg-principal text-white px-4 py-2 rounded-lg shadow hover:bg-principalToneDown">
              Ir a mi cuenta
            </Link>
          </div>
        </div>
      </div>

      {/* Full Height Card */}
      <div className="bg-white p-6 rounded-lg mt-6 flex items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold text-gray-800">Datos Salud Financiera</h1>
      </div>
    </div>
  );
};

export default Inicio;
