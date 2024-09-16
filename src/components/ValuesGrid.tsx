import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ValueGrid: React.FC = () => {
  return (
    <section className="bg-principal">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-20">Tu Futuro Financiero, Simplificado</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Punto 1 */}
          <div className="bg-white hover:bg-secondario rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Velocidad Inigualable</h3>
            <p className="mt-2 text-gray-600">
              Aprobación instantánea y fondos en minutos. Tu tiempo es valioso, nosotros lo respetamos.
            </p>
          </div>

          {/* Punto 2 */}
          <div className="bg-white hover:bg-secondario rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Flexibilidad Total</h3>
            <p className="mt-2 text-gray-600">
              Préstamos a tu medida. Tú eliges el monto y el plazo que mejor se adapten a tu vida.
            </p>
          </div>

          {/* Punto 3 */}
          <div className="bg-white hover:bg-secondario rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">100% Transparente</h3>
            <p className="mt-2 text-gray-600">
              Sin sorpresas ni letras pequeñas. Lo que ves es lo que obtienes, siempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;