import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../../components/FAQ';
import ValuesGrid from '../../components/ValuesGrid';

const AboutUsSection: React.FC = () => {
  return(
    <section className="bg-white w-full px-8">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="max-w-lg pr-6">
            <h2 className="font-extrabold text-gray-900 text-6xl mb-4">Sobre Nosotros</h2>
            <p className="text-gray-600 text-lg mb-4">
              En Ola Fintech, nos dedicamos a transformar la manera en que accedes a servicios financieros. Creemos en la simplicidad, la transparencia y en ofrecer soluciones digitales que se ajusten a tu estilo de vida.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Nuestra misión es empoderar a nuestros clientes con productos financieros que sean accesibles, rápidos y sin complicaciones. Estamos comprometidos con la innovación y la excelencia en cada uno de nuestros servicios.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link to="/auth/registro" title="" className="inline-flex items-center px-12 py-4 text-lg font-semibold text-white transition-all duration-200 bg-principal rounded-full hover:bg-principalToneDown" role="button">
                Quiero mi credito
                <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Nuestro equipo"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

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