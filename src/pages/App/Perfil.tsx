import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSection = () => {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-4xl font-bold mb-6">Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Datos básicos</h2>
            <Link to="/app/cuenta/editarPerfil" className="text-principal hover:underline">Editar &gt;</Link>
          </div>
          <div>
            <p className="text-sm mb-2"><strong>Celular:</strong> +57 3177707830</p>
            <p className="text-sm mb-2"><strong>Correo electrónico:</strong> andreato06@yahoo.es</p>
            <p className="text-sm"><strong>Dirección de residencia:</strong> Bogotá, Cundinamarca</p>
          </div>
        </div>

        {/* Other Information */}
        <div className="bg-principal text-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Otros Datos</h2>
            <Link to="/app/cuenta/editarOtros" className="text-white hover:underline">Actualizar &gt;</Link>
          </div>
          <div>
            <p className="text-sm mb-2"><strong>Ocupación:</strong> Empleado/a</p>
            <p className="text-sm"><strong>Actividad económica:</strong> Financieros y seguros</p>
          </div>
        </div>

        {/* Bank Account Information */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Cuenta bancaria</h2>
            <Link to="/app/cuenta/editarBanca" className="text-principal hover:underline">Cambiar cuenta &gt;</Link>
          </div>
          <div>
            <p className="text-sm mb-2"><strong>Banco:</strong> Nequi</p>
            <p className="text-sm mb-2"><strong>Tipo de cuenta:</strong> Ahorros</p>
            <p className="text-sm"><strong>Número de cuenta:</strong> 3177707830</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;