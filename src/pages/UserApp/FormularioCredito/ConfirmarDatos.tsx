import React from 'react';

import { CreditRequestData } from 'types';

interface ConfirmarDatosProps {
  handlePrev: () => void;
  handleNext: () => void;
  formData: CreditRequestData;
}

const ConfirmarDatos: React.FC<ConfirmarDatosProps> = ({ handlePrev, handleNext, formData }) => {
  function capitalizeWords(str: string): string {
    return str
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  const displayData: Record<string, string> = {
    montoSolicitado: `$${formData.montoSolicitado.toLocaleString()}`,
    interesCorriente: `$${formData.interesCorriente.toLocaleString()}`,
    administracion: `$${formData.administracion.toLocaleString()}`,
    iva: `$${formData.iva.toLocaleString()}`,
    totalPagar: `$${formData.totalPagar.toLocaleString()}`,
    fechaCuota: formData.fechaCuota
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 space-y-8">
      <h2 className="text-3xl font-bold text-texto text-center">Confirma las condiciones de tu crédito</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Object.entries(displayData).map(([key, value]) => (
          <div key={key} className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold text-principal">{capitalizeWords(key)}</h3>
            <p className="text-3xl font-bold text-texto mt-4">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ConfirmarDatos;