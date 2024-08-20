import { useState } from 'react';
import { Link } from 'react-router-dom';

interface AccordionItemProps {
  header: string;
  text: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-6 shadow-sm">
      <button
        className="faq-btn flex w-full text-left"
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-10 items-center justify-center">
          <svg
            className={`fill-none stroke-principal duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-texto">
            {header}
          </h4>
        </div>
      </button>
      <div
        className={`pl-[50px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-texto">
          {text}
        </p>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-fondo pb-12 pt-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[30px] max-w-[520px] text-center lg:mb-16">
              <span className="mb-2 block text-lg font-semibold text-principal">
                Preguntas Frecuentes
              </span>
              <h2 className="mb-4 text-3xl font-bold text-texto sm:text-[40px]/[48px]">
                Preguntas Frecuentes Titulo
              </h2>
              <p className="text-base text-texto">
                En Ola Fintech, te ofrecemos información clara y precisa. Encuentra todas tus respuestas en nuestro apartado de preguntas frecuentes.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const CTA: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-principal p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
                etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet
                amet volutpat quisque ut interdum tincidunt duis.
              </p>

              <a
                href="#"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black bg-secondario hover:bg-white transition-all duration-200 rounded-full lg:mt-16"
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
              </a>
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
  );
};

const Steps: React.FC = () => {
  return (
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
  );
};

const Subscription: React.FC = () => {
  const [montoSolicitado, setMontoSolicitado] = useState(1130000);
  const [interesCorriente, setInteresCorriente] = useState(23368);
  const [administracion, setAdministracion] = useState(60000);
  const [iva, setIva] = useState(11400);
  const [totalPagar, setTotalPagar] = useState(1224768);
  const [fechaCuota, setFechaCuota] = useState('14/09/2024');

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMontoSolicitado(value);
    const interes = Math.ceil(value * 0.00207); // Interest calculation
    setInteresCorriente(interes);
    setTotalPagar(value + interes + administracion + iva);
  };

  return (
    <div className="bg-gradient-to-b bg-fondo py-20">
      <div className="container mx-auto px-6">
        <div className="text-center w-full mx-auto mb-12">
          <h2 className="text-3xl font-bold leading-tight text-texto sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-texto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        {/* Single Card Layout - Full Width */}
        <div className="w-full mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 lg:flex lg:items-start lg:justify-between">
            {/* Left Side (Inputs) */}
            <div className="w-full lg:w-1/2 lg:pr-6">
              <h3 className="text-2xl font-bold text-center text-texto mb-6">
                Calcula tu crédito
              </h3>
              <p className="text-center text-principal mb-4">
                Tu primera vez hasta $500.000
              </p>
              <div className="mb-6">
                <label className="block text-sm font-medium text-texto mb-2">
                  Elige el monto
                </label>
                <input
                  type="range"
                  id="montoSolicitado"
                  value={montoSolicitado}
                  min="100000"
                  max="1500000"
                  step="1000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  onChange={handleMontoChange}
                />
                <div className="text-center text-lg font-semibold text-texto mt-2">
                  ${montoSolicitado.toLocaleString()}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-texto mb-2">
                  Elige la fecha de pago
                </label>
                <div className="flex justify-between items-center gap-2">
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-texto bg-white">
                    30/08/2024 <br /> Vence en 18 días
                  </button>
                  <button className="w-full py-2 px-4 border-2 border-principal rounded-lg text-texto bg-white">
                    {fechaCuota} <br /> Vence en 33 días
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side (Outputs) */}
            <div className="w-full lg:w-1/2 lg:pl-6 flex flex-col justify-center h-full">
              <div className="mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-texto">Monto solicitado</span>
                  <span className="text-texto">${montoSolicitado.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-texto">Interés corriente (25% E.A)</span>
                  <span className="text-texto">${interesCorriente.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-texto">Administración (Opcional)</span>
                  <span className="text-texto">${administracion.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-texto">IVA</span>
                  <span className="text-texto">${iva.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4">
                  <span className="text-texto">Total a pagar</span>
                  <span className="text-black">${totalPagar.toLocaleString()}</span>
                </div>
                <div className="text-sm text-texto mt-2">
                  Fecha de tu primera cuota: {fechaCuota}
                </div>
              </div>

              <button
                className="w-full bg-principal text-white font-semibold py-3 rounded-lg hover:bg-secondario transition-all"
              >
                Solicitar crédito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Description: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">El crédito digital que te ahorra tiempo en filas</h2>
            <ul className="mt-4 text-gray-600 text-lg list-disc list-inside">
              <li>Lo pides desde nuestra web en tu celular o computador y lo recibes en menos de 1 día hábil a tu cuenta.</li>
              <li>Sin filas, sin papeles, sin codeudor.</li>
              <li>Tasa de interés fija de 1,88% M.V. o 25% E.A.</li>
              <li>Plazo mínimo 60 días y plazo máximo 90 días aplicando a la extensión que puedes usar si lo requieres.</li>
            </ul>
            <div className="mt-8 flex space-x-4">
              <Link className="py-2 px-6 bg-principal hover:bg-secondario hover:text-texto text-sm text-white font-bold rounded-xl transition duration-200" to="/app/registrate">
                Aplicar ahora
              </Link>
              <Link className="py-2 px-6 bg-gray-500 hover:bg-gray-400 text-sm text-white font-bold rounded-xl transition duration-200" to="/tasas-y-tarifas">
                Tasas y tarifas
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
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Requisitos básicos para solicitar un crédito</h2>
            <ul className="mt-4 text-gray-600 text-lg list-disc list-inside">
              <li>Debes tener 18 años o más para poder realizar una solicitud y tener tus documentos al día.</li>
              <li>Para poder solicitar un crédito en Galilea debes ser residente en Colombia y ser colombiano/a.</li>
              <li>Debes tener una cuenta bancaria activa o Nequi a tu nombre.</li>
              <li>Tener un número de celular y correo electrónico propios, el cuál verificaremos por tu seguridad.</li>
            </ul>
            <div className="mt-8 flex space-x-4">
              <Link className="py-2 px-6 bg-principal hover:bg-secondario hover:text-texto text-sm text-white font-bold rounded-xl transition duration-200" to="/app/registrate">
                Aplicar ahora
              </Link>
              <Link className="py-2 px-6 bg-gray-500 hover:bg-gray-400 text-sm text-white font-bold rounded-xl transition duration-200" to="/tasas-y-tarifas">
                Tasas y tarifas
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="bg-fondo">
      <div className="container px-6 py-24 mx-auto">
        <h1 className="text-2xl text-center text-texto lg:text-5xl">
          Inscríbete hoy para acceder a estos <br /><span className="text-principal">beneficios exclusivos</span>
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
            <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white hover:text-black transition-all duration-200 bg-principal rounded-full lg:mt-16 hover:bg-secondario focus:bg-yellow-400" role="button">
              Quiero mi credito
              <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
            <p className="mt-5 text-gray-800">Ya tienes cuenta? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Ingresa aquí</a></p>
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
      <Description />
      <Subscription />
      <Steps />
      <CTA />
      <Accordion />
    </>
  )
}

export default Home