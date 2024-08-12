import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';

interface LandingLayoutProps {
  children?: ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        {children}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LandingLayout;