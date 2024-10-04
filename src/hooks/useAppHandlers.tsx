import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotificationContext } from '../hooks/useNotification';
import { UserApi } from '../services/user';
import useAuth from './useAuth';

import {
  UserInformationData,
  CreditRequestData,
  BankAccountData,
  UserDB
} from 'types/types';

export const useAppHandlers = () => {
  const navigate = useNavigate();
  const { dbUser, refreshDbUser } = useAuth();

  const { showNotification } = useNotificationContext();

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      showNotification('error', error.message);
    } else {
      showNotification('error', 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.');
    }
    console.error('App error:', error);
  };

  const handleAsyncOperation = async (operation: () => Promise<void>, successMessage: string) => {
    showNotification('loading', 'Procesando...');
    try {
      await operation();
      showNotification('success', successMessage);
    } catch (error) {
      handleError(error);
    }
  };

  const handleFormularioRegistro = async (data: UserInformationData) => {
    await handleAsyncOperation(async () => {
      if (!dbUser || !dbUser.uid) {
        throw new Error("User not authenticated");
      }
      await UserApi.updateUserInformation(dbUser.uid, data);
      await refreshDbUser();
      navigate("/app");
    }, 'Registro completado exitosamente');
  };

  const handleFormularioCredito = async (data: CreditRequestData) => {
    console.log(data)
    await handleAsyncOperation(async () => {
    }, 'Credito Solicitado Exitosamente');
  };

  const fetchAccount = async (): Promise<UserDB> => { 
    try {
      if (!dbUser || !dbUser.email) throw new Error("Esta accion no esta permitida. Usuario no autenticado")
      return dbUser

    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  return {
    handleFormularioRegistro,
    handleFormularioCredito,
    fetchAccount,
  };
};