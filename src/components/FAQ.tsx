import { useState } from 'react';

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
    <div className="mb-8 w-full rounded-lg bg-white hover:bg-secondarioToneDown p-6 shadow-sm">
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

const Faq: React.FC = () => {
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
                Todo lo que necesitas saber sobre Ola Fintech
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
              header="¿Qué es Ola Fintech?"
              text="Ola Fintech es una empresa de tecnología financiera (fintech) enfocada en ofrecer soluciones de crédito digital para mejorar la bancarización en Colombia. Nuestra plataforma innovadora combina tecnología avanzada y un profundo entendimiento del mercado financiero colombiano para proporcionar acceso a crédito de manera rápida, segura y accesible."
            />
            <AccordionItem
              header="¿Cuáles son los requisitos para acceder a un crédito en Ola Fintech?"
              text="Los requisitos para acceder a un crédito son: ser mayor de 18 años, vivir en Colombia, tener una cuenta bancaria a tu nombre, y tener un número de celular y correo electrónico propios y activos."
            />
            <AccordionItem
              header="¿Cuánto se demora en desembolsar mi crédito Ola Fintech?"
              text="En Ola Fintech, el desembolso de tu crédito se realiza en un plazo de un día hábil después de completar todas las validaciones necesarias. Este proceso eficiente y rápido asegura que puedas acceder a los fondos lo más pronto posible, una vez que hayamos verificado y aprobado tu solicitud."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="¿Cuáles son los costos del crédito en Ola Fintech?"
              text="En Ola Fintech, nuestras tasas de interés, tanto corrientes como moratorias, están en conformidad con la legislación vigente en Colombia. Estas tasas son determinadas y publicadas mensualmente por la Superintendencia Financiera de Colombia. Para obtener información actualizada, consulta nuestro simulador de préstamos en www.olafintec.co.co."
            />
            <AccordionItem
              header="¿Ola Fintech realiza cobros de comisión por anticipado?"
              text="Ola Fintech no cobra tarifas anticipadas ni comisiones para acceder a los créditos. Contamos con una plataforma innovadora que simplifica y agiliza el proceso de solicitud de crédito para nuestros usuarios."
            />
            <AccordionItem
              header="¿Dónde puedo pagar mi crédito Ola Fintech?"
              text="Para realizar el pago de tu crédito, simplemente accede a tu cuenta en nuestra plataforma y selecciona uno de los canales de pago disponibles, ya sea a través de nuestras opciones físicas o electrónicas."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;