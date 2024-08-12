import React, { useState } from 'react';

import Logo from '../../assets/logo.png';
import HamburguerMenu from '../../assets/hamburguer-menu.svg';
import CloseMenu from '../../assets/close-menu.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src={Logo} className='w-10 h-10' alt="" />
        </a>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="navbar-burger flex items-center text-principal p-3">
            <img src={HamburguerMenu} className='w-9 h-9' alt="" />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li><a className="text-sm text-principal font-bold" href="#">Inicio</a></li>
          <li><a className="text-sm text-gray-500 hover:text-principal" href="#">Tasas y Tarifas</a></li>
          <li><a className="text-sm text-gray-500 hover:text-principal" href="#">Nosotros</a></li> 
        </ul>
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-200 hover:bg-gray-300 text-sm text-principal font-bold rounded-xl transition duration-200" href="#">Ingresar</a>
        <a className="hidden lg:inline-block py-2 px-6 bg-principal hover:bg-secondario hover:text-texto text-sm text-white font-bold rounded-xl transition duration-200" href="#">Pide tu Credito</a>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img src={Logo} className='w-10 h-10' alt="" />
            </a>
            <button onClick={toggleMenu} className="navbar-close">
              <img src={CloseMenu} className='w-7 h-7' alt="Close menu" />
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-md font-semibold text-principal hover:text-principal rounded" href="#">Inicio</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-md font-semibold text-principal hover:text-principal rounded" href="#">Tasas y Tarifas</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-md font-semibold text-principal hover:text-principal rounded" href="#">Nosotros</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-3 text-md text-center font-semibold leading-none bg-gray-200 hover:bg-gray-100 rounded-xl text-principal" href="#">Ingresa</a>
              <a className="block px-4 py-3 mb-2 leading-loose text-md text-center text-white font-semibold bg-principal hover:bg-secondario hover:text-texto rounded-xl" href="#">Pide tu Credito</a>
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