import React, { useState, useEffect } from 'react';
import { BankAccountData } from 'types';

interface BankAccountFormProps {
  account?: BankAccountData | null;
  onSubmit: (account: BankAccountData) => void;
  onCancel?: () => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({ account, onSubmit, onCancel }) => {
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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">{account ? 'Editar cuenta bancaria' : 'Agrega la cuenta donde recibir tu credito.'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <option value="billetera digital (Nequi)">Billetera digital (Nequi)</option>
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

        <div>
          <label className="block text-base font-medium text-texto">Banco</label>
          <input
            type="text"
            name="accountInstitution"
            value={formData.accountInstitution}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition-colors"
          >
            Cancelar
          </button>
        )}
        <button 
          type="submit" 
          className="bg-principal text-white px-8 py-2 rounded-lg shadow hover:bg-principalToneDown transition-colors"
        >
          {account ? 'Actualizar' : 'Agregar'}
        </button>
      </div>
    </form>
  );
};

export default BankAccountForm;