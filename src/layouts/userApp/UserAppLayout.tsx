import React, { ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

import { useAuthHandlers } from '../../hooks/useAuthHandlers';

interface LandingLayoutProps {
  children?: ReactNode;
}

const AppLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlers = useAuthHandlers();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="min-h-screen bg-fondo pt-4">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} handleLogout={handlers.logout} />
        <div className="px-2 md:px-4 xl:ml-72">
          <div className='xl:hidden'>
            <Navbar toggleSidebar={toggleSidebar} />
          </div>
          <div className="mt-4 xl:mt-5">
            { children }
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;