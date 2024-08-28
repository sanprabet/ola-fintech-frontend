import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../../components/FAQ'


const Hero2: React.FC = () => {
  return (
    <>
      <section className="py-10 bg-[#FCF8F1] bg-opacity-30 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-texto sm:text-4xl lg:text-5xl">How does it work?</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-texto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
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
                <h3 className="mt-6 text-xl font-semibold leading-tight text-texto md:mt-10">Create a free account</h3>
                <p className="mt-4 text-base text-texto">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-principal border-2 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">2</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-texto md:mt-10">Build your website</h3>
                <p className="mt-4 text-base text-texto">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-principal border-2 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">3</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-texto md:mt-10">Release & Launch</h3>
                <p className="mt-4 text-base text-texto">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
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
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-white sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
                  etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet
                  amet volutpat quisque ut interdum tincidunt duis.
                </p>

                <Link
                  to="/app/registrate"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-texto bg-secondario hover:bg-secondarioToneDown transition-all duration-200 rounded-full lg:mt-16"
                  role="button"
                  >
                  Quiero mi credito
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
                alt=""
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                />

              <img
                alt=""
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

const Calculator: React.FC = () => {
  const [montoSolicitado, setMontoSolicitado] = useState(1130000);
  const [interesCorriente, setInteresCorriente] = useState(23368);
  const [administracion, setAdministracion] = useState(60000);
  const [iva, setIva] = useState(11400);
  const [totalPagar, setTotalPagar] = useState(1224768);
  const [fechaCuota, setFechaCuota] = useState('14/09/2024'); // Default selected date

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMontoSolicitado(value);
    const interes = Math.ceil(value * 0.00207); // Interest calculation
    setInteresCorriente(interes);
    setTotalPagar(value + interes + administracion + iva);
  };

  const handleFechaChange = (date: string) => {
    setFechaCuota(date);
  };

  const calculateBackground = () => {
    const percentage =
      ((montoSolicitado - 100000) / (1500000 - 100000)) * 100;
    return `linear-gradient(to right, #2D1C4B ${percentage}%, #e5e7eb ${percentage}%)`;
  };

  return (
    <div className="bg-gradient-to-b bg-principal py-20">
      <div className="container mx-auto px-6">
        <style>
          {`
            .custom-slider {
              -webkit-appearance: none;
              appearance: none;
              width: 100%;
              height: 30px;
              background: ${calculateBackground()};
              border-radius: 0.375rem;
              cursor: pointer;
              transition: background 0.3s ease;
            }

            .custom-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 23px;
              height: 23px;
              background: transparent;
              border-radius: 50%;
              cursor: pointer;
              transition: background 0.3s ease;
            }

            .custom-slider::-moz-range-thumb {
              width: 20px;
              height: 20px;
              background: #2D1C4B;
              border-radius: 50%;
              cursor: pointer;
              transition: background 0.3s ease;
            }

            .custom-slider::-webkit-slider-thumb:hover,
            .custom-slider::-moz-range-thumb:hover {
              background: #e64a19;
            }

            .date-button {
              width: 100%;
              padding: 16px 24px;
              border: 2px solid transparent;
              border-radius: 0.375rem;
              text-align: center;
              cursor: pointer;
              font-size: 1.125rem;
              transition: border-color 0.3s ease;
              border-color: #E0DBEF;
            }

            .date-button.selected {
              background-color: #E0DBEF;
              border: None
            }
          `}
        </style>
        <div className="text-center w-full mx-auto mb-12">
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-lg leading-relaxed text-white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        {/* Single Card Layout - Full Width */}
        <div className="w-full mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8 lg:flex lg:items-start lg:justify-between">
            {/* Left Side (Inputs) */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h3 className="text-3xl font-bold text-center text-texto mb-4">
                Calcula tu crédito
              </h3>
              <p className="text-center text-principal mb-6 text-lg">
                Tu primera vez hasta $500.000
              </p>
              <div className="mb-8">
                <label className="block text-lg font-medium text-texto mb-4">
                  Elige el monto
                </label>
                <input
                  type="range"
                  id="montoSolicitado"
                  value={montoSolicitado}
                  min="100000"
                  max="1500000"
                  step="1000"
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-slider"
                  onChange={handleMontoChange}
                  style={{
                    background: calculateBackground(),
                  }}
                />
                <div className="text-center text-2xl font-semibold text-texto mt-4">
                  ${montoSolicitado.toLocaleString()}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-lg font-medium text-texto mb-4">
                  Elige la fecha de pago
                </label>
                <div className="flex justify-between items-center gap-4">
                  <button
                    className={`date-button ${
                      fechaCuota === '30/08/2024' ? 'selected' : ''
                    }`}
                    onClick={() => handleFechaChange('30/08/2024')}
                  >
                    30/08/2024 <br /> Vence en 18 días
                  </button>
                  <button
                    className={`date-button ${
                      fechaCuota === '14/09/2024' ? 'selected' : ''
                    }`}
                    onClick={() => handleFechaChange('14/09/2024')}
                  >
                    14/09/2024 <br /> Vence en 33 días
                  </button>
                  <button
                    className={`date-button ${
                      fechaCuota === '30/09/2024' ? 'selected' : ''
                    }`}
                    onClick={() => handleFechaChange('30/09/2024')}
                  >
                    30/09/2024 <br /> Vence en 49 días
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side (Outputs) */}
            <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center h-full">
              <div className="mb-8">
                <div className="flex justify-between text-lg">
                  <span className="text-texto">Monto solicitado</span>
                  <span className="text-texto">${montoSolicitado.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-texto">Interés corriente (25% E.A)</span>
                  <span className="text-texto">${interesCorriente.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-texto">Administración (Opcional)</span>
                  <span className="text-texto">${administracion.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-texto">IVA</span>
                  <span className="text-texto">${iva.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold mt-6">
                  <span className="text-texto">Total a pagar</span>
                  <span className="text-black">${totalPagar.toLocaleString()}</span>
                </div>
                <div className="text-lg text-texto mt-4">
                  Fecha de tu primera cuota: {fechaCuota}
                </div>
              </div>

              <Link
                to="/app/registrate"
                className="w-full bg-principal hover:bg-principalToneDown text-white font-bold rounded-full transition-all duration-200 py-4 text-xl text-center flex justify-center"
                onClick={() => console.log("Add logic here")}
              >
                Solicitar crédito
                <svg className="w-7 h-7 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RequisitosTarifas: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-5xl font-extrabold text-gray-900 sm:text-4xl">El crédito digital que te ahorra tiempo en filas</h2>
            <ul className="mt-4 text-gray-600 text-lg list-disc list-inside">
              <li>Lo pides desde nuestra web en tu celular o computador y lo recibes en menos de 1 día hábil a tu cuenta.</li>
              <li>Sin filas, sin papeles, sin codeudor.</li>
              <li>Tasa de interés fija de 1,88% M.V. o 25% E.A.</li>
              <li>Plazo mínimo 60 días y plazo máximo 90 días aplicando a la extensión que puedes usar si lo requieres.</li>
            </ul>
            <div className="flex">
              <Link to="/app/registrate" title="" className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-principal rounded-full lg:mt-8 hover:bg-principalToneDown" role="button">
                Quiero mi credito
                <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link to="/tasasytarifas" title="" className="inline-flex items-center px-6 py-4 ml-3 font-semibold text-texto transition-all duration-200 bg-secondario rounded-full lg:mt-8 hover:bg-secondarioToneDown" role="button">
                Requisitos y Tarifas
              </Link>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="El crédito digital"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-16">
          <div className="order-2 md:order-1 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="Requisitos básicos"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="max-w-lg order-1 md:order-2">
            <h2 className="text-5xl font-extrabold text-gray-900 sm:text-4xl">Requisitos básicos para solicitar un crédito</h2>
            <ul className="mt-4 text-gray-600 text-lg list-disc list-inside">
              <li>Debes tener 18 años o más para poder realizar una solicitud y tener tus documentos al día.</li>
              <li>Para poder solicitar un crédito en Galilea debes ser residente en Colombia y ser colombiano/a.</li>
              <li>Debes tener una cuenta bancaria activa o Nequi a tu nombre.</li>
              <li>Tener un número de celular y correo electrónico propios, el cuál verificaremos por tu seguridad.</li>
            </ul>
            <Link to="/app/registrate" title="" className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-principal rounded-full lg:mt-8 hover:bg-principalToneDown" role="button">
              Quiero mi credito
              <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="bg-principal">
      <div className="container px-6 py-24 mx-auto">
        <h1 className="text-2xl text-center text-white lg:text-5xl">
          Inscríbete hoy para acceder a estos <br /><span className="text-secondario">beneficios exclusivos</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl">
            <span className="inline-block p-3 text-white bg-principal rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-texto capitalize">
              Copy & paste components
            </h1>

            <p className="text-texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl">
            <span className="inline-block p-3 text-white bg-principal rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-texto capitalize">
              Zero Configuration
            </h1>

            <p className="text-texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl">
            <span className="inline-block p-3 text-white bg-principal rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-texto capitalize">
              Simple & clean designs
            </h1>

            <p className="text-texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section className="bg-white bg-opacity-30 py-10 sm:py-16 sm:pb-12 lg:py-20 lg:pb-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-principal uppercase">Ola Finanzas Digitales</p> {/*  */}
            <h1 className="mt-4 text-4xl font-bold text-texto lg:mt-8 sm:text-6xl xl:text-7xl">Solicita tu crédito digital de forma segura.</h1>
            <p className="mt-4 text-base text-texto lg:mt-8 sm:text-xl">Te préstamos desde $200,000 hasta <b>$1,500,000</b> solo con tu <b>cedula</b>. Registrate y recibe tu dinero en menos de 24hrs.</p>
            <Link to="/app/registrate" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white hover:text-black transition-all duration-200 bg-principal rounded-full lg:mt-12 hover:bg-secondario" role="button">
              Quiero mi credito
              <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
            <p className="mt-5 text-gray-800">Ya tienes cuenta? <a href="#" title="" className="text-principal transition-all duration-200 underline hover:cursor-pointer">Ingresa aquí</a></p>
          </div>
          <div>
            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RequisitosTarifas />
      <Calculator />
      <Hero2 />
      <FAQ />
    </>
  )
}

export default Home