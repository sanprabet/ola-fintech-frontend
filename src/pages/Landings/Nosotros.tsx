import React from 'react';

import { FaCheckCircle } from 'react-icons/fa'; // Using a popular icon library like FontAwesome

const PuntosVenta: React.FC = () => {
  return (
    <section className="bg-fondo">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-20">¿Por qué elegir nuestro servicio?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Punto 1 */}
          <div className="bg-white rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Aprobación instantánea y desembolso rápido</h3>
            <p className="mt-2 text-gray-600">
              Obtén tu préstamo aprobado y desembolsado en minutos.
            </p>
          </div>

          {/* Punto 2 */}
          <div className="bg-white rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Montos y plazos de préstamo flexibles</h3>
            <p className="mt-2 text-gray-600">
              Elige el monto del préstamo y el período de pago que se ajuste a tus necesidades.
            </p>
          </div>

          {/* Punto 3 */}
          <div className="bg-white rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Sin cargos o comisiones ocultas</h3>
            <p className="mt-2 text-gray-600">
              Términos transparentes, sin cargos ocultos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const AboutUs: React.FC = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white w-full">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            
            {/* About Us Text Section */}
            <div className="max-w-lg pr-6">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Sobre Nosotros</h2>
              <p className="text-gray-600 text-lg mb-4">
                En Ola Fintech, nos dedicamos a transformar la manera en que accedes a servicios financieros. Creemos en la simplicidad, la transparencia y en ofrecer soluciones digitales que se ajusten a tu estilo de vida.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Nuestra misión es empoderar a nuestros clientes con productos financieros que sean accesibles, rápidos y sin complicaciones. Estamos comprometidos con la innovación y la excelencia en cada uno de nuestros servicios.
              </p>
              <div className="mt-8">
                <a href="/contacto" className="text-principal font-medium hover:underline">
                  Contáctanos <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>

            {/* About Us Image Section */}
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

      {/* Our Values Section */}
      <PuntosVenta />
    </>
  );
};

export default AboutUs;
