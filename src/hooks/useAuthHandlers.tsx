import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  AuthError,
} from 'firebase/auth';

import { auth } from '../config/firebase';
import { UserApi } from '../services/user';
import { useAuth } from '../hooks/useAuth';
import { useNotificationContext } from '../hooks/useNotification';

import {
  UserRegisterForm,
  UserRegisterData,
  LoginData,
  AdminLoginData,
  PersonalInfo,
  ProfessionalInfo,
  BankAccountData,
  UserInformationData
} from 'types/types';

const OTP_EXPIRATION_TIME = 60 * 60 * 1000;

export const useAuthHandlers = () => {
  const navigate = useNavigate();
  const { dbUser, authUser, setOtpVerifiedTimestamp, clearAuthState, refreshDbUser } = useAuth();
  const { showNotification } = useNotificationContext();

  const handleError = (error: unknown) => {
    console.error('Authentication error:', error);
    if (error instanceof Error) {
      if ('code' in error) {
        const errorMessages: Record<string, string> = {
          'auth/email-already-in-use': 'Este correo electrónico ya está en uso.',
          'auth/invalid-credential': 'El documento y/o contraseña son incorrectos.',
          'auth/invalid-email': 'El correo electrónico no es válido.',
          'auth/weak-password': 'La contraseña es demasiado débil.',
          'auth/user-not-found': 'Credenciales incorrectas.',
          'auth/wrong-password': 'Credenciales incorrectas.',
          'auth/too-many-requests': 'Demasiados intentos fallidos. Por favor, inténtalo más tarde.',
        };
        const errorMessage = errorMessages[(error as AuthError).code] || error.message;
        showNotification('error', errorMessage);
      } else {
        showNotification('error', error.message);
      }
    } else if (typeof error === 'object' && error !== null && 'message' in error) {
      showNotification('error', (error as { message: string }).message);
    } else {
      showNotification('error', 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.');
    }
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
  
  const createAccount = async (data: UserRegisterForm) => {
    console.log('Creating account', { email: data.email });
    await handleAsyncOperation(async () => {
      const { email, password, documentType, documentNumber, phoneNumber } = data;
      let userRegisterData: UserRegisterData = { documentType, documentNumber, email, phoneNumber };

      const isAccountAlreadyRegistered = await UserApi.checkCredentials(userRegisterData);
      if (!isAccountAlreadyRegistered.success) {
        throw new Error(isAccountAlreadyRegistered.message);
      }

      const firebaseUser = await createUserWithEmailAndPassword(auth, email, password);
      userRegisterData = { ...userRegisterData, uid: firebaseUser.user.uid };

      const userRegistrationRequest = await UserApi.register(userRegisterData);
      if (!userRegistrationRequest.success) {
        throw new Error(userRegistrationRequest.message);
      }

      console.log('Account created successfully, navigating to OTP page');
      navigate("/auth/codigo");
    }, 'Cuenta creada exitosamente. Por favor, verifica tu número de teléfono.');
  };

  const loginAccount = async (data: LoginData) => {
    console.log('Logging in', { documentNumber: data.documentNumber });
    await handleAsyncOperation(async () => {
      const { documentNumber, password } = data;

      const emailRequest = await UserApi.getEmailByDocument(documentNumber);
      if (!emailRequest.success) {
        throw new Error(emailRequest.message);
      }

      await signInWithEmailAndPassword(auth, emailRequest.data.email, password);
      
      console.log('Login successful, navigating to OTP page');
      navigate("/auth/codigo");
    }, 'Inicio de sesión exitoso.');
  };

  const loginAdminAccount = async (data: AdminLoginData) => {
    console.log('Logging in admin', { email: data.email });
    await handleAsyncOperation(async () => {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);

      const userRequest = await UserApi.getUserByEmail(email);
      if (!userRequest.success || !userRequest.data.admin) {
        await logout()
        throw new Error('Acceso no autorizado');
      }

      console.log('Admin login successful, navigating to admin page');
      navigate("/admin");
    }, 'Inicio de sesión de administrador exitoso');
  };

  const sendOtp = async () => {
    console.log('Sending OTP');
    await handleAsyncOperation(async () => {
      if (!authUser || !dbUser){
        await logout();
        throw new Error("Necesitas una sesion de admin. Ve a la pestaña de ingreso.");
      }

      const response = await UserApi.sendOtp(dbUser.uid);
      
      if (!response.success) {
        throw new Error(response.message || 'Error al enviar el código OTP');
      }
      console.log('OTP sent successfully');
    }, 'Código SMS enviado exitosamente');
  };

  const verifyOtp = async (code: string) => {
    await handleAsyncOperation(async () => {
      if (!authUser || !dbUser){
        await logout();
        throw new Error("Necesitas una sesion de admin. Ve a la pestaña de ingreso.");
      }

      const response = await UserApi.verifyOtp(dbUser.uid, code);
      console.log('OTP verification response:', response);
      
      if (!response.success) {
        throw new Error(response.message || 'Código OTP inválido');
      }

      const expirationTimestamp = Date.now() + OTP_EXPIRATION_TIME;
      setOtpVerifiedTimestamp(expirationTimestamp);
      await refreshDbUser();

      navigate("/app");
    }, 'Número de teléfono verificado exitosamente');
  };

  const logout = async () => {
    console.log('Logging out');
    await handleAsyncOperation(async () => {
      await auth.signOut();
      clearAuthState();
      console.log('Auth state cleared');
      navigate("/");
    }, 'Sesión cerrada exitosamente');
  };


  const handleUpdateUserInformation = async (personalInfo: PersonalInfo, professionalInfo: ProfessionalInfo ) => {
    console.log(personalInfo);
    console.log(professionalInfo);
    await handleAsyncOperation(async () => {

      if (!authUser || !dbUser){
        await logout();
        throw new Error("Necesitas una sesion de admin. Ve a la pestaña de ingreso.");
      }

      const data: UserInformationData = {
        personalInfo,
        professionalInfo
      }

      const response = await UserApi.updateUserInformation(dbUser.uid ,data)
      if (!response.success) {
        throw new Error(response.message || 'Hubo un problema al actualizar tu cuenta. Intenta más tarde.');
      }

      await refreshDbUser();

    }, 'Tu informacion ha sido actualizada.');
  };

  const handleUpdateBankInformation = async (account: BankAccountData) => {
    console.log(account);
    await handleAsyncOperation(async () => {

      if (!authUser || !dbUser){
        await logout();
        throw new Error("Necesitas una sesion de admin. Ve a la pestaña de ingreso.");
      }

      const response = await UserApi.updateBankAccount(dbUser.uid, account)
      if (!response.success) {
        throw new Error(response.message || 'Hubo un problema al actualizar tu cuenta. Intenta más tarde.');
      }

      await refreshDbUser();

    }, 'Tu cuenta ha sido actualizada.');
  };

  return {
    createAccount,
    loginAccount,
    logout,
    verifyOtp,
    sendOtp,
    loginAdminAccount,
    handleUpdateBankInformation,
    handleUpdateUserInformation
  };
};