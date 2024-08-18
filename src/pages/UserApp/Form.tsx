import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import sideImage from "../../assets/loginSide.jpeg";
import file from "../../assets/contrato.pdf";

function FourthStep({ handleNext }) {
    const [checked, setChecked] = useState(false);

    return (
        <div className="space-y-4">
            <div className="pdf-viewer">
                <Document
                    file={file}
                    onLoadSuccess={() => console.log("PDF loaded successfully")}
                >
                    <Page pageNumber={1} />
                </Document>
            </div>

            <div className="terms-and-conditions">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        className="h-4 w-4 text-principal border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">I accept the terms and conditions</span>
                </label>
            </div>

            <div className="mt-4 flex justify-end">
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={!checked}
                    className={`w-full sm:w-auto inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white ${
                        checked ? 'bg-principal hover:bg-secondario' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                    Accept and Continue
                </button>
            </div>
        </div>
    );
}

function FirstStep({ handleNext }){
    return(
        <div>
            <form className="mt-8 space-y-4 w-full">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                    <div>
                        <label htmlFor="lastName" className="block text-base font-medium text-texto">
                            Primer apellido
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
                        />
                    </div>
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
                    <div>
                        <label htmlFor="maritalStatus" className="block text-base font-medium text-texto">
                            Estado civil
                        </label>
                        <select
                            id="maritalStatus"
                            name="maritalStatus"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Seleccione una opción.</option>
                            <option>Soltero/a</option>
                            <option>Casado/a</option>
                            <option>Divorciado/a</option>
                            <option>Viudo/a</option>
                        </select>
                    </div>
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
                    <div>
                        <label htmlFor="gender" className="block text-base font-medium text-texto">
                            Género
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Seleccione una opción.</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="educationLevel" className="block text-base font-medium text-texto">
                            Nivel educativo
                        </label>
                        <select
                            id="educationLevel"
                            name="educationLevel"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Seleccione una opción.</option>
                            <option>Bachillerato</option>
                            <option>Técnico</option>
                            <option>Tecnológico</option>
                            <option>Universitario</option>
                            <option>Posgrado</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="department" className="block text-base font-medium text-texto">
                            Departamento
                        </label>
                        <select
                            id="department"
                            name="department"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Seleccione una opción.</option>
                            {/* Add department options here */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="residenceCity" className="block text-base font-medium text-texto">
                            Ciudad de Residencia
                        </label>
                        <input
                            type="text"
                            id="residenceCity"
                            name="residenceCity"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
                        />
                    </div>
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
    )
}

function SecondStep({ handleNext, handlePrevious }){
    return(
        <div>
            <form className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                    <div>
                        <label htmlFor="stratum" className="block text-base font-medium text-texto">
                            Estrato
                        </label>
                        <select
                            id="stratum"
                            name="stratum"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add stratum options here */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="bankAccountStatus" className="block text-base font-medium text-texto">
                            ¿Tienes una cuenta bancaria a tu nombre?
                        </label>
                        <select
                            id="bankAccountStatus"
                            name="bankAccountStatus"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add options for bank account status here */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="bankAccount" className="block text-base font-medium text-texto">
                            Elige tu cuenta bancaria
                        </label>
                        <select
                            id="bankAccount"
                            name="bankAccount"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add bank account options here */}
                        </select>
                        <p className="mt-1 text-sm text-purple-500">
                            Tip: Si tu cuenta es Bancolombia el desembolso será mucho más rápido.
                        </p>
                    </div>
                    <div>
                        <label htmlFor="accountType" className="block text-base font-medium text-texto">
                            Tipo de cuenta
                        </label>
                        <select
                            id="accountType"
                            name="accountType"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add account type options here */}
                        </select>
                    </div>
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
                        <p className="mt-1 text-sm text-texto">
                            Este número cuenta debe estar a tu nombre para que podamos aprobar tu solicitud.
                        </p>
                    </div>
                    <div>
                        <label htmlFor="creditSituation" className="block text-base font-medium text-texto">
                            Situación crediticia
                        </label>
                        <select
                            id="creditSituation"
                            name="creditSituation"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add credit situation options here */}
                        </select>
                        <p className="mt-1 text-sm text-purple-500">
                            Responde con sinceridad para aumentar tus probabilidades de aprobación.
                        </p>
                    </div>
                    <div>
                        <label htmlFor="phoneAntiquity" className="block text-base font-medium text-texto">
                            Antigüedad del teléfono móvil
                        </label>
                        <select
                            id="phoneAntiquity"
                            name="phoneAntiquity"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add phone antiquity options here */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="bankAccountAntiquity" className="block text-base font-medium text-texto">
                            Antigüedad de cuenta bancaria
                        </label>
                        <select
                            id="bankAccountAntiquity"
                            name="bankAccountAntiquity"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                        >
                            <option>Selecciona una opción.</option>
                            {/* Add bank account antiquity options here */}
                        </select>
                    </div>
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
    )
}

function ThirdStep({ handleNext }){
    return(
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
    )
}

function Form() {
    const [currentStep, setCurrentStep] = useState(1);

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

                    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
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