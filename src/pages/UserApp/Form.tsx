import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

// Pdf Config Modules
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

import sideImage from "../../assets/loginSide.jpeg";
import file from "../../assets/Requerimientos.pdf";

interface FirstStepProps {
  handleNext: () => void;
}

function FirstStep({ handleNext }: FirstStepProps) {
  return (
    <div>
      <form className="mt-8 space-y-4 w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Primer nombre */}
          <div>
            <label htmlFor="firstName" className="block text-base font-medium text-texto">
              Primer nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
          </div>

          {/* Segundo nombre */}
          <div>
            <label htmlFor="secondName" className="block text-base font-medium text-texto">
              Segundo nombre (Si aplica)
            </label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
          </div>

          {/* Primer apellido */}
          <div>
            <label htmlFor="firstLastName" className="block text-base font-medium text-texto">
              Primer apellido
            </label>
            <input
              type="text"
              id="firstLastName"
              name="firstLastName"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
          </div>

          {/* Segundo apellido */}
          <div>
            <label htmlFor="secondLastName" className="block text-base font-medium text-texto">
              Segundo apellido (Si aplica)
            </label>
            <input
              type="text"
              id="secondLastName"
              name="secondLastName"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
          </div>

          {/* Estado civil */}
          <div>
            <label htmlFor="maritalStatus" className="block text-base font-medium text-texto">
              Estado civil
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add marital status options here */}
            </select>
          </div>

          {/* Edad */}
          <div>
            <label htmlFor="age" className="block text-base font-medium text-texto">
              Edad
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
          </div>

          {/* Género */}
          <div>
            <label htmlFor="gender" className="block text-base font-medium text-texto">
              Género
            </label>
            <select
              id="gender"
              name="gender"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add gender options here */}
            </select>
          </div>

          {/* Nivel educativo */}
          <div>
            <label htmlFor="educationLevel" className="block text-base font-medium text-texto">
              Nivel educativo
            </label>
            <select
              id="educationLevel"
              name="educationLevel"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add education level options here */}
            </select>
          </div>

          {/* Departamento */}
          <div>
            <label htmlFor="department" className="block text-base font-medium text-texto">
              Departamento
            </label>
            <select
              id="department"
              name="department"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Seleccione una opción.</option>
              {/* Add department options here */}
            </select>
          </div>

          {/* Ciudad de Residencia */}
          <div>
            <label htmlFor="city" className="block text-base font-medium text-texto">
              Ciudad de Residencia
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="w-full sm:w-auto inline-flex justify-center mx-auto py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
          >
            Continuar
          </button>
        </div>

        <p className="mt-6 text-base text-texto text-center">
          Revisa los datos antes de continuar.
        </p>
      </form>
    </div>
  );
}

interface SecondStepProps {
  handleNext: () => void;
  handlePrevious: () => void;
}

function SecondStep({ handleNext, handlePrevious }: SecondStepProps) {
  return (
    <div>
      <form className="mt-8 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Ocupación */}
          <div>
            <label htmlFor="occupation" className="block text-base font-medium text-texto">
              Ocupación
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
              placeholder="Empleado/a"
            />
          </div>

          {/* Actividad económica */}
          <div>
            <label htmlFor="economicActivity" className="block text-base font-medium text-texto">
              Actividad económica
            </label>
            <select
              id="economicActivity"
              name="economicActivity"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add economic activity options here */}
            </select>
          </div>

          {/* Estrato */}
          <div>
            <label htmlFor="stratum" className="block text-base font-medium text-texto">
              Estrato
            </label>
            <select
              id="stratum"
              name="stratum"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add stratum options here */}
            </select>
          </div>

          {/* Tienes una cuenta bancaria a tu nombre */}
          <div>
            <label htmlFor="hasBankAccount" className="block text-base font-medium text-texto">
              ¿Tienes una cuenta bancaria a tu nombre?
            </label>
            <select
              id="hasBankAccount"
              name="hasBankAccount"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add bank account options here */}
            </select>
          </div>

          {/* Elige tu cuenta bancaria */}
          <div>
            <label htmlFor="bankAccount" className="block text-base font-medium text-texto">
              Elige tu cuenta bancaria
            </label>
            <select
              id="bankAccount"
              name="bankAccount"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add bank account options here */}
            </select>
            <p className="mt-1 text-sm text-purple-600">
              Tip: Si tu cuenta es Bancolombia el desembolso será mucho más rápido.
            </p>
          </div>

          {/* Tipo de cuenta */}
          <div>
            <label htmlFor="accountType" className="block text-base font-medium text-texto">
              Tipo de cuenta
            </label>
            <select
              id="accountType"
              name="accountType"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add account type options here */}
            </select>
          </div>

          {/* Número de cuenta */}
          <div>
            <label htmlFor="accountNumber" className="block text-base font-medium text-texto">
              Número de cuenta
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
            <p className="mt-1 text-sm text-purple-600">
              Este número cuenta debe estar a tu nombre para que podamos aprobar tu solicitud.
            </p>
          </div>

          {/* Situación crediticia */}
          <div>
            <label htmlFor="creditSituation" className="block text-base font-medium text-texto">
              Situación crediticia
            </label>
            <select
              id="creditSituation"
              name="creditSituation"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add credit situation options here */}
            </select>
            <p className="mt-1 text-sm text-purple-600">
              Responde con sinceridad para aumentar tus probabilidades de aprobación.
            </p>
          </div>

          {/* Antigüedad del teléfono móvil */}
          <div>
            <label htmlFor="mobilePhoneSeniority" className="block text-base font-medium text-texto">
              Antigüedad del teléfono móvil
            </label>
            <select
              id="mobilePhoneSeniority"
              name="mobilePhoneSeniority"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add mobile phone seniority options here */}
            </select>
          </div>

          {/* Antigüedad de cuenta bancaria */}
          <div>
            <label htmlFor="bankAccountSeniority" className="block text-base font-medium text-texto">
              Antigüedad de cuenta bancaria
            </label>
            <select
              id="bankAccountSeniority"
              name="bankAccountSeniority"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal"
            >
              <option>Selecciona una opción.</option>
              {/* Add bank account seniority options here */}
            </select>
          </div>

        </div>

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handlePrevious}
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

interface ThirdStepProps {
  handleNext: () => void;
}

function ThirdStep({ handleNext }: ThirdStepProps) {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-texto">Confirma las condiciones de tu crédito</h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Cupo aprobado */}
        <div className="p-6 bg-white rounded-lg">
          <h3 className="text-xl font-semibold text-texto">Cupo aprobado</h3>
          <p className="text-lg text-gray-500 mt-2">
            Este es tu cupo de crédito inicial, puedes aumentarlo conforme a tu comportamiento de pago.
          </p>
          <p className="text-3xl font-bold text-gray-800 mt-4">$200,000</p>
        </div>

        {/* Plazo acordado */}
        <div className="p-6 bg-white rounded-lg">
          <h3 className="text-xl font-semibold text-texto">Plazo acordado</h3>
          <p className="text-lg text-gray-500 mt-2">
            Este es el plazo máximo que quedará pactado que puedes ampliar con la función de extender plazo de Galileo.
          </p>
          <p className="text-3xl font-bold text-gray-800 mt-4">38 días</p>
        </div>

        {/* Total a pagar */}
        <div className="p-6 bg-white rounded-lg">
          <h3 className="text-xl font-semibold text-texto">Total a pagar</h3>
          <p className="text-3xl font-bold text-gray-800 mt-4">$276,163</p>
        </div>

        {/* Fecha límite de pago */}
        <div className="p-6 bg-white rounded-lg">
          <h3 className="text-xl font-semibold text-texto">Fecha límite de pago</h3>
          <p className="text-3xl font-bold text-gray-800 mt-4">14/09/2024</p>
          <a href="#" className="text-lg text-purple-600 mt-2 inline-block">Ver fechas disponibles</a>
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center">
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex justify-center py-4 px-8 border border-transparent rounded-full text-xl font-medium text-white bg-principal hover:bg-secondario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}


interface FourthStepProps {
  handleNext: () => void;
}

function FourthStep({ handleNext }: FourthStepProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const updatePageWidth = () => {
      if (containerRef.current) {
        setPageWidth(containerRef.current.offsetWidth);
      }
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    
    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

  const onCheckboxChange = () => {
    setChecked(!checked);
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPageNumber = parseInt(e.target.value, 10);
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);
    }
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div className="space-y-4">
      <div ref={containerRef} className="pdf-viewer mx-auto w-full">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={pageWidth} />
        </Document>

        {/* New Pagination Component */}
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center justify-center rounded bg-principal py-1 text-white">
            <button onClick={goToPrevPage} disabled={pageNumber <= 1} className="inline-flex size-8 items-center justify-center">
              <span className="sr-only">Prev Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <span className="h-4 w-px bg-white/25" aria-hidden="true"></span>

            <div>
              <label htmlFor="PaginationPage" className="sr-only">Page</label>
              <input
                type="number"
                className="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                min="1"
                max={numPages}
                value={pageNumber}
                onChange={handlePageChange}
                id="PaginationPage"
              />
            </div>

            <span className="h-4 w-px bg-white/25"></span>

            <button onClick={goToNextPage} disabled={pageNumber >= numPages} className="inline-flex size-8 items-center justify-center">
              <span className="sr-only">Next Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="terms-and-conditions">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={onCheckboxChange}
            className="h-6 w-6 text-principal border-gray-300 rounded"
          />
          <span className="text-lg text-gray-700">Acepto los terminos y condiciones del contrato</span>
        </label>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={checked ? handleNext : undefined}
          className={`w-full sm:w-auto inline-flex justify-center py-4 px-8 border border-transparent rounded-full text-base font-medium text-white ${
            checked ? 'bg-principal hover:bg-secondario' : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!checked}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

interface FifthStepProps {
  handleNext: () => void;
  handlePrevious: () => void;
}

function FifthStep({ handleNext, handlePrevious }: FifthStepProps) {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const inputsRef = Array.from({ length: 6 }, () => React.createRef<HTMLInputElement>());

  const handleInputChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Automatically move to the next input if not the last one
      if (value && index < 5) {
        inputsRef[index + 1].current?.focus();
      }
    }
  };

  // Implement with backend
  // const handleSubmit = () => {
  //   const fullCode = code.join('');
  //   if (fullCode.length === 6) {
  //     // Trigger next step or form submission logic
  //     handleNext();
  //   } else {
  //     alert('Please enter the complete 6-digit code.');
  //   }
  // };

  const handleResendCode = () => {
    // Logic to resend the SMS code
    alert('Code resent!');
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-texto">Verificación vía SMS</h2>
        <p className="text-base text-gray-500 mt-2">
          Escribe el código de <strong>6 dígitos</strong> que te enviamos a tu celular registrado.
        </p>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={inputsRef[index]}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(e.target.value, index)}
            className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:border-principal"
          />
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={handlePrevious}
          className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          Anterior
        </button>
        <Link
          to="/app"
          className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
        >
          Firmar documentos
        </Link>
      </div>

      <div className="text-center mt-4">
        <button
          type="button"
          onClick={handleResendCode}
          className="text-lg text-purple-600 underline hover:text-purple-800 focus:outline-none"
        >
          Reenviar código
        </button>
      </div>
    </div>
  );
}


function Form() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 5)); // Adjusted to 5 steps
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const steps = ['Información básica', 'Otros datos', 'Revisar oferta', 'Firmar documentos', 'Verificación SMS'];

  return (
    <section className="bg-fondo">
      <div className="lg:grid min-h-screen lg:grid-cols-12">
        <main className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:col-span-12 lg:px-8 lg:py-12">
          <div className="w-full mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 text-center">
                  <div
                    className={`w-10 h-10 rounded-full mx-auto ${
                      index + 1 <= currentStep ? 'bg-principal text-white' : 'bg-white text-texto'
                    } flex items-center justify-center`}
                  >
                    {index + 1}
                  </div>
                  <p className="mt-2 text-sm font-medium text-texto">{step}</p>
                </div>
              ))}
            </div>
            <div className="w-full bg-white h-1 mt-4 relative">
              <div
                className="absolute top-0 left-0 h-1 bg-principal"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            {currentStep === 1 && <FirstStep handleNext={handleNext} />}
            {currentStep === 2 && <SecondStep handleNext={handleNext} handlePrevious={handlePrevious} />}
            {currentStep === 3 && <ThirdStep handleNext={handleNext} />}
            {currentStep === 4 && <FourthStep handleNext={handleNext} />}
            {currentStep === 5 && <FifthStep handleNext={handleNext} handlePrevious={handlePrevious} />} {/* New step */}
          </div>
        </main>
      </div>
    </section>
  );
}

export default Form;
