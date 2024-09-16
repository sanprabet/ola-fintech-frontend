const Features = () => {
  return (
    <section className="bg-principal">
      <div className="container px-6 py-24 mx-auto">
        <h1 className="text-2xl text-center text-white lg:text-5xl">
          Sumérgete en el mundo de Ola Fintech y disfruta de <br /><span className="text-secondario">todos sus beneficios</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl">
            <span className="inline-block p-3 text-white bg-principal rounded-full">
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
            </span>

            <h1 className="text-xl font-semibold text-texto capitalize">
              Desembolso ágil
            </h1>

            <p className="text-texto">
              Obtén tu dinero en menos de 24 horas hábiles con una respuesta instantánea. ¡Así de rápido es Mundo Ola Fintech!
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl">
            <span className="inline-block p-3 text-white bg-principal rounded-full">
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
            </span>

            <h1 className="text-xl font-semibold text-texto capitalize">
              Crédito sin complicaciones
            </h1>

            <p className="text-texto">
              Accede a tu crédito en un instante, sin trámites complicados, sin largas esperas, anticipos ni cargos ocultos.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl">
            <span className="inline-block p-3 text-white bg-principal rounded-full">
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
            </span>

            <h1 className="text-xl font-semibold text-texto capitalize">
              Mejora tu perfil financiero
            </h1>

            <p className="text-texto">
              Optimiza tu perfil y puntaje de crédito con nuestro contenido exclusivo, facilitando el acceso a créditos más grandes para lograr tus objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;