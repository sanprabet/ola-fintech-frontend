import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AppLayout from '../../layouts/UserApp/UserAppLayout';
import FormularioRegistro from './FormularioRegistro';
import FormularioCredito from './FormularioCredito';
import Credito from './Credito';
import UserAccount from './UserAccount';
import NotificationBar from '../../components/NotificationBar';

import { AccountCreationData, CreditRequestData, BankAccountData, UserDB } from 'types';

function UserAppRoutes() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | 'loading'; message: string } | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    if (notification) {
      timer = window.setTimeout(() => {
        hideNotification();
      }, 6000);
    }
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [notification]);

  const showNotification = (type: 'success' | 'error' | 'loading', message: string) => {
    setNotification({ type, message });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  const handleAsyncOperation = async (operation: () => Promise<void>, successMessage: string) => {
    showNotification('loading', 'Procesando...');
    try {
      await operation();
      showNotification('success', successMessage);
    } catch (error) {
      showNotification('error', 'Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
  };

  const handleFormularioRegistro = async (data: AccountCreationData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/app/formularioCredito");
    }, 'Registro completado exitosamente');
  };

  const handleFormularioCredito = async (data: CreditRequestData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/app");
    }, 'Solicitud de crédito enviada exitosamente');
  };

  const handleEditarBanca = async (data: BankAccountData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call to update or create the account
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/app");
    }, 'Información bancaria actualizada exitosamente');
  };

  const fetchAccount = async (): Promise<UserDB> => {
    // Simulating API call to fetch the account
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Randomly decide whether to include account information
    const hasAccountInfo = Math.random() < 0.5;

    // Mock API response
    const mockAccount: UserDB = {
      financialCheckUntil: null,
      documentType: "CC",
      documentNumber: "1234567890",
      email: "user@example.com",
      phoneNumber: "+1234567890",
      personalInfo: {
        primerNombre: "John",
        segundoNombre: "",
        primerApellido: "Doe",
        segundoApellido: "",
        estadoCivil: "Soltero",
        fechaNacimiento: "1990-01-01",
        genero: "Masculino",
        nivelEducativo: "Universidad",
        departamento: "Cundinamarca",
        ciudad: "Bogotá"
      },
      professionalInfo: {
        ocupacion: "Empleado",
        actividadEconomica: "Tecnología",
        estrato: "3",
        tieneCuentaBancaria: hasAccountInfo ? "Sí" : "No",
        situacionCrediticia: "Buena",
        antiguedadTelefonoMovil: "5 años"
      },
    };

    // Only add accountInformation if hasAccountInfo is true
    if (hasAccountInfo) {
      mockAccount.accountInformation = {
        accountType: "ahorro",
        accountNumber: "1234567890",
        accountInstitution: "Banco Ejemplo"
      };
    }

    return mockAccount;
  };

  const handleAddBankAccount = async (data: BankAccountData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call to add bank account
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Adding bank account:', data);
      // In a real scenario, you would update the user's account information here
    }, 'Cuenta bancaria agregada exitosamente');
  };

  return (
    <>
      <Routes>
        <Route path="/*" element={<AppLayout />} >
          <Route index element={<Credito />} />
          <Route path="miCuenta" element={
            <UserAccount 
              fetchAccount={fetchAccount}
              handleSubmit={handleEditarBanca} 
            />
          } />
        </Route>
        <Route path="/formularioRegistro" element={<FormularioRegistro handleSubmit={handleFormularioRegistro} />} />
        <Route path="/formularioCredito" element={
          <FormularioCredito 
            handleSubmit={handleFormularioCredito}
            fetchUserAccount={fetchAccount}
            handleAddBankAccount={handleAddBankAccount}
          />
        } />
      </Routes>
      {notification && (
        <NotificationBar
          type={notification.type}
          message={notification.message}
          onDismiss={hideNotification}
        />
      )}
    </>
  );
}

export default UserAppRoutes;