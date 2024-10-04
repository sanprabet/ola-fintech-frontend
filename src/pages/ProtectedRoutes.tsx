import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const LoadingSpinner: React.FC = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

const useProtectedRouteLogic = () => {
  const { authUser, dbUser, isOtpVerified, isLoading, setOtpVerifiedTimestamp } = useAuth();
  const location = useLocation();

  return { authUser, dbUser, isOtpVerified, location, isLoading };
};

export const AppProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, dbUser, isOtpVerified, location, isLoading } = useProtectedRouteLogic();

  if (isLoading) return <LoadingSpinner />;
  if (!authUser || !dbUser) return <Navigate to="/auth/ingreso" state={{ from: location }} replace />;
  if (dbUser.admin) return <Navigate to="/auth/admin" state={{ from: location }} replace />;
  if (!isOtpVerified) return <Navigate to="/auth/codigo" state={{ from: location }} replace />;
  if (!dbUser.professionalInfo || !dbUser.personalInfo) return <Navigate to="/app/formularioRegistro" state={{ from: location }} replace />;

  return <>{children}</>;
};

export const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, dbUser, location, isLoading } = useProtectedRouteLogic();

  if (isLoading) return <LoadingSpinner />;
  if (!authUser || !dbUser || !dbUser?.admin) {
    return <Navigate to="/auth/admin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export const LoginProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, dbUser, isOtpVerified, location, isLoading } = useProtectedRouteLogic();

  if (isLoading) return <LoadingSpinner />;
  if (authUser && dbUser && isOtpVerified) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }

  if (authUser && dbUser && !isOtpVerified) {
    return <Navigate to="/auth/codigo" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export const RegisterProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, dbUser, isOtpVerified, location, isLoading } = useProtectedRouteLogic();

  if (isLoading) return <LoadingSpinner />;
  if (authUser && dbUser && !isOtpVerified) return <Navigate to="/auth/codigo" state={{ from: location }} replace />;
  if (authUser && dbUser && isOtpVerified) return <Navigate to="/app" state={{ from: location }} replace />;

  if ((!authUser || !dbUser) && isOtpVerified) {
    return <Navigate to="/auth/ingreso" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export const CodeProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, dbUser, isOtpVerified, location, isLoading } = useProtectedRouteLogic();

  if (isLoading) return <LoadingSpinner />;
  if (authUser && dbUser && isOtpVerified) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }
  
  if (authUser && dbUser && dbUser.admin){
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  if (!authUser || !dbUser) {
    return <Navigate to="/auth/ingreso" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export const LoginAdminProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, dbUser, location, isLoading } = useProtectedRouteLogic();

  if (isLoading) return <LoadingSpinner />;
  if (authUser && dbUser && dbUser.admin) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  if (authUser && dbUser && !dbUser.admin) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export const RegisterFormProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, dbUser, isOtpVerified, location, isLoading } = useProtectedRouteLogic();

  if (isLoading) return <LoadingSpinner />;
  if (!authUser || !dbUser) return <Navigate to="/auth/ingreso" state={{ from: location }} replace />;
  if (dbUser.admin) return <Navigate to="/auth/admin" state={{ from: location }} replace />;
  if (!isOtpVerified) return <Navigate to="/auth/codigo" state={{ from: location }} replace />;
  if (authUser && dbUser && dbUser.professionalInfo && dbUser.personalInfo) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};