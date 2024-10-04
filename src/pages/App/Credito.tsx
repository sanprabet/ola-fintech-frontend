import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bancolombia from '../../assets/bancolombia.png';
import Pse from '../../assets/pse.png';
import FormularioCredito from './FormularioCredito';

import { useAppHandlers } from '../../hooks/useAppHandlers';
import { useAuthHandlers } from '../../hooks/useAuthHandlers';

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
            Pagar en linea
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

const Credito = () => {
  const authHandlers = useAuthHandlers();
  const appHandlers = useAppHandlers();
  const [creditStatus, setCreditStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCreditStatus = async () => {
      try {
        // const status = await appHandlers.getCreditStatus();
        setCreditStatus("not_active");
      } catch (error) {
        console.error("Error fetching credit status:", error);
        // Handle error (e.g., set an error state)
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreditStatus();
  }, [appHandlers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      {creditStatus === "not_active" ? (
        <FormularioCredito
          handleSubmit={appHandlers.handleFormularioCredito}
          fetchUserAccount={appHandlers.fetchAccount}
          addBankAccount={authHandlers.handleUpdateBankInformation}
        />
      ) : creditStatus === "pending" || creditStatus === "active" ? (
        <PaymentMethods />
      ) : (
        <div>Unexpected credit status. Please contact support.</div>
      )}
    </div>
  );
};

export default Credito;