import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import Bancolombia from '../../assets/bancolombia.png';
import Pse from '../../assets/pse.png';

const PaymentMethods = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg mt-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-lg font-semibold mb-4 sm:mb-0">
            ¿Aún no tienes tu crédito? Pídelo ahora y accede a todos los beneficios de tu cuenta Ola Fintech
          </p>
          <Link to="/app/formularioCredito" className="bg-principal text-white text-center py-2 px-4 rounded-lg shadow hover:bg-principalToneDown">
            Pídelo Ahora
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 w-full text-start">Paga en línea</h3>
          <img src={Pse} alt="PSE Logo" className="h-16 mb-4" />

          <div className='w-full'>
            <ul className="list-disc pl-5 text-left">
              <li>Paga en línea, rápido, seguro y fácil.</li>
              <li>Verificación de tu pago inmediato.</li>
              <li>Puedes renovar tu crédito al instante.</li>
            </ul>
          </div>
          <Link to="#" className="block bg-principal text-white text-center mt-4 py-2 px-3 rounded-lg shadow hover:bg-principalToneDown w-full">
            Pagar en linea
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 w-full text-start">Paga en efectivo</h3>
          <img src={Bancolombia} alt="Bancolombia Logo" className="h-12 my-2 mb-4" />
          <div className='w-full'>
            <ul className="list-disc pl-5 text-left">
              <li>Paga en efectivo en un corresponsal Bancolombia.</li>
              <li>Verificación de tu pago en hasta 1 día hábil.</li>
              <li>Renueva tu crédito en hasta 2 días hábiles.</li>
            </ul>
            <Link to="#" className="block bg-principal text-white text-center mt-4 py-2 px-3 rounded-lg shadow hover:bg-principalToneDown">
              Pagar en efectivo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Credito = () => {
  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      <h1 className='text-5xl mb-5'>Paga tu credito</h1>
      <PaymentMethods />
    </div>
  );
};

export default Credito;