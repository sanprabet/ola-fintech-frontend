import React, { useState, useEffect } from 'react';
import { UserDB, BankAccountData } from 'types';

interface UserInfoCardProps {
  user: UserDB;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Información del Usuario</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Nombre:</strong> {`${user.personalInfo.primerNombre} ${user.personalInfo.primerApellido}`}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Teléfono:</strong> {user.phoneNumber}</p>
        <p><strong>Documento:</strong> {`${user.documentType} ${user.documentNumber}`}</p>
        <p><strong>Fecha de Nacimiento:</strong> {user.personalInfo.fechaNacimiento}</p>
        <p><strong>Ciudad:</strong> {`${user.personalInfo.ciudad}, ${user.personalInfo.departamento}`}</p>
      </div>
    </div>
  );
};

interface BankAccountCardProps {
  account: BankAccountData;
}

const BankAccountCard: React.FC<BankAccountCardProps> = ({ account }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center mb-4">
      <div>
        <div className="text-lg">
          <p><strong>Banco:</strong> {account.accountInstitution}</p>
          <p><strong>Tipo de cuenta:</strong> {account.accountType}</p>
          <p><strong>Número de cuenta:</strong> {account.accountNumber}</p>
        </div>
      </div>
    </div>
  );
};

interface BankAccountFormProps {
  account: BankAccountData | null;
  onSubmit: (account: BankAccountData) => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({ account, onSubmit }) => {
  const [formData, setFormData] = useState<BankAccountData>(account || {
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
      <h2 className="text-2xl font-bold mb-4">{account ? 'Editar cuenta bancaria' : 'Agregar cuenta bancaria'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-base font-medium text-texto">Tipo de cuenta</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
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
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button type="button" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow">
          Cancelar
        </button>
        <button type="submit" className="bg-principal text-white px-8 py-2 rounded-lg shadow hover:bg-principalToneDown">
          {account ? 'Actualizar' : 'Agregar'}
        </button>
      </div>
    </form>
  );
};

interface UserAccountProps {
  fetchAccount: () => Promise<UserDB | null>;
  handleSubmit: (account: BankAccountData) => void;
}

const UserAccount: React.FC<UserAccountProps> = ({ fetchAccount, handleSubmit }) => {
  const [user, setUser] = useState<UserDB | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAccount = async () => {
      setIsLoading(true);
      try {
        const fetchedUser = await fetchAccount();
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching account:", error);
        // Handle error (e.g., show an error message)
      } finally {
        setIsLoading(false);
      }
    };

    loadAccount();
  }, [fetchAccount]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      <h1 className="text-5xl mb-5">Tu cuenta</h1>
      {user && <UserInfoCard user={user} />}
      {user && user.accountInformation && (
        <BankAccountCard account={user.accountInformation} />
      )}
      <BankAccountForm 
        account={user?.accountInformation || null} 
        onSubmit={(newAccountInfo) => {
          if (user) {
            handleSubmit(newAccountInfo);
            setUser({ ...user, accountInformation: newAccountInfo });
          }
        }} 
      />
    </div>
  );
};

export default UserAccount;