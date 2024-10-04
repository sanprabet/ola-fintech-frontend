import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890?text=Hello!%20I%20would%20like%20more%20information."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 rounded-full shadow-lg bg-green-500 text-white hover:bg-green-600 transition duration-200
                   w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
        aria-label="WhatsApp Chat"
      >
        <FontAwesomeIcon 
          icon={faWhatsapp} 
          className="text-4xl z-50"
        />
      </a>
    </>
  );
};

export default LandingLayout;