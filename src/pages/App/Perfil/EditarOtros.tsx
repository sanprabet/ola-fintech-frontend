// File path: src/components/OtrosDatosForm.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Define the type for bankAccount
interface BankAccount {
  bankName?: string;
  accountType?: string;
  accountNumber?: string;
  accountSeniority?: string;
}

// Define the type for userInfo prop
interface UserInfo {
  occupation?: string;
  economicActivity?: string;
  stratum?: string;
  hasBankAccount?: string;
  bankAccount?: BankAccount;
  creditSituation?: string;
  mobilePhoneSeniority?: string;
}

// Define the props for the component
interface OtrosDatosFormProps {
  userInfo?: UserInfo;
}

const OtrosDatosForm: React.FC<OtrosDatosFormProps> = ({ userInfo }) => {
  const {
    occupation = '',
    economicActivity = '',
    stratum = '',
    hasBankAccount = '',
    bankAccount = {},
    creditSituation = '',
    mobilePhoneSeniority = '',
  } = userInfo || {};

  const { bankName = '', accountType = '', accountNumber = '', accountSeniority = '' } = bankAccount;

  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      <h1 className='text-5xl mb-5'>Editar Otros Datos</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-medium text-texto">Ocupación</label>
            <input
              type="text"
              defaultValue={occupation}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Actividad Económica</label>
            <select
              defaultValue={economicActivity}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for economic activity */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Estrato</label>
            <select
              defaultValue={stratum}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for stratum */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">¿Tienes una cuenta bancaria a tu nombre?</label>
            <select
              defaultValue={hasBankAccount}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for bank account status */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Elige tu cuenta bancaria</label>
            <input
              type="text"
              defaultValue={bankName}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Tipo de cuenta</label>
            <select
              defaultValue={accountType}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for account type */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Número de cuenta</label>
            <input
              type="text"
              defaultValue={accountNumber}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Antigüedad de cuenta bancaria</label>
            <select
              defaultValue={accountSeniority}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for account seniority */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Situación crediticia</label>
            <select
              defaultValue={creditSituation}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for credit situation */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Antigüedad del teléfono móvil</label>
            <select
              defaultValue={mobilePhoneSeniority}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for mobile phone seniority */}
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <Link to="/app/cuenta" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow">
            Cancelar
          </Link>
          <button className="bg-principal text-white px-4 py-2 rounded-lg shadow hover:bg-principalToneDown">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtrosDatosForm;
