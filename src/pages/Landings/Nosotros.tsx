import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white w-full">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            
            {/* About Us Text Section */}
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Sobre Nosotros</h2>
              <p className="text-gray-600 text-lg mb-4">
                En Ola Fintech, nos dedicamos a transformar la manera en que accedes a servicios financieros. Creemos en la simplicidad, la transparencia y en ofrecer soluciones digitales que se ajusten a tu estilo de vida.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Nuestra misión es empoderar a nuestros clientes con productos financieros que sean accesibles, rápidos y sin complicaciones. Estamos comprometidos con la innovación y la excelencia en cada uno de nuestros servicios.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Únete a la revolución financiera y descubre cómo Ola Fintech puede ayudarte a gestionar tu futuro financiero de manera eficiente y segura.
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
      <section className="bg-fondo w-full">
        <div className="container mx-auto py-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nuestros Valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            
            {/* Value 1 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovación</h4>
              <p className="text-gray-600">
                Nos esforzamos por estar a la vanguardia de la tecnología para ofrecer soluciones financieras modernas y eficientes.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Transparencia</h4>
              <p className="text-gray-600">
                Creemos en la claridad y la honestidad en todos nuestros servicios, sin cargos ocultos ni sorpresas.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Compromiso</h4>
              <p className="text-gray-600">
                Estamos dedicados a brindar el mejor servicio posible a nuestros clientes, ayudándolos a alcanzar sus metas financieras.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
