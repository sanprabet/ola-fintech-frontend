import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../../components/FAQ';
import ValuesGrid from '../../components/ValuesGrid';

const CheckIcon: React.FC = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-principal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const CreditoDigital: React.FC = () => {
  return (
    <section className="bg-white bg-opacity-30 mt-20">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">    
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-texto">
              Crédito Digital
            </h2>
            <p className="text-texto text-base sm:text-lg lg:text-xl">
              La mejor opción para controlar tu vida financiera, 100% digital sin papeleo.
            </p>
            <ul className="space-y-3 sm:space-y-4 text-texto text-sm sm:text-base lg:text-lg">
              {[
                { label: 'Tasa de interés', value: '25% E.A (1.88% M.V.).' },
                { label: 'Interés por mora', value: '1.5 veces la tasa de interés bancaria actual.' },
                { label: 'Costo de administración', value: '$60,000.' },
                { label: 'Costos de cobranza', value: '$1,500 + IVA por día de atraso.' },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span><b>{item.label}:</b> {item.value}</span>
                </li>
              ))}
            </ul>
            <Link 
              className="inline-block text-texto text-sm sm:text-base lg:text-lg underline"
              to="/creditosFisicos">
              Créditos físicos
            </Link>
            <div className="pt-4">
              <Link 
                to="/auth/registro" 
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-200 bg-principal rounded-full hover:bg-secondario hover:text-black text-sm sm:text-base"
                role="button"
              >
                Quiero mi crédito
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="Crédito Digital"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className="mt-12 sm:mt-16">
          <div className="bg-fondo p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-texto">
              Información Legal
            </h3>
            <p className="mt-2 text-texto text-sm sm:text-base lg:text-lg">
              Tasa Máxima Legal para Agosto 2024: <span className="font-semibold">29.21% E.A.</span> (Tasa Efectiva Anual).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



function ProductOffering() {
  return (
    <>

      <CreditoDigital />
      <ValuesGrid />
      <CTA />

    </>
  )
}

export default ProductOffering;

