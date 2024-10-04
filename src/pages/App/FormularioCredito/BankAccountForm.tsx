import React, { useState, useEffect } from 'react';
import { BankAccountData } from 'types/types';

interface BankAccountFormProps {
  account?: BankAccountData | null;
  onSubmit: (account: BankAccountData) => void;
  onCancel?: () => void;
  onStepBack: () => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({ account, onSubmit, onCancel, onStepBack }) => {
  const [formData, setFormData] = useState<BankAccountData>({
    accountType: '',
    accountNumber: '',
    accountInstitution: '',
  });

  useEffect(() => {
    if (account) {
      setFormData(account);
    }
  }, [account]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mx-auto mt-4">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-texto text-center">
          {account ? 'Editar cuenta bancaria' : 'Agrega la cuenta donde recibir tu crédito'}
        </h2>
      </div>

      <div className="bg-white p-4 sm:p-6 space-y-4">
        <div>
          <label className="block text-base font-medium text-texto">Tipo de cuenta</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="ahorro">Ahorro</option>
            <option value="corriente">Corriente</option>
            <option value="billetera digital">Billetera digital</option>
          </select>
        </div>

        <div>
          <label className="block text-base font-medium text-texto">Banco</label>
          <select
            name="accountInstitution"
            value={formData.accountInstitution}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Banco de Bogotá">Banco de Bogotá</option>
            <option value="Bancolombia">Bancolombia</option>
            <option value="BBVA">BBVA</option>
            <option value="Davivienda">Davivienda</option>
            <option value="Nequi">Nequi</option>
            <option value="Daviplata">Daviplata</option>
            {/* Add other bank options here */}
          </select>
        </div>

        <div>
          <label className="block text-base font-medium text-texto">No. Cuenta</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            required
          />
        </div>
      </div>

      <div className="bg-gray-100 p-4 sm:p-6 border-t border-dashed border-gray-300 flex justify-between">
        <button
          type="button"
          onClick={onStepBack}
          className="py-2 px-4 border border-transparent rounded-full shadow-sm text-sm sm:text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          Volver
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="py-2 px-4 border border-transparent rounded-full shadow-sm text-sm sm:text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="py-2 px-4 border border-transparent rounded-full shadow-sm text-sm sm:text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
        >
          {account ? 'Actualizar' : 'Agregar'}
        </button>
      </div>
    </form>
  );
};

export default BankAccountForm;