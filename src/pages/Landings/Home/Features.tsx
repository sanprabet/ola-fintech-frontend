import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl">
    <div className="flex flex-col items-center space-y-4">
      <span className="inline-flex items-center justify-center w-12 h-12 bg-principal text-white rounded-full">
        {icon}
      </span>
      <h2 className="text-xl font-bold text-texto text-center">{title}</h2>
      <p className="text-base text-texto text-center">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Desembolso ágil",
      description: "Obtén tu dinero en menos de 24 horas hábiles con una respuesta instantánea. ¡Así de rápido es Mundo Ola Fintech!"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Crédito sin complicaciones",
      description: "Accede a tu crédito en un instante, sin trámites complicados, sin largas esperas, anticipos ni cargos ocultos."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Mejora tu perfil financiero",
      description: "Optimiza tu perfil y puntaje de crédito con nuestro contenido exclusivo, facilitando el acceso a créditos más grandes para lograr tus objetivos."
    }
  ];

  return (
    <section className="bg-principal">
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24 mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white mb-6 sm:mb-8">
          Sumérgete en el mundo de Ola Fintech y disfruta de{' '}
          <span className="text-secondario block sm:inline">todos sus beneficios</span>
        </h1>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;