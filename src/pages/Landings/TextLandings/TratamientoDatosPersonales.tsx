import React from 'react';
import TextLanding from '../../../components/TextLanding';
import { TextLandingData } from 'types/types';

const termsData: TextLandingData = {
  title: "Términos y Condiciones de Ola Fintech",
  sections: [
    {
      title: "1. Definiciones y Generalidades",
      content:
        'Los siguientes términos y condiciones regulan el acceso y uso de los servicios ofrecidos por Ola Fintech, una empresa dedicada a proporcionar créditos digitales de bajo monto en Colombia. Al utilizar nuestros servicios, el cliente acepta estar sujeto a estos términos y condiciones.',
      list: [
        {
          name: "1.1. Razón Social",
          description: 'Ola Fintech Co S.A.S., en adelante "Ola Fintech".',
        },
        {
          name: "1.2. NIT",
          description: "901.865.317-1",
        },
        {
          name: "1.3. Descripción de los Servicios",
          description:
            "Ola Fintech es una plataforma digital que ofrece créditos de consumo de bajo monto, diseñados para fomentar la inclusión financiera y la bancarización en la población colombiana.",
        },
        {
          name: "1.4. Aplicabilidad",
          description:
            "Estos términos y condiciones aplican a todos los clientes que soliciten y utilicen los servicios de crédito digital proporcionados por Ola Fintech.",
        },
      ],
    },
    {
      title: "2. Condiciones del Crédito",
      content: "",
      list: [
        {
          name: "2.1. Montos y Plazos",
          description:
            "Ola Fintech ofrece créditos desde doscientos mil pesos colombianos ($200,000 COP) hasta dos millones de pesos colombianos ($2,000,000 COP). Los plazos de reembolso varían hasta un máximo de noventa (90) días.",
        },
        {
          name: "2.2. Tasa de Interés y Cargos",
          description:
            "La tasa de interés y los cargos adicionales aplicables al crédito serán informados al cliente antes de la firma del contrato, y dependerán del análisis crediticio y del perfil financiero del solicitante.",
        },
        {
          name: "2.3. Aprobación del Crédito",
          description:
            "Todos los créditos están sujetos a un análisis de crédito que evalúa la capacidad de pago del solicitante. La aprobación y el monto del crédito dependerán de este análisis.",
        },
      ],
    },
    {
      title: "3. Requisitos de Elegibilidad",
      content:
        "Para ser elegible para un crédito con Ola Fintech, el solicitante debe cumplir con los siguientes requisitos:",
      list: [
        {
          name: "Ser mayor de 18 años.",
          description: "",
        },
        {
          name: "Tener un número de celular y correo electrónico propios.",
          description: "",
        },
        {
          name: "Poseer una cuenta bancaria a su nombre en Colombia.",
          description: "",
        },
        {
          name: "Ser residente en Colombia.",
          description: "",
        },
      ],
    },
    {
      title: "4. Proceso de Solicitud y Desembolso",
      content: "",
      list: [
        {
          name: "4.1. Solicitud",
          description:
            "La solicitud del crédito debe realizarse a través de la plataforma digital de Ola Fintech, proporcionando toda la información y documentación requerida para el análisis crediticio.",
        },
        {
          name: "4.2. Desembolso",
          description:
            "Una vez aprobado el crédito, los fondos serán desembolsados a la cuenta bancaria registrada por el solicitante o a través de una plataforma de pagos autorizada, según lo acordado con el cliente. Este proceso puede tomar hasta un día hábil, dependiendo de los tiempos de procesamiento bancario.",
        },
      ],
    },
    {
      title: "5. Pago del Crédito",
      content: "",
      list: [
        {
          name: "5.1. Formas de Pago",
          description:
            "El cliente podrá realizar los pagos de su crédito utilizando los métodos de pago habilitados en la plataforma digital de Ola Fintech, disponibles las 24 horas del día.",
        },
        {
          name: "5.2. Pagos Anticipados",
          description:
            "El cliente tiene el derecho de realizar pagos anticipados, totales o parciales, sin penalidades. Los pagos serán aplicados en el siguiente orden: gastos de cobranza, intereses moratorios, tarifa de administración, intereses corrientes y capital principal.",
        },
      ],
    },
    {
      title: "6. Mora y Cobranza",
      content: "",
      list: [
        {
          name: "6.1. Mora",
          description:
            "En caso de mora en el pago del crédito, se generarán intereses moratorios y gastos de cobranza, los cuales serán informados previamente al cliente.",
        },
        {
          name: "6.2. Cobranza Prejurídica",
          description:
            "Ola Fintech cobrará un gasto de cobranza del 1% más IVA por cada día de mora, hasta un máximo de noventa (90) días.",
        },
      ],
    },
    {
      title: "7. Tratamiento de Datos Personales",
      content: "",
      list: [
        {
          name: "7.1. Política de Privacidad",
          description:
            "Ola Fintech recopila y trata los datos personales de los clientes conforme a su política de privacidad, la cual está alineada con la Ley 1581 de 2012 y demás normativas aplicables en Colombia.",
        },
        {
          name: "7.2. Autorización de Tratamiento de Datos",
          description:
            "Al aceptar estos términos y condiciones, el cliente autoriza a Ola Fintech a recolectar, almacenar, procesar y compartir sus datos personales con terceros, como centrales de riesgo y proveedores de servicios, para los fines relacionados con la prestación del servicio de crédito.",
        },
      ],
    },
    {
      title: "8. Modificaciones de los Términos y Condiciones",
      content:
        "Ola Fintech se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán notificadas a los clientes a través de la plataforma digital y entrarán en vigencia desde su publicación.",
    },
    {
      title: "9. Ley Aplicable y Jurisdicción",
      content:
        "Estos términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia que surja de la interpretación o aplicación de estos términos y condiciones será sometida a los jueces competentes en la ciudad de Bogotá, Colombia.",
    },
    {
      title: "10. Aceptación de los Términos y Condiciones",
      content:
        "Al utilizar los servicios de Ola Fintech, el cliente declara haber leído, entendido y aceptado estos términos y condiciones en su totalidad. Estos términos y condiciones constituyen un acuerdo legalmente vinculante entre el cliente y Ola Fintech.\n\nEstos términos y condiciones están vigentes desde el [fecha de vigencia], versión No. 01.",
    },
  ],
};


const TratamientoDatosPersonales: React.FC = () => {
  return (
    <TextLanding data={termsData} />
  );
};

export default TratamientoDatosPersonales;