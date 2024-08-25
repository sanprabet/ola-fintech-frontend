import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfilePic from "../../assets/logo.png";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    return `flex items-center gap-4 px-4 py-3 text-lg font-medium text-principal rounded-lg hover:bg-gray-100 ${
      location.pathname === path ? 'bg-secondario' : ''
    }`;
  };

  return (
    <aside
      className={`bg-white fixed inset-0 z-50 w-72 ${
        isOpen ? 'translate-x-0' : '-translate-x-80'
      } xl:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
    >
      {/* Close Button */}
      <button 
        onClick={toggleSidebar} 
        className="absolute xl:hidden top-4 right-4 p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        aria-label="Close Sidebar"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          role="img"
        >
          <title>Close Sidebar</title>
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Profile Section */}
      <div className="flex items-center gap-4 p-6 bg-gray-100 border-b border-gray-300">
        <div className="relative">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-10 h-10"
          />

        </div>
        <div>
          <p className="text-sm text-gray-700">Bienvenido Yeison.</p>
          <p className="text-lg font-semibold text-gray-900">Nivel 1</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="m-4 flex-grow">
        <div className="border-b border-gray-300 pb-4 mb-4">
          <p className="text-center text-lg font-semibold text-principal mb-4">Deuda a la fecha</p>
          <p className="text-center text-3xl font-bold text-principal">$271,525</p>
        </div>

        <ul className="flex flex-col gap-4">
          {/* Inicio */}
          <li>
            <Link to="/app" className={getLinkClasses('/app')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-inherit" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
              </svg>
              <span>Inicio</span>
            </Link>
          </li>

          {/* Mis Creditos */}
          <li>
            <Link to="/app/creditos" className={getLinkClasses('/app/creditos')}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6 text-inherit" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true" 
                role="img"
              >
                <title>Outlined Credit Card Icon</title>
                <rect x="2" y="6" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
                <line x1="6" y1="14" x2="8" y2="14"></line>
                <line x1="10" y1="14" x2="14" y2="14"></line>
              </svg>
              <span>Mis Creditos</span>
            </Link>
          </li>

          {/* Mi Salud Financiera */}
          <li>
            <Link to="/app/salud" className={getLinkClasses('/app/salud')}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6 text-inherit" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true" 
                role="img"
              >
                <title>Rounder Heart Icon</title>
                <path d="M12 21.35l-1.55-1.42C5.12 15.43 2 12.24 2 8.5 2 5.5 4.5 3 7.5 3c1.54 0 3.04.99 3.5 2.44C11.46 3.99 12.96 3 14.5 3 17.5 3 20 5.5 20 8.5c0 3.74-3.12 6.93-8.45 11.43L12 21.35z"/>
              </svg>
              <span>Mi Salud Financiera</span>
            </Link>
          </li>

          {/* Mi Cuenta */}
          <li>
            <Link to="/app/cuenta" className={getLinkClasses('/app/cuenta')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-inherit" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.41 0-8 2.015-8 4.5V19c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-.5c0-2.485-3.59-4.5-8-4.5z"></path>
              </svg>
              <span>Mi Cuenta</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Fixed Bottom Section */}
      <div className="px-4 pb-3">
        <Link to="/app/creditos" className="block w-full py-4 text-center text-lg font-semibold text-white bg-principal rounded-lg hover:bg-secondario">
          Pagar mi cuota
        </Link>
      </div>
      <div className="pb-4">
        <Link to="/" className="block text-center text-lg font-medium text-principal hover:underline w-fit mx-auto">
          Cerrar sesión
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
