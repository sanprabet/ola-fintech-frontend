import React from 'react';
import { Link } from "react-router-dom";

const CheckIcon: React.FC = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-principal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const Requirements: React.FC = () => {
  return (
    <section className="bg-white bg-opacity-30">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-texto">
              El crédito digital que te ahorra tiempo en filas
            </h2>
            <ul className="mt-4 lg:mt-8 text-texto text-base sm:text-xl space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                <span>Lo pides desde nuestra web en tu celular o computador y lo recibes en menos de 1 día hábil a tu cuenta.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>Sin filas, sin papeles, sin codeudor.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>Tasa de interés fija de 1,88% M.V. o 25% E.A.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>Plazo mínimo 60 días y plazo máximo 90 días aplicando a la extensión que puedes usar si lo requieres.</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row mt-8 lg:mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/auth/registro" 
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-principal rounded-full hover:bg-secondario hover:text-black"
                role="button"
              >
                Quiero mi crédito
                <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link 
                to="/tasasytarifas" 
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-texto transition-all duration-200 bg-secondario rounded-full hover:bg-principal hover:text-white"
                role="button"
              >
                Tasas y Tarifas
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/api/placeholder/600/400"
              alt="El crédito digital"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-20">
          <div className="order-2 md:order-1">
            <img
              src="/api/placeholder/600/400"
              alt="Requisitos básicos"
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-texto">
              Requisitos básicos para solicitar un crédito
            </h2>
            <ul className="mt-4 lg:mt-8 text-texto text-base sm:text-xl space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                <span>Debes tener 18 años o más para poder realizar una solicitud y tener tus documentos al día.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>Para poder solicitar un crédito en Ola Fintech debes ser residente en Colombia y ser colombiano/a.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>Debes tener una cuenta bancaria activa o Nequi a tu nombre.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>Tener un número de celular y correo electrónico propios, el cuál verificaremos por tu seguridad.</span>
              </li>
            </ul>
            <Link 
              to="/auth/registro" 
              className="inline-flex items-center justify-center px-6 py-4 mt-8 lg:mt-12 font-semibold text-white transition-all duration-200 bg-principal rounded-full hover:bg-secondario hover:text-black"
              role="button"
            >
              Quiero mi crédito
              <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;