import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../../components/FAQ';
import ValuesGrid from '../../components/ValuesGrid';

const CheckIcon: React.FC = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-principal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const AboutUsSection: React.FC = () => {
  const bulletPoints = [
    "En Ola Fintech, nos dedicamos a transformar la manera en que accedes a servicios financieros.",
    "Creemos en la simplicidad, la transparencia y en ofrecer soluciones digitales que se ajusten a tu estilo de vida.",
    "Nuestra misión es empoderar a nuestros clientes con productos financieros que sean accesibles, rápidos y sin complicaciones.",
    "Estamos comprometidos con la innovación y la excelencia en cada uno de nuestros servicios."
  ];

  return(
    <section className="bg-white bg-opacity-30 mt-20">
      <div className="container mx-auto py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-texto">
              Sobre Nosotros
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-texto text-sm sm:text-base lg:text-lg">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 sm:pt-6">
              <Link 
                to="/auth/registro" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white transition-all duration-200 bg-principal rounded-full hover:bg-secondario hover:text-black text-sm sm:text-base"
                role="button"
              >
                Quiero mi crédito
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Nuestro equipo"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsSection />
      <ValuesGrid />
      <Faq />
    </>
  );
};

export default AboutUs;