import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="block w-full bg-transparent text-texto px-1 md:px-4 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo on the left */}
        <Link to="/app" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-10 object-cover" />
        </Link>
        
        {/* Hamburger Menu on the right */}
        <button
          onClick={toggleSidebar}
          className="xl:hidden  text-principal hover:bg-principal/10 p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-9 6h9"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-12 w-60 px-5 py-3 bg-principal rounded-lg shadow-lg border dark:border-transparent">
            <ul className="space-y-3 dark:text-white">
              <li className="font-medium">
                <a
                  href="#"
                  className="flex items-center transition-colors duration-200 border-r-4 border-transparent hover:border-secondario"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  Tu Cuenta
                </a>
              </li>
              <li className="font-medium">
                <a
                  href="#"
                  className="flex items-center transition-colors duration-200 border-r-4 border-transparent hover:border-secondario"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Configuración
                </a>
              </li>
              <hr className="dark:border-gray-700" />
              <li className="font-medium">
                <button
                  className="flex items-center transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                >
                  <svg
                    className="w-6 h-6 mr-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  Cerrar Sesion
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;