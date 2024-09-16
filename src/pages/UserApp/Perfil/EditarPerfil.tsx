// File path: src/components/EditarDatosBasicos.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Define the type for userInfo prop
interface UserInfo {
  firstName?: string;
  secondName?: string;
  firstLastName?: string;
  secondLastName?: string;
  maritalStatus?: string;
  age?: string | number;
  gender?: string;
  educationLevel?: string;
  department?: string;
  city?: string;
}

// Define the props for the component
interface EditarDatosBasicosProps {
  userInfo?: UserInfo;
}

const EditarDatosBasicos: React.FC<EditarDatosBasicosProps> = ({ userInfo }) => {
  const {
    firstName = '',
    secondName = '',
    firstLastName = '',
    secondLastName = '',
    maritalStatus = '',
    age = '',
    gender = '',
    educationLevel = '',
    department = '',
    city = '',
  } = userInfo || {};

  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      <h1 className='text-5xl mb-5'>Editar Datos Básicos</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-medium text-texto">Primer Nombre</label>
            <input
              type="text"
              defaultValue={firstName}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Segundo Nombre (Si aplica)</label>
            <input
              type="text"
              defaultValue={secondName}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Primer Apellido</label>
            <input
              type="text"
              defaultValue={firstLastName}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Segundo Apellido (Si aplica)</label>
            <input
              type="text"
              defaultValue={secondLastName}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Estado Civil</label>
            <select
              defaultValue={maritalStatus}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for marital status */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Edad</label>
            <input
              type="number"
              defaultValue={age}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Género</label>
            <select
              defaultValue={gender}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for gender */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Nivel Educativo</label>
            <select
              defaultValue={educationLevel}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Selecciona una opción.</option>
              {/* Options for education level */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Departamento</label>
            <select
              defaultValue={department}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
            >
              <option>Seleccione una opción.</option>
              {/* Options for department */}
            </select>
          </div>

          <div>
            <label className="block text-base font-medium text-texto">Ciudad de Residencia</label>
            <input
              type="text"
              defaultValue={city}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-base h-14 px-3"
            />
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

export default EditarDatosBasicos;
