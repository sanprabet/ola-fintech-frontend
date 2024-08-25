import React, { useState } from 'react';

const PendingIndicator = () => (
  <div className="absolute top-3 right-2 bg-principal text-white font-semibold rounded-full p-1 px-2 text-xs">
    En Proceso de Verificación
  </div>
);

const BankAccountCard = ({ account }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg flex justify-between items-center mb-4">
      <div>
        <h2 className="text-xl font-bold mb-2">{account.isPrincipal ? 'Principal' : 'Secundaria'}</h2>
        <div className="text-lg">
          <p><strong>Banco:</strong> {account.bankName}</p>
          <p><strong>Tipo de cuenta:</strong> {account.accountType}</p>
          <p><strong>Número de cuenta:</strong> {account.accountNumber}</p>
        </div>
      </div>
      <div className="text-green-500">
        {account.isPrincipal && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {account.isPending && <PendingIndicator />}
      </div>
    </div>
  );
};

const BankAccountDetails = ({ accounts = [] }) => {
  return (
    <div className="container mx-auto p-4 pt-2 flex flex-col">
      <h1 className="text-5xl mb-5">Mis cuentas bancarias</h1>
      <p className="text-lg mb-6">
        Elige el banco donde quieres recibir tus créditos de Galileo, recuerda que la cuenta principal es la que nos dejaste en los formularios la primera vez que solicitaste un crédito y esta no puede ser eliminada o modificada.
      </p>

      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <BankAccountCard key={index} account={account} />
        ))
      ) : (
        <p className="text-lg">No se han agregado cuentas bancarias todavía.</p>
      )}
    </div>
  );
};

const BankAccountForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    accountType: '',
    bankName: '',
    accountNumber: '',
    isPrincipal: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      isPrincipal: e.target.value === 'Principal',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, isPending: true });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">Agrega una cuenta bancaria!</h2>
      <p className="text-base mb-6">
        La cuenta bancaria que agregues la puedes seleccionar como principal para que te llegue el dinero a partir del próximo crédito.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-base font-medium text-texto">Tipo de cuenta</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option>Selecciona una opción.</option>
            <option value="Ahorros">Ahorros</option>
            <option value="Corriente">Corriente</option>
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
          />
        </div>

        <div>
          <label className="block text-base font-medium text-texto">Banco</label>
          <select
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option>Selecciona una opción.</option>
            <option value="Nequi">Nequi</option>
            <option value="Bancolombia">Bancolombia</option>
            {/* Add more banks as needed */}
          </select>
        </div>

        <div>
          <label className="block text-base font-medium text-texto">Principal o secundaria?</label>
          <div className="flex items-center mt-1 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isPrincipal"
                value="Principal"
                checked={formData.isPrincipal}
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-principal"
              />
              <span className="ml-2">Principal</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isPrincipal"
                value="Secundaria"
                checked={!formData.isPrincipal}
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-principal"
              />
              <span className="ml-2">Secundaria</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button type="button" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow">
          Cancelar
        </button>
        <button type="submit" className="bg-principal text-white px-8 py-2 rounded-lg shadow hover:bg-principalToneDown">
          Aplicar
        </button>
      </div>
    </form>
  );
};

const BankAccountManager = () => {
  const [accounts, setAccounts] = useState([
    {
      bankName: 'Nequi',
      accountType: 'Ahorros',
      accountNumber: '********7830',
      isPrincipal: true,
      isPending: false,
    },
  ]);

  const [formVisible, setFormVisible] = useState(true);

  const addNewAccount = (newAccount) => {
    setAccounts((prevAccounts) => [newAccount, ...prevAccounts]);
    setFormVisible(false); // Hide the form after submission
  };

  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      <BankAccountDetails accounts={accounts} />
      {formVisible && <BankAccountForm onSubmit={addNewAccount} />}
    </div>
  );
};

export default BankAccountManager;
