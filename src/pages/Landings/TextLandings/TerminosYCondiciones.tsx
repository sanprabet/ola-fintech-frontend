import React from 'react';
import TextLanding from '../../../components/TextLanding';
import { TextLandingData } from 'types';

const termsData: TextLandingData = {
  title: "Términos y Condiciones de Ola Fintech",
  sections: [
    {
      title: "1. Definiciones y Generalidades",
      content: "Razón Social: Ola Fintech. Co S.A.S., en adelante 'Ola Fintech'. NIT: 901.865.317-1. Descripción de los Servicios: Ola Fintech es una plataforma digital que ofrece créditos de consumo de bajo monto, diseñados para fomentar la inclusión financiera y la bancarización en la población colombiana. Estos términos y condiciones aplican a todos los clientes que soliciten y utilicen los servicios de crédito digital proporcionados por Ola Fintech."
    },
    {
      title: "2. Condiciones del Crédito",
      content: "Ola Fintech ofrece créditos desde doscientos mil pesos colombianos ($200,000 COP) hasta dos millones de pesos colombianos ($2,000,000 COP). Los plazos de reembolso varían hasta un máximo de noventa (90) días. La tasa de interés y los cargos adicionales aplicables al crédito serán informados al cliente antes de la firma del contrato. Todos los créditos están sujetos a un análisis de crédito que evalúa la capacidad de pago del solicitante."
    },
    {
      title: "3. Requisitos de Elegibilidad",
      content: "Para ser elegible para un crédito con Ola Fintech, el solicitante debe: Ser mayor de 18 años, tener un número de celular y correo electrónico propios, poseer una cuenta bancaria a su nombre en Colombia, y ser residente en Colombia."
    },
    {
      title: "4. Proceso de Solicitud y Desembolso",
      content: "La solicitud del crédito debe realizarse a través de la plataforma digital de Ola Fintech. Una vez aprobado el crédito, los fondos serán desembolsados a la cuenta bancaria registrada por el solicitante o a través de una plataforma de pagos autorizada. Este proceso puede tomar hasta un día hábil."
    },
    {
      title: "5. Pago del Crédito",
      content: "El cliente podrá realizar los pagos de su crédito utilizando los métodos de pago habilitados en la plataforma digital de Ola Fintech. El cliente tiene el derecho de realizar pagos anticipados, totales o parciales, sin penalidades."
    },
    {
      title: "6. Mora y Cobranza",
      content: "En caso de mora en el pago del crédito, se generarán intereses moratorios y gastos de cobranza. Ola Fintech cobrará un gasto de cobranza del 1% más IVA por cada día de mora, hasta un máximo de noventa (90) días."
    },
    {
      title: "7. Tratamiento de Datos Personales",
      content: "Ola Fintech recopila y trata los datos personales de los clientes conforme a su política de privacidad, alineada con la Ley 1581 de 2012. Al aceptar estos términos y condiciones, el cliente autoriza a Ola Fintech a recolectar, almacenar, procesar y compartir sus datos personales con terceros para los fines relacionados con la prestación del servicio de crédito."
    },
    {
      title: "8. Modificaciones de los Términos y Condiciones",
      content: "Ola Fintech se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán notificadas a los clientes a través de la plataforma digital y entrarán en vigencia desde su publicación."
    },
    {
      title: "9. Ley Aplicable y Jurisdicción",
      content: "Estos términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia será sometida a los jueces competentes en la ciudad de Bogotá, Colombia."
    },
    {
      title: "10. Aceptación de los Términos y Condiciones",
      content: "Al utilizar los servicios de Ola Fintech, el cliente declara haber leído, entendido y aceptado estos términos y condiciones en su totalidad. Estos términos y condiciones constituyen un acuerdo legalmente vinculante entre el cliente y Ola Fintech."
    }
  ]
};

const TerminosYCondiciones: React.FC = () => {
  return (
    <TextLanding data={termsData} />
  );
};

export default TerminosYCondiciones;