import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth/AuthLayout';
import Login from './Login';
import Register from './Register';
import OTPCode from './Codigo';
import AdminLogin from './AdminLogin';
import PasswordReset from './Recovery/PasswordReset';
import PasswordRequest from './Recovery/PasswordRequest';
import PasswordCode from './Recovery/PasswordCode';
import NotificationBar from '../../components/NotificationBar';

import { RegisterData, LoginData, OTPCodeData, AdminLoginData, PasswordRequestData, PasswordRecoveryData, PasswordResetData } from 'types';

function AuthRoutes() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | 'loading'; message: string } | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    if (notification) {
      timer = window.setTimeout(() => {
        hideNotification();
      }, 8000); // 10 seconds
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

  const createAccount = async (data: RegisterData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/auth/codigo");
    }, 'Cuenta creada exitosamente');
  };

  const loginAccount = async (data: LoginData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/auth/codigo");
    }, 'Inicio de sesión exitoso');
  };

  const loginAdminAccount = async (data: AdminLoginData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/admin");
    }, 'Inicio de sesión de administrador exitoso');
  };

  const verifyCode = async (data: OTPCodeData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/app/formularioRegistro");
    }, 'Código verificado exitosamente');
  };

  const handleRecoveryRequest = async (data: PasswordRequestData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/auth/recuperar/codigo");
    }, 'Solicitud de recuperación enviada');
  };

  const handleRecoveryCode = async (data: PasswordRecoveryData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/auth/recuperar/nuevaContraseña");
    }, 'Código de recuperación verificado');
  };

  const handleRecoveryData = async (data: PasswordResetData) => {
    await handleAsyncOperation(async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/auth/ingreso");
    }, 'Contraseña restablecida exitosamente');
  };

  return (
    <>
      <Routes>
        <Route path="/*" element={<AuthLayout />}>
          <Route path="admin" element={<AdminLogin handleSubmit={loginAdminAccount} />} />
          <Route path="codigo" element={<OTPCode handleSubmit={verifyCode} />} />
          <Route path="registro" element={<Register handleSubmit={createAccount} />} />
          <Route path="ingreso" element={<Login handleSubmit={loginAccount} />} />
        </Route>
        <Route path="/recuperar/*" element={<AuthLayout />}>
          <Route index element={<PasswordRequest handleSubmit={handleRecoveryRequest} />}/>
          <Route path="codigo" element={<PasswordCode handleSubmit={handleRecoveryCode} />}/>
          <Route path="nuevaContraseña" element={<PasswordReset handleSubmit={handleRecoveryData} />}/>
        </Route>
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

export default AuthRoutes;