import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import HamburguerMenu from '../../assets/hamburguer-menu.svg';
import CloseMenu from '../../assets/close-menu.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-3xl font-bold leading-none" to="/">
          <img src={Logo} className='w-10 h-10' alt="" />
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="navbar-burger flex items-center text-principal p-3">
            <img src={HamburguerMenu} className='w-9 h-9' alt="" />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link
              className={`text-sm ${location.pathname === '/' ? 'text-principal font-bold' : 'text-gray-500 hover:text-principal'}`}
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm ${location.pathname === '/tasasytarifas' ? 'text-principal font-bold' : 'text-gray-500 hover:text-principal'}`}
              to="/tasasytarifas"
            >
              Tasas y Tarifas
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm ${location.pathname === '/nosotros' ? 'text-principal font-bold' : 'text-gray-500 hover:text-principal'}`}
              to="/nosotros"
            >
              Nosotros
            </Link>
          </li>
        </ul>
        <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-secondario hover:bg-secondarioToneDown text-sm text-black font-bold rounded-full transition-all duration-200" to="/app/ingresar">
          Ingresa
        </Link>
        <Link className="hidden lg:inline-block py-2 px-6 bg-principal hover:bg-principalToneDown text-sm text-white font-bold rounded-full transition-all duration-200" to="/app/registrate">
          Pide tu Credito
        </Link>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="/">
              <img src={Logo} className='w-10 h-10' alt="" />
            </Link>
            <button onClick={toggleMenu} className="navbar-close">
              <img src={CloseMenu} className='w-7 h-7' alt="Close menu" />
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link className={`block p-4 text-md font-semibold ${location.pathname === '/' ? 'text-principal' : 'text-gray-500 hover:text-principal'} rounded`} to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              </li>
              <li className="mb-1">
                <Link className={`block p-4 text-md font-semibold ${location.pathname === '/tasasytarifas' ? 'text-principal' : 'text-gray-500 hover:text-principal'} rounded`} to="/tasasytarifas" onClick={() => setIsMenuOpen(false)}>Tasas y Tarifas</Link>
              </li>
              <li className="mb-1">
                <Link className={`block p-4 text-md font-semibold ${location.pathname === '/nosotros' ? 'text-principal' : 'text-gray-500 hover:text-principal'} rounded`} to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link className="block px-4 py-3 mb-3 text-md text-center font-semibold leading-none bg-secondario hover:bg-principalToneDown hover:text-white rounded-full text-black transition-all duration-200" to="/app/ingreso">
                Ingresa
              </Link>
              <Link className="block px-4 py-3 mb-2 leading-loose text-md text-center text-white font-semibold bg-principal hover:bg-principalToneDown rounded-full transition-all duration-200" to="/app/registrate">
                Pide tu Credito
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024 - All Rights Reserved</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;