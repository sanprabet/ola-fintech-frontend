import { Link } from 'react-router-dom';
import CTA from '../../components/FAQ'
import ValuesGrid from '../../components/ValuesGrid'


const CreditoDigital: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">    
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-9xl font-extrabold text-gray-900 sm:text-6xl">Crédito Digital</h2>
            <p className="mt-4 text-gray-600 text-lg">
              La mejor opción para controlar tu vida financiera, 100% digital sin papeleo.
            </p>
            <ul className="mt-4 text-gray-600 text-lg list-disc list-inside mb-3">
              <li><b>Tasa de interés: </b>25% E.A (1.88% M.V.).</li>
              <li><b>Interés por mora: </b>1.5 veces la tasa de interés bancaria actual.</li>
              <li><b>Costo de administración: </b>$60,000.</li>
              <li><b>Costos de cobranza: </b>$1,500 + IVA por día de atraso.</li>
            </ul>
            <Link 
              className="text-gray-600 text-lg underline"
              to="/creditosFisicos">
              Creditos fisicos
            </Link>
            <div className="mt-8 flex space-x-4">
              <Link to="/auth/registro" title="" className="inline-flex items-center px-12 py-4 text-lg font-semibold text-white transition-all duration-200 bg-principal rounded-full hover:bg-principalToneDown" role="button">
                Quiero mi credito
                <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
        <div className="mt-16">
          <div className="bg-fondo p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900">
              Información Legal
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              Tasa Máxima Legal para Agosto 2024: <span className="font-semibold">29.21% E.A.</span> (Tasa Efectiva Anual).
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
      <ValuesGrid />
      <CTA />

    </>
  )
}

export default ProductOffering;

