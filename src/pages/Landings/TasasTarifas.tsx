import { useState} from 'react';
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

const CreditoDigital: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Crédito Digital Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Crédito Digital</h2>
            <p className="mt-4 text-gray-600 text-lg">
              La mejor opción para controlar tu vida financiera, 100% digital sin papeleo.
            </p>
            <ul className="mt-4 text-gray-600 text-lg list-disc list-inside">
              <li>Tasa de interés: 25% E.A (1.88% M.V.).</li>
              <li>Interés por mora: 1.5 veces la tasa de interés bancaria actual.</li>
              <li>Costo de administración: $60,000.</li>
              <li>Costos de cobranza: $1,500 + IVA por día de atraso.</li>
              <li>Acceso a beneficios de Galileo: <span className="font-semibold">Sí</span>.</li>
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
              alt="Crédito Digital"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Legal Information */}
        <div className="mt-16">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900">
              Información Legal
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              Tasa Máxima Legal para Agosto 2024: <span className="font-semibold">29.21% E.A.</span> (Tasa Efectiva Anual).
            </p>
          </div>
        </div>

        {/* Link to Crédito en físico */}
        <div className="mt-12 text-center">
          <Link 
            className="text-gray-700 text-lg underline hover:text-gray-900 transition duration-200" 
            to="/credito-en-fisico">
            Otra opción son los creditos fisicos
          </Link>
        </div>

      </div>
    </section>
  );
};

import { FaCheckCircle } from 'react-icons/fa'; // Using a popular icon library like FontAwesome

const PuntosVenta: React.FC = () => {
  return (
    <section className="bg-principal">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-20">¿Por qué elegir nuestro servicio?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Punto 1 */}
          <div className="bg-gray-50 rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Aprobación instantánea y desembolso rápido</h3>
            <p className="mt-2 text-gray-600">
              Obtén tu préstamo aprobado y desembolsado en minutos.
            </p>
          </div>

          {/* Punto 2 */}
          <div className="bg-gray-50 rounded-lg px-4 py-6 text-center">
            <FaCheckCircle className="text-4xl text-principal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Montos y plazos de préstamo flexibles</h3>
            <p className="mt-2 text-gray-600">
              Elige el monto del préstamo y el período de pago que se ajuste a tus necesidades.
            </p>
          </div>

          {/* Punto 3 */}
          <div className="bg-gray-50 rounded-lg px-4 py-6 text-center">
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


function ProductOffering() {
  return (
    <>

      <CreditoDigital />
      <PuntosVenta />
      <Accordion />

    </>
  )
}

export default ProductOffering;

