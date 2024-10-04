import React from 'react';
import TextLanding from '../../../components/TextLanding';
import { TextLandingData } from 'types/types';

const termsData: TextLandingData = {
  title: "Solicita tu crédito a través del canal físico (Opcional)",
  description: "Ola Fintech ha dispuesto para el titular que no desee instrumentar la firma electrónica y demás beneficios descritos en el pago de la cuota de administración a través de la plataforma web olafintech.co, un canal adicional para realizar la solicitud del crédito mediante el envío de la siguiente información a la dirección de correspondencia física:",
  sections: [
    {
      title: "1. Documentos Requeridos",
      content: "Los siguientes documentos deben ser enviados a la dirección de correspondencia física:",
      list: [
        {
          name: "Fotocopia cédula de ciudadanía",
          description: "Copia de la cédula de ciudadanía del solicitante"
        },
        {
          name: "Certificado laboral",
          description: "Certificado laboral no mayor a 30 días"
        },
        {
          name: "Desprendibles de pago",
          description: "Últimos 2 desprendibles de pago de nómina"
        },
        {
          name: "Certificado de cuenta bancaria",
          description: "Certificado de cuenta bancaria no mayor a 30 días"
        },
        {
          name: "Extracto bancario",
          description: "Extracto bancario de los últimos 3 meses"
        },
        {
          name: "Contrato",
          description: "Contrato debidamente firmado y autenticado ante Notaría"
        },
        {
          name: "Pagaré y carta de instrucciones",
          description: "Pagaré y carta de instrucciones debidamente firmado y autenticados ante Notaría"
        },
        {
          name: "Aceptación de términos y condiciones",
          description: "Documento de aceptación de los términos y condiciones generales del servicio debidamente firmado y autenticado ante Notaría"
        },
        {
          name: "Aceptación de Política de Privacidad",
          description: "Documento de aceptación de la Política de Privacidad y Tratamiento de datos debidamente firmado y autenticado ante Notaría"
        }
      ]
    },
    {
      title: "2. Obligaciones del usuario",
      content: "El titular se obliga a:",
      list: [
        {
          name: "Veracidad de la información",
          description: "Suministrar información veraz, completa, actualizada y comprobable"
        },
        {
          name: "No inducir a error",
          description: "Garantizar que a partir de los datos suministrados no busca inducir al error en los procesos internos"
        }
      ]
    },
    {
      title: "3. Derechos de Ola Fintech",
      content: "Ola Fintech se reserva los siguientes derechos:",
      list: [
        {
          name: "Aprobación de crédito",
          description: "Ola Fintech se reserva el derecho de aprobación de la solicitud de crédito"
        },
        {
          name: "Tiempos de respuesta",
          description: "Ola Fintech se reserva los tiempos para su respuesta"
        },
        {
          name: "Rectificaciones",
          description: "Ola Fintech, en procura de la veracidad, realizará las rectificaciones respectivas siendo estas últimas de pleno conocimiento del usuario"
        }
      ]
    },
    {
      title: "4. Política de Privacidad y Tratamiento de Datos Personales",
      content: "Para más información sobre el tratamiento de sus datos personales, consulte nuestra Política de Privacidad y Tratamiento de Datos Personales completa."
    }
  ],
};

const CreditosFisicos: React.FC = () => {
  return (
    <TextLanding data={termsData} />
  );
};

export default CreditosFisicos;