import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

// Pdf Config Modules
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

import sideImage from "../../assets/loginSide.jpeg";
import file from "../../assets/Requerimientos.pdf";

// Define types for the props
interface StepProps {
    handleNext: () => void;
    handlePrevious?: () => void;
}

// FirstStep component
const FirstStep: React.FC<StepProps> = ({ handleNext }) => {
    return (
        <div>
            <form className="mt-8 space-y-4 w-full">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {/* Form fields */}
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
                    {/* Additional fields omitted for brevity */}
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-full sm:w-auto inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
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
};

// SecondStep component
const SecondStep: React.FC<StepProps> = ({ handleNext, handlePrevious }) => {
    return (
        <div>
            <form className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {/* Form fields */}
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
                    <div>
                        <label htmlFor="economicActivity" className="block text-base font-medium text-texto">
                            Actividad económica
                        </label>
                        <select
                            id="economicActivity"
                            name="economicActivity"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add economic activity options here */}
                        </select>
                    </div>
                    {/* Additional fields omitted for brevity */}
                </div>

                <div className="mt-4 flex justify-between">
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
};

// ThirdStep component
const ThirdStep: React.FC<StepProps> = ({ handleNext }) => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Cupo aprobado</h3>
                    <p className="text-sm text-gray-500">
                        Este es tu cupo de crédito inicial, puedes aumentarlo conforme a tu comportamiento de pago.
                    </p>
                    <p className="mt-2 text-xl font-bold text-gray-800">$200,000</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Plazo acordado</h3>
                    <p className="text-sm text-gray-500">
                        Este es el plazo máximo que quedará pactado que puedes ampliar con la función de extender plazo de Galilea.
                    </p>
                    <p className="mt-2 text-xl font-bold text-gray-800">23 días</p>
                </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Total a pagar</h3>
                <p className="text-sm text-gray-500">$274,283</p>
                <h3 className="mt-4 text-lg font-semibold">Fecha límite de pago</h3>
                <p className="text-sm text-gray-500">30/08/2024</p>
                <a href="#" className="text-sm text-purple-500 underline mt-2 block">Ver fechas disponibles</a>
            </div>
            <div className="mt-4 flex justify-end">
                <button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                >
                    Continuar
                </button>
            </div>
        </div>
    );
};

// FourthStep component
const FourthStep: React.FC<StepProps> = ({ handleNext }) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageWidth, setPageWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    useEffect(() => {
        // Dynamically set the width based on container size
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

    const goToPrevPage = () => setPageNumber(pageNumber - 1);
    const goToNextPage = () => setPageNumber(pageNumber + 1);

    return (
        <div className="space-y-4">
            <div ref={containerRef} className="pdf-viewer mx-auto w-full">
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={pageWidth} />
                </Document>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={goToPrevPage}
                        disabled={pageNumber <= 1}
                        className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                    >
                        Previous Page
                    </button>
                    <button
                        onClick={goToNextPage}
                        disabled={pageNumber >= numPages}
                        className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                    >
                        Next Page
                    </button>
                </div>
            </div>

            <div className="terms-and-conditions">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onCheckboxChange}
                        className="h-4 w-4 text-principal border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">I accept the terms and conditions</span>
                </label>
            </div>

            <div className="mt-4 flex justify-end">
                <Link
                    to="/app"
                    className={`w-full sm:w-auto inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white ${
                        checked ? 'bg-principal hover:bg-secondario' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                    Firmar Contrato
                </Link>
            </div>
        </div>
    );
};

// Form component
const Form: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const steps = ['Información básica', 'Otros datos', 'Revisar oferta', 'Firmar documentos'];

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative hidden lg:block lg:col-span-5 xl:col-span-6">
                    <img
                        alt="Rocket Illustration"
                        src={sideImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>
                <main className="flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="w-full mb-8">
                        <div className="flex justify-between items-center">
                            {steps.map((step, index) => (
                                <div key={index} className="flex-1 text-center">
                                    <div
                                        className={`w-10 h-10 rounded-full mx-auto ${
                                            index + 1 <= currentStep ? 'bg-principal' : 'bg-gray-300'
                                        } flex items-center justify-center text-white`}
                                    >
                                        {index + 1}
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-texto">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full bg-gray-300 h-1 mt-4 relative">
                            <div
                                className="absolute top-0 left-0 h-1 bg-principal"
                                style={{ width: `${(currentStep / steps.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
                        {currentStep === 1 && <FirstStep handleNext={handleNext} />}
                        {currentStep === 2 && <SecondStep handleNext={handleNext} handlePrevious={handlePrevious} />}
                        {currentStep === 3 && <ThirdStep handleNext={handleNext} />}
                        {currentStep === 4 && <FourthStep handleNext={handleNext} />}
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Form;