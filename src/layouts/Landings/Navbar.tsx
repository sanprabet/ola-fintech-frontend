import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo-ola.png';
import HamburguerMenu from '../../assets/hamburguer-menu.svg';
import CloseMenu from '../../assets/close-menu.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (location.pathname !== '/') {
      window.location.href = '/';
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDifference = Math.abs(currentScrollPos - lastScrollTop);

      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(() => {
        if (currentScrollPos < lastScrollTop && scrollDifference > 50) {
          // Scrolling up and scrolled more than 50px
          setVisible(true);
        } else if (currentScrollPos > lastScrollTop && scrollDifference > 50) {
          // Scrolling down and scrolled more than 50px
          setVisible(false);
        }

        lastScrollTop = currentScrollPos;
      }, 150); // 150ms delay

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  return (
    <>
      {!isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            transition: 'transform 0.3s ease-in-out',
            transform: visible ? 'translateY(0)' : 'translateY(-100%)',
            zIndex: 1000,
          }}
        >
          <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
            <Link className="text-3xl font-bold leading-none" to="/" onClick={handleLogoClick}>
              <img src={Logo} className='h-8 sm:h-9' alt="Logo" />
            </Link>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="navbar-burger flex items-center text-principal p-1">
                <img src={HamburguerMenu} className='w-6 h-6' alt="Menu" />
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
            <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-secondario hover:bg-secondarioToneDown text-sm text-black font-bold rounded-full transition-all duration-200" to="/auth/ingreso">
              Pagar mi cuota
            </Link>
            <div className="hidden lg:inline-block relative">
              <button
                onClick={toggleDropdown}
                className="py-2 px-6 bg-principal hover:bg-principalToneDown text-sm text-white font-bold rounded-full transition-all duration-200 flex items-center"
              >
                Ingresar
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <Link
                    to="/auth/ingreso"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Ingresar
                  </Link>
                  <Link
                    to="/auth/registro"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Registrarme
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
      <div className={`navbar-menu fixed inset-0 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-4 px-4 sm:py-6 sm:px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-6 sm:mb-8">
            <Link className="mr-auto text-2xl sm:text-3xl font-bold leading-none" to="/" onClick={handleLogoClick}>
              <img src={Logo} className='h-8 sm:h-9' alt="Logo" />
            </Link>
            <button onClick={toggleMenu} className="navbar-close">
              <img src={CloseMenu} className='w-5 h-5 sm:w-6 sm:h-6' alt="Close menu" />
            </button>
          </div>
          <div className="flex-grow">
            <ul>
              <li className="mb-2 sm:mb-3">
                <Link className={`block py-3 sm:py-4 text-base sm:text-lg font-semibold ${location.pathname === '/' ? 'text-principal' : 'text-gray-500 hover:text-principal'} rounded`} to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              </li>
              <li className="mb-2 sm:mb-3">
                <Link className={`block py-3 sm:py-4 text-base sm:text-lg font-semibold ${location.pathname === '/tasasytarifas' ? 'text-principal' : 'text-gray-500 hover:text-principal'} rounded`} to="/tasasytarifas" onClick={() => setIsMenuOpen(false)}>Tasas y Tarifas</Link>
              </li>
              <li className="mb-2 sm:mb-3">
                <Link className={`block py-3 sm:py-4 text-base sm:text-lg font-semibold ${location.pathname === '/nosotros' ? 'text-principal' : 'text-gray-500 hover:text-principal'} rounded`} to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-4 sm:pt-6">
              <Link className="block px-4 py-2 sm:py-3 mb-2 sm:mb-3 leading-loose text-base sm:text-lg text-center font-semibold bg-secondario hover:bg-principalToneDown hover:text-white rounded-full text-black transition-all duration-200" to="/auth/ingreso" onClick={() => setIsMenuOpen(false)}>
                Pagar mi cuota
              </Link>
              <Link className="block px-4 py-2 sm:py-3 mb-2 sm:mb-3 leading-loose text-base sm:text-lg text-center text-white font-semibold bg-principal hover:bg-principalToneDown rounded-full transition-all duration-200" to="/auth/ingreso" onClick={() => setIsMenuOpen(false)}>
                Ingresar
              </Link>
              <Link className="block px-4 py-2 sm:py-3 mb-2 sm:mb-3 leading-loose text-base sm:text-lg text-center text-white font-semibold bg-principal hover:bg-principalToneDown rounded-full transition-all duration-200" to="/auth/registro" onClick={() => setIsMenuOpen(false)}>
                Registrarme
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024 - All Rights Reserved</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;