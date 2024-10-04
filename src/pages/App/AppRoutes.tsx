import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../../layouts/UserApp/UserAppLayout';
import FormularioRegistro from './FormularioRegistro';
import Credito from './Credito';
import UserAccount from './UserAccount';
import { useNotificationContext } from '../../hooks/useNotification';

import { AppProtectedRoute, RegisterFormProtectedRoute } from '../ProtectedRoutes';

function AppRoutes() {
  const { NotificationBarWrapper } = useNotificationContext();

  return (
    <>
      <Routes>
        <Route path="/*" element={
          <AppProtectedRoute>
            <AppLayout />
          </AppProtectedRoute>
        }>
          <Route index element={
            <Credito />
          } />
          <Route path="miCuenta" element={
            <UserAccount />
          } />
        </Route>
        <Route path="/formularioRegistro" element={
          <RegisterFormProtectedRoute>
            <FormularioRegistro />
          </RegisterFormProtectedRoute>
        } />
      </Routes>
      <NotificationBarWrapper />
    </>
  );
}

export default AppRoutes;