import React from 'react';
import TextLanding from '../../../components/TextLanding';
import { TextLandingData } from 'types';

const termsData: TextLandingData = {
  title: "Política de Privacidad y Tratamiento de Datos Personales de Ola Fintech",
  sections: [
    {
      title: "1. Recolección y Uso de Datos Personales",
      content: "Ola Fintech recolecta datos personales con el propósito de ofrecer créditos digitales de bajo monto y promover la inclusión financiera en Colombia. Los datos recopilados incluyen nombre, número de identificación, información de contacto, datos bancarios, historial crediticio, y cualquier otra información relevante para el análisis crediticio y la prestación de nuestros servicios. Estos datos son utilizados para evaluar la elegibilidad y capacidad crediticia del solicitante, gestionar y administrar los créditos otorgados, cumplir con obligaciones legales y regulatorias, realizar encuestas de satisfacción y mejorar nuestros servicios, y comunicaciones sobre productos y servicios de Ola Fintech."
    },
    {
      title: "2. Tratamiento de Datos Personales",
      content: "El tratamiento de los datos personales por parte de Ola Fintech se realiza bajo estrictos estándares de seguridad y confidencialidad. Los datos serán almacenados en sistemas protegidos contra accesos no autorizados y serán utilizados únicamente para los fines descritos en esta política. Ola Fintech podrá compartir los datos personales con terceros, como centrales de riesgo, entidades financieras y proveedores de servicios, siempre y cuando sea necesario para la prestación de los servicios contratados y en cumplimiento con la legislación vigente."
    },
    {
      title: "3. Derechos del Titular de los Datos",
      content: "Los titulares de los datos personales tienen los siguientes derechos: Derecho de Acceso, Derecho de Rectificación, Derecho de Cancelación, y Derecho de Oposición.",
      list: [
        {
          name: "Derecho de Acceso",
          description: "Conocer qué datos personales son tratados por Ola Fintech y para qué fines."
        },
        {
          name: "Derecho de Rectificación",
          description: "Solicitar la corrección de datos incorrectos o desactualizados."
        },
        {
          name: "Derecho de Cancelación",
          description: "Pedir la eliminación de sus datos personales cuando ya no sean necesarios para los fines para los cuales fueron recolectados, siempre que no exista un deber legal o contractual de mantenerlos."
        },
        {
          name: "Derecho de Oposición",
          description: "Negarse a que sus datos sean tratados para ciertos fines, como la recepción de comunicaciones promocionales."
        }
      ]
    },
    {
      title: "4. Autorización para el Tratamiento de Datos",
      content: "Al aceptar esta política de privacidad, el titular de los datos autoriza a Ola Fintech a recolectar, almacenar, procesar y compartir sus datos personales de acuerdo con las finalidades aquí descritas. Esta autorización también incluye la consulta y reporte de información a centrales de riesgo y otras entidades que manejen bases de datos financieras y comerciales."
    },
    {
      title: "5. Medidas de Seguridad",
      content: "Ola Fintech implementa medidas de seguridad físicas, tecnológicas y administrativas para proteger los datos personales de nuestros clientes. Estas medidas están diseñadas para prevenir el acceso, uso, divulgación o modificación no autorizados de la información."
    },
    {
      title: "6. Modificaciones a la Política de Privacidad",
      content: "Ola Fintech se reserva el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será notificado a los clientes a través de nuestros canales de comunicación oficiales y estará disponible en nuestra plataforma web."
    },
    {
      title: "7. Contacto",
      content: "Para consultas, solicitudes o reclamos relacionados con el tratamiento de sus datos personales, los titulares pueden comunicarse con nuestro equipo de atención al cliente a través de los canales habilitados por Ola Fintech."
    }
  ],
};

const TratamientoDatosPersonales: React.FC = () => {
  return (
    <TextLanding data={termsData} />
  );
};

export default TratamientoDatosPersonales;