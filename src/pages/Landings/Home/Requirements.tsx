import { Link } from "react-router-dom";

const Requirements: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
              <Link to="/auth/registro" title="" className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-principal rounded-full lg:mt-8 hover:bg-principalToneDown" role="button">
                Quiero mi crédito
                <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link to="/tasasytarifas" title="" className="inline-flex items-center px-6 py-4 ml-3 font-semibold text-texto transition-all duration-200 bg-secondario rounded-full lg:mt-8 hover:bg-secondarioToneDown" role="button">
                Tasas y Tarifas
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
              <li>Para poder solicitar un crédito en Ola Fintech debes ser residente en Colombia y ser colombiano/a.</li>
              <li>Debes tener una cuenta bancaria activa o Nequi a tu nombre.</li>
              <li>Tener un número de celular y correo electrónico propios, el cuál verificaremos por tu seguridad.</li>
            </ul>
            <Link to="/auth/registro" title="" className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-principal rounded-full lg:mt-8 hover:bg-principalToneDown" role="button">
              Quiero mi crédito
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

export default Requirements;