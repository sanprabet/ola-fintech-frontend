import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import Bancolombia from '../../assets/bancolombia.png';
import Pse from '../../assets/pse.png';

const CreditInfo = ({ amount, dueDate, creditNumber, title, color }) => {
  return (
    <div className={`${color} p-6 rounded-lg text-white shadow-md relative flex flex-col justify-between`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="bg-white rounded-full p-2.5">
          <img src={Logo} alt="Bank Logo" className="h-10 w-10 object-cover" />
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold mb-2">${amount}</p>
        <p className="text-sm">Deuda a la fecha</p>
      </div>
      <div className="mt-6 mb-6">
        <p className="text-sm mb-1">Fecha límite de pago:</p>
        <p className="text-lg font-semibold">{dueDate}</p>
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {/* Paga en línea */}
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

      {/* Paga en efectivo */}
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
  );
};

const PaymentDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg mt-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Detalles del Crédito N.67468761</h2>
      <div className="mb-2">
        <div className="flex justify-between">
          <span>Saldo a capital:</span>
          <span>$200,000</span>
        </div>
        <div className="flex justify-between">
          <span>Interés corriente:</span>
          <span>$125</span>
        </div>
        <div className="flex justify-between">
          <span>Administración:</span>
          <span>$60,000</span>
        </div>
        <div className="flex justify-between">
          <span>IVA:</span>
          <span>$11,400</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between font-semibold text-xl">
        <span>Total a pagar:</span>
        <span>$271,525</span>
      </div>
      <div className="mt-4 flex space-x-4">
        <Link to="#" className="bg-principal text-white px-4 py-2 rounded-lg shadow hover:bg-principalToneDown">Pagar por PSE</Link>
        <Link to="#" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow">Extender plazo</Link>
      </div>
    </div>
  );
};

const Credito = () => {
  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      <h1 className='text-5xl mb-5'>Inicio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CreditInfo
          amount="271,525"
          dueDate="30/08/2024"
          creditNumber="67468761"
          title="Créditos vigentes"
          color={"bg-[#2D1C4B]"}
        />
        <CreditInfo
          amount="200,000"
          dueDate="N/A"
          creditNumber="67468761"
          title="Cupo de crédito"
          color={"bg-[#8D83C2]"}
        />
      </div>
      <h2 className='text-3xl mt-8'>Tu Credito</h2>
      <PaymentDetails />
      <PaymentMethods />
    </div>
  );
};

export default Credito;
