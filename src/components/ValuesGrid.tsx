import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<Value> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl hover:bg-secondario transition-colors duration-300">
    <div className="flex flex-col items-center space-y-4">
      <span className="inline-flex items-center justify-center w-12 h-12 bg-principal text-white rounded-full">
        {icon}
      </span>
      <h2 className="text-xl font-bold text-texto text-center">{title}</h2>
      <p className="text-base text-texto text-center">{description}</p>
    </div>
  </div>
);

const ValueGrid: React.FC = () => {
  const values: Value[] = [
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Velocidad Inigualable",
      description: "Aprobación instantánea y fondos en minutos. Tu tiempo es valioso, nosotros lo respetamos."
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Flexibilidad Total",
      description: "Préstamos a tu medida. Tú eliges el monto y el plazo que mejor se adapten a tu vida."
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "100% Transparente",
      description: "Sin sorpresas ni letras pequeñas. Lo que ves es lo que obtienes, siempre."
    }
  ];

  return (
    <section className="bg-principal">
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24 mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white mb-6 sm:mb-8">
          Tu Futuro Financiero,{' '}
          <span className="text-secondario block sm:inline">Simplificado</span>
        </h1>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;