import { useNavigate } from 'react-router-dom';
import { useNotificationContext } from '../hooks/useNotification';

import { UserApi } from '../services/user';
import { CreditApi } from '../services/credit';

import useAuth from './useAuth';
import { useAuthHandlers } from './useAuthHandlers';

import {
  UserInformationRequest,
  CreditData,
  UserDB,
  UserAllData
} from 'types/types'; // Import the required types

// Define return types for the handler functions
interface CreditHandlers {
  handleFormularioRegistro: (data: UserInformationRequest) => Promise<void>;
  requestCredit: (data: CreditData, codeOtp: string) => Promise<void>;
  fetchUsersAdmin: (    
    currentPage: number, 
    usersPerPage: number, 
    searchTerm: string, 
    showPending: boolean, 
    showActive: boolean
  ) => Promise<{ users: UserAllData[], total: number } | void>;
}

export const useCreditHandlers = (): CreditHandlers => {
  const navigate = useNavigate();
  const { dbUser, refreshDbUser } = useAuth();
  const handlers = useAuthHandlers();

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

  const handleFormularioRegistro = async (data: UserInformationRequest) => {
    await handleAsyncOperation(async () => {
      if (!dbUser || !dbUser.uid) {
        throw new Error("User not authenticated");
      }
      await UserApi.updateUserInformation(dbUser.uid, data);
      await refreshDbUser();
      navigate("/app");
    }, 'Registro completado exitosamente');
  };

  const requestCredit = async (data: CreditData, codeOtp: string) => {
    await handleAsyncOperation(async () => {
      if (!dbUser || !dbUser.uid) throw new Error("User not authenticated");

      await handlers.verifyOtp(codeOtp);
      const response = await CreditApi.sendCreditForm(data, codeOtp, dbUser?.uid);
      if (!response.success) {
        throw new Error(response.message || 'Hubo un problema al realizar tu peticion. Intenta más tarde.');
      }

      await refreshDbUser();
    }, 'Credito Solicitado Exitosamente');
  };

  const fetchUsersAdmin = async (
    currentPage: number, 
    usersPerPage: number, 
    searchTerm: string, 
    showPending: boolean, 
    showActive: boolean
  ): Promise<{ users: UserAllData[], total: number } | void> => {
    try {
      if (!dbUser || !dbUser.admin) {
        throw new Error("Esta accion no esta permitida. Usuario no autenticado como admin");
      }
  
      const response = await UserApi.getUsersAdmin(currentPage, usersPerPage, searchTerm, showPending, showActive);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  };


  return {
    handleFormularioRegistro,
    requestCredit,
    fetchUsersAdmin,
  };
};