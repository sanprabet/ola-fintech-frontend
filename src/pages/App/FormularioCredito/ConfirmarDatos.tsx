import React from 'react';
import { CreditData } from 'types/types';

interface ConfirmarDatosProps {
  handlePrev: () => void;
  handleNext: () => void;
  formData: CreditData;
}

type DataKey = keyof CreditData;

interface DataItem {
  key: DataKey;
  label: string;
}

const ConfirmarDatos: React.FC<ConfirmarDatosProps> = ({ handlePrev, handleNext, formData }) => {
  const itemsToSum: DataItem[] = [
    { key: 'montoSolicitado', label: 'Monto Solicitado' },
    { key: 'interesCorriente', label: 'Interés Corriente' },
    { key: 'administracion', label: 'Administración' },
    { key: 'iva', label: 'IVA' },
  ];

  const totalAndDate: DataItem[] = [
    { key: 'totalPagar', label: 'Total a Pagar' },
    { key: 'fechaCuota', label: 'Fecha de Pago' },
  ];

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

  const renderValue = (key: DataKey, value: string | number) => {
    if (typeof value === 'number') {
      return formatCurrency(value);
    }
    return value;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mx-auto mt-4">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-texto text-center">Resumen del Crédito</h2>
      </div>
      <div className="bg-white p-4 sm:p-6 space-y-4">
        {itemsToSum.map(({ key, label }) => (
          <div key={key} className="flex justify-between items-center py-2">
            <span className="text-sm sm:text-base font-medium text-gray-600">{label}</span>
            <span className="text-base sm:text-lg font-semibold text-texto">
              {renderValue(key, formData[key])}
            </span>
          </div>
        ))}
        <div className="border-t border-gray-200 pt-4 mt-4">
          {totalAndDate.map(({ key, label }) => (
            <div key={key} className="flex justify-between items-center py-2">
              <span className="text-sm sm:text-base font-medium text-gray-600">{label}</span>
              <span className="text-base sm:text-lg font-bold text-texto">
                {renderValue(key, formData[key])}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-4 sm:p-6 border-t border-dashed border-gray-300 flex justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="py-2 px-4 border border-transparent rounded-full shadow-sm text-sm sm:text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="py-2 px-4 border border-transparent rounded-full shadow-sm text-sm sm:text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default ConfirmarDatos;