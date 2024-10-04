import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';
import { NotificationProvider } from './hooks/useNotification';

import ScrollToTop from './components/utils/ScrollToTop';

import { AdminProtectedRoute } from './pages/ProtectedRoutes';

import Landings from './pages/Landings';
import AppRoutes from './pages/App/AppRoutes';
import AuthRoutes from './pages/Auth/AuthRoutes';
import AdminRoutes from './pages/Admin/AdminRoutes'

function App() {
  return (
    <BrowserRouter>

      <AuthProvider>
      <NotificationProvider>

      <ScrollToTop />

      <Routes>
        <Route path="/*" element={
          <Landings />} 
        />
        <Route path="/auth/*" element={
          <AuthRoutes />} 
        />
        <Route path="/app/*" element={
          <AppRoutes />
        } />
        <Route path="/admin/*" element={
          <AdminProtectedRoute>
            <AdminRoutes />
          </AdminProtectedRoute>
        } />
      </Routes>

      </NotificationProvider>
      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;