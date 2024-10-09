import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../../layouts/Auth/AuthLayout';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Register from './Register';
import OTPCode from './Codigo';
import AdminLogin from './AdminLogin';

import { 
  CodeProtectedRoute, 
  LoginProtectedRoute, 
  RegisterProtectedRoute, 
  LoginAdminProtectedRoute 
} from '../ProtectedRoutes';

import { useNotificationContext } from '../../hooks/useNotification';

function AuthRoutes() {
  const { NotificationBarWrapper } = useNotificationContext();

  return (
    <>
      <Routes>
        <Route path="/*" element={
          <AuthLayout />
        }>
          <Route path="admin" element={
            <LoginAdminProtectedRoute>
              <AdminLogin />
            </LoginAdminProtectedRoute>
          } />
          
          <Route path="registro" element={
            <RegisterProtectedRoute>
              <Register />
            </RegisterProtectedRoute>
          } />
          
          <Route path="ingreso" element={
            <LoginProtectedRoute>
              <Login />
            </LoginProtectedRoute>
          } />
          
          <Route path="recuperar" element={
            <LoginProtectedRoute>
              <ResetPassword />
            </LoginProtectedRoute>
          } />
          
          <Route path="codigo" element={
            <CodeProtectedRoute>
              <OTPCode />
            </CodeProtectedRoute>
          } />
        </Route>
      </Routes>
      <NotificationBarWrapper />
    </>
  );
}

export default AuthRoutes;