import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfilePic from "../../assets/logo.png";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  handleLogout: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, handleLogout }) => {
  const location = useLocation();

  // TODO:Agregar esto de forma dinamica
  const userName = "Yeison";
  const userType = "superAdmin";

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
          <p className="text-sm text-gray-700">
            {"Bienvenido " + userName}
            <br />
            <span className="text-sm text-bold text-principal">{userType}</span>
          </p>
          
        </div>
      </div>
      <div className="m-4 flex-grow">
        <ul className="flex flex-col gap-4">
          <li>
            {/* TODO: Segunda etapa, cambiar el link a /app/creditos */}
            <Link to="/admin" className={getLinkClasses('/admin')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-inherit" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.41 0-8 2.015-8 4.5V19c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-.5c0-2.485-3.59-4.5-8-4.5z"></path>
              </svg>
              <span>Usuarios</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="pb-4">
        {/* TODO: Agregar Logica que cierre la cuenta de la persona */}
        <button onClick={() => handleLogout()} className="block text-center text-lg font-medium text-principal hover:underline w-fit mx-auto">
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
