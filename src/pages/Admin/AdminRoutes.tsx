import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminApp/AdminLayout';
import Users from './Users';

import { useNotificationContext } from '../../hooks/useNotification';

export default function AdminAppRoutes() {

  const { NotificationBarWrapper } = useNotificationContext();

  return (
    <>
      <Routes>
        <Route path="/*" element={<AdminLayout />} >
          <Route index element={
            <Users/>
          } />
        </Route>
      </Routes>
      <NotificationBarWrapper />
    </>
  );
};