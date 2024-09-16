import { Link } from 'react-router-dom';

const HeroBottom: React.FC = () => {
  return (
    <>
      <section className="py-10 bg-[#FCF8F1] bg-opacity-30 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-texto sm:text-4xl lg:text-5xl">¿Cómo funciona?</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-texto">
              Obtén tu crédito de forma rápida y sencilla con Ola Fintech.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-principal border-2 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">1</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-texto md:mt-10">Solicita tu crédito</h3>
                <p className="mt-4 text-base text-texto">
                  Pide tu cupo de crédito en solo 15 minutos desde nuestra plataforma digital.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-principal border-2 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">2</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-texto md:mt-10">Aprobación rápida</h3>
                <p className="mt-4 text-base text-texto">
                  Recibe una respuesta instantánea y aprobación de tu crédito.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-principal border-2 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">3</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-texto md:mt-10">Recibe tu dinero</h3>
                <p className="mt-4 text-base text-texto">
                  Obtén el desembolso en tu cuenta en menos de 24 horas hábiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-principal p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-3xl font-bold text-white md:text-3xl">
                  Solicita tu Crédito Ágil, Rápido y 100% Seguro para Todos
                </h2>

                <p className="hidden text-white text-2xl sm:mt-4 sm:block">
                  Pide tu cupo de crédito en 15 minutos y recibe el dinero en 1 día
                  hábil. Desde $150.000 hasta $2.000.000. Sin trámites, filas, anticipos ni
                  cargos ocultos.
                </p>

                <Link
                  to="/auth/registro"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-texto bg-secondario hover:bg-secondarioToneDown transition-all duration-200 rounded-full lg:mt-16"
                  role="button"
                  >
                  Quiero mi crédito
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Persona usando la aplicación de Ola Fintech"
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                />

              <img
                alt="Persona feliz después de recibir su crédito"
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBottom;