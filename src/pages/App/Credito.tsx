import React from 'react';
import { Link } from 'react-router-dom';
import { format, addMonths, isBefore } from 'date-fns';
import { useAuth } from '../../hooks/useAuth';
import { es } from 'date-fns/locale';

import { Clock, Info, CheckCircle, CalendarX, AlertTriangle } from 'lucide-react';
import Bancolombia from '../../assets/bancolombia.png';
import Pse from '../../assets/pse.png';
import FormularioCredito from './FormularioCredito';

import { CreditDB } from 'types/types';


const PaymentMethods = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 w-full text-start">Paga en línea</h3>
          <img src={Pse} alt="PSE Logo" className="h-16 mb-4" />
          <div className='w-full'>
            <ul className="list-disc pl-5 text-left">
              <li>Paga en línea, rápido, seguro y fácil.</li>
              <li>Verificación de tu pago inmediato.</li>
              <li>Puedes renovar tu crédito al instante.</li>
            </ul>
          </div>
          <Link to="#" className="block bg-principal text-white text-center mt-4 py-2 px-3 rounded-lg shadow hover:bg-principalToneDown w-full">
            Pagar en línea
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 w-full text-start">Paga en efectivo</h3>
          <img src={Bancolombia} alt="Bancolombia Logo" className="h-12 my-2 mb-4" />
          <div className='w-full'>
            <ul className="list-disc pl-5 text-left">
              <li>Paga en efectivo en un corresponsal Bancolombia.</li>
              <li>Verificación de tu pago en hasta 1 día hábil.</li>
              <li>Renueva tu crédito en hasta 2 días hábiles.</li>
            </ul>
            <Link to="#" className="block bg-principal text-white text-center mt-4 py-2 px-3 rounded-lg shadow hover:bg-principalToneDown">
              Pagar en efectivo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const LateCreditView: React.FC<{
  creditData: CreditDB;
}> = ({ creditData }) => {
  const { montoSolicitado, interesCorriente, administracion, iva, totalPagar, fechaCuota, extensionRequested } = creditData;

  const dueDate = new Date(fechaCuota);
  const today = new Date();

  const isLate = isBefore(dueDate, today);

  const dueDateFormatted = format(dueDate, "dd 'de' MMMM 'de' yyyy", { locale: es });

  if (!isLate) return null;

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-1 sm:px-6 lg:px-8">
      {/* Main Late Credit Section */}
      <div className="w-full max-w-lg sm:max-w-xl lg:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="px-6 py-8 pb-0">
          {/* Header with Warning Icon */}
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle size={48} className="text-red-600 mr-3" />
            <h2 className="text-2xl lg:text-3xl font-bold text-center text-red-600">
              Crédito en Mora
            </h2>
          </div>

          {/* Late Credit Info */}
          <p className="text-center text-gray-700 mb-6 lg:text-lg">
            Tu crédito está vencido. Por favor, realiza el pago lo antes posible para evitar más cargos.
          </p>

          {/* Due Date */}
          <div className="bg-red-50 rounded-lg px-6 py-4 mb-6 text-center">
            <span className="text-lg lg:text-xl font-semibold text-red-600">
              Fecha límite de pago: {dueDateFormatted}
            </span>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 rounded-lg px-6 py-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="flex flex-col">
                <span className="text-base lg:text-lg text-gray-600">Monto Solicitado:</span>
                <span className="font-semibold text-base lg:text-lg">${montoSolicitado.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg text-gray-600">Interés Corriente (25% E.A):</span>
                <span className="font-semibold text-base lg:text-lg">${interesCorriente.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg text-gray-600">Administración:</span>
                <span className="font-semibold text-base lg:text-lg">${administracion.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg text-gray-600">IVA:</span>
                <span className="font-semibold text-base lg:text-lg">${iva.toLocaleString()}</span>
              </div>
            </div>

            {/* Divider and Total */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-xl lg:text-2xl font-bold">
              <span>Total a Pagar:</span>
              <span className="text-red-600">${totalPagar.toLocaleString()}</span>
            </div>
          </div>

          {/* Call to Action or Message */}
          <div className="flex flex-col justify-center items-center">
            {extensionRequested ? (
              <p className="text-center text-gray-600 text-lg lg:text-xl mb-6">
                Hemos recibido tu solicitud de extensión. Un asesor se pondrá en contacto contigo en las próximas <strong>24 horas</strong> para continuar con el proceso.
              </p>
            ) : (
              <button 
                className="bg-red-600 text-white font-semibold text-base lg:text-lg py-2 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 mb-4"
                onClick={() => alert("Peticion Enviada")}
              >
                Solicitar Extensión de Plazo
              </button>
            )}

            <p className="text-sm lg:text-base text-gray-500 mt-2">
              Si tienes alguna duda, contáctanos al soporte técnico.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mt-8">
            <PaymentMethods />
          </div>
        </div>
      </div>
    </div>
  );
};

const RejectedCreditView: React.FC<{
  creditData: CreditDB;
}> = ({ creditData }) => {
  const { otpTimeStamp, montoAprobado } = creditData;

  // Convert otpTimeStamp (ISO format) to a Date and add 6 months
  const otpDate = new Date(otpTimeStamp);
  const retryDate = addMonths(otpDate, 6);

  // Format the retry date for display in Colombian timezone and Spanish locale
  const retryDateFormatted = format(retryDate, "dd 'de' MMMM 'de' yyyy", { locale: es });

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-xl lg:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="px-6 py-8 pb-0">
          {/* Header with Calendar Icon */}
          <div className="flex items-center justify-center mb-6">
            <CalendarX size={48} className="text-principal mr-3" />
            <h2 className="text-2xl lg:text-3xl font-bold text-center text-principal">
              Solicitud de crédito rechazada
            </h2>
          </div>

          {/* Rejection Info */}
          <p className="text-center text-gray-600 mb-6 lg:text-lg">
            Tu solicitud de crédito ha sido rechazada. Podrás realizar una nueva solicitud a partir del:
          </p>

          {/* Retry Date */}
          <div className="bg-gray-50 rounded-lg px-6 py-4 mb-6 text-center">
            <span className="text-lg lg:text-xl font-semibold text-principal">
              {retryDateFormatted}
            </span>
          </div>

          {/* CTA Section for montoAprobado */}
          {montoAprobado && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 lg:flex lg:justify-between lg:items-center">
              {/* Left Side: Text and Approved Amount */}
              <div className="lg:flex-1 lg:pr-6">
                <h3 className="text-xl lg:text-2xl font-semibold text-principal">
                  ¿Necesitas un crédito ya?
                </h3>
                <p className="text-base lg:text-lg text-gray-600 mb-4 leading-relaxed">
                  ¡Podemos aprobarte un crédito de 
                  <strong className="block text-principal text-4xl lg:text-5xl font-bold mt-2">${montoAprobado.toLocaleString()}</strong>.
                </p>
              </div>

              {/* Right Side: CTA Button */}
              <div className="mt-4 lg:mt-0 lg:flex-shrink-0">
                <button className="bg-principal text-white font-semibold text-base lg:text-lg py-2 px-6 rounded-lg shadow-md hover:bg-principal-dark focus:outline-none focus:ring-4 focus:ring-principal-light transition-all duration-300">
                  Solicita tu crédito ahora
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ActiveCreditView: React.FC<{
  creditData: CreditDB;
}> = ({ creditData }) => {
  const { montoSolicitado, interesCorriente, administracion, iva, totalPagar, fechaCuota } = creditData;

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Main Active Credit Section */}
      <div className="w-full max-w-lg sm:max-w-xl lg:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="px-6 py-8 pb-0">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-principal">
            Crédito Activo
          </h2>

          {/* Credit Information */}
          <div className="bg-gray-50 rounded-lg px-6 py-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">Monto Solicitado:</span>
                <span className="font-semibold text-base lg:text-lg">${montoSolicitado.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">Interés Corriente (25% E.A):</span>
                <span className="font-semibold text-base lg:text-lg">${interesCorriente.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">Administración:</span>
                <span className="font-semibold text-base lg:text-lg">${administracion.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">IVA:</span>
                <span className="font-semibold text-base lg:text-lg">${iva.toLocaleString()}</span>
              </div>
            </div>

            {/* Divider and Total */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-xl lg:text-2xl font-bold">
              <span>Total a Pagar:</span>
              <span className="text-principal">${totalPagar.toLocaleString()}</span>
            </div>
            <div className="text-center text-sm lg:text-base text-gray-600 mt-4">
              Fecha de vencimiento: <span className="font-medium text-principal">{fechaCuota}</span>
            </div>
          </div>
        </div>
        <PaymentMethods />
      </div>
    </div>
  );
};

const PendingCreditView: React.FC<{
  creditData: CreditDB;
}> = ({ creditData }) => {
  const { montoSolicitado, interesCorriente, administracion, iva, totalPagar, fechaCuota } = creditData;

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-xl lg:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mb-8 pb-4">
        <div className="px-6 py-8 pb-0">
          {/* Header with Info Icon */}
          <div className="flex items-center justify-center mb-6">
            <Info size={48} className="text-principal mr-3" />
            <h2 className="text-2xl lg:text-3xl font-bold text-center text-principal">
              Estamos procesando tu crédito
            </h2>
          </div>

          {/* Processing Info */}
          <p className="text-center text-gray-600 mb-6 lg:text-lg">
            Tu solicitud de crédito está en revisión. El proceso puede tardar hasta <strong>24 horas</strong>.
          </p>

          {/* Details Container */}
          <div className="bg-gray-50 rounded-lg px-6 py-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">Monto Solicitado:</span>
                <span className="font-semibold text-base lg:text-lg">${montoSolicitado.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">Interés Corriente (25% E.A):</span>
                <span className="font-semibold text-base lg:text-lg">${interesCorriente.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">Administración:</span>
                <span className="font-semibold text-base lg:text-lg">${administracion.toLocaleString()}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg">IVA:</span>
                <span className="font-semibold text-base lg:text-lg">${iva.toLocaleString()}</span>
              </div>
            </div>

            {/* Divider and Total */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-xl lg:text-2xl font-bold">
              <span>Total a Pagar:</span>
              <span className="text-principal">${totalPagar.toLocaleString()}</span>
            </div>
            <div className="text-center text-sm lg:text-base text-gray-600 mt-4">
              Fecha de tu primera cuota: <span className="font-medium text-principal">{fechaCuota}</span>
            </div>
          </div>

          {/* Notification Messages */}
          <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center mb-4">
            <Clock size={28} className="text-principal mr-3" />
            <span className="text-sm lg:text-base text-gray-600">
              Este proceso puede tardar hasta 24 horas.
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center">
            <CheckCircle size={28} className="text-green-500 mr-3" />
            <span className="text-sm lg:text-base text-gray-600">
              Serás notificado una vez se complete el proceso.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Credito = () => {
  const { creditData, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!creditData || Object.keys(creditData).length === 0) {
    return <FormularioCredito />;
  }

  const { status, fechaCuota } = creditData;
  const dueDate = new Date(fechaCuota);
  const today = new Date();

  return (
    <div className="container mx-auto pt-2 min-h-screen flex flex-col">
      {status === 'pending' && (
        <>
          <PendingCreditView creditData={creditData} />
        </>
      )}
      {status === 'active' && (
        <>
          {dueDate < today ? (
            <LateCreditView creditData={creditData} />
          ) : (
            <ActiveCreditView creditData={creditData} />
          )}
        </>
      )}
      {status === 'rejected' && (
        <div>
          <RejectedCreditView creditData={creditData} />
        </div>
      )}
    </div>
  );
};

export default Credito;