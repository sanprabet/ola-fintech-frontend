import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

import { CreditRequestData } from "types";

interface CalculatorProps {
  handleNext: () => void;
  setFormData: (data: CreditRequestData) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ handleNext, setFormData }) => {
  const [montoSolicitado, setMontoSolicitado] = useState<number>(1130000);
  const [interesCorriente, setInteresCorriente] = useState<number>(23368);
  const [administracion] = useState<number>(60000);
  const [iva] = useState<number>(11400);
  const [totalPagar, setTotalPagar] = useState<number>(1224768);
  const [fechaCuota, setFechaCuota] = useState<string>('14/09/2024');

  const handleMontoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMontoSolicitado(value);
    const interes = Math.ceil(value * 0.00207);
    setInteresCorriente(interes);
    setTotalPagar(value + interes + administracion + iva);
  };

  const handleFechaChange = (date: string) => {
    setFechaCuota(date);
  };

  const calculateBackground = (): string => {
    const percentage = ((montoSolicitado - 100000) / (1500000 - 100000)) * 100;
    return `linear-gradient(to right, #2D1C4B ${percentage}%, #e5e7eb ${percentage}%)`;
  };

  const handleSubmit = () => {
    setFormData({
      montoSolicitado,
      interesCorriente,
      administracion,
      iva,
      totalPagar,
      fechaCuota,
    });
    handleNext();
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8 lg:flex lg:items-start lg:justify-between">
      <style>
        {`
          .custom-slider {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 30px;
            background: ${calculateBackground()};
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 23px;
            height: 23px;
            background: transparent;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .custom-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #2D1C4B;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .custom-slider::-webkit-slider-thumb:hover,
          .custom-slider::-moz-range-thumb:hover {
            background: #e64a19;
          }

          .date-button {
            width: 100%;
            padding: 16px 24px;
            border: 2px solid transparent;
            border-radius: 0.375rem;
            text-align: center;
            cursor: pointer;
            font-size: 1.125rem;
            transition: border-color 0.3s ease;
            border-color: #E0DBEF;
          }

          .date-button.selected {
            background-color: #E0DBEF;
            border: None
          }
        `}
      </style>
      {/* Left Side (Inputs) */}
      <div className="w-full lg:w-1/2 lg:pr-8">
        <h3 className="text-3xl font-bold text-center text-texto mb-4">
          Confirma el monto de tu crédito
        </h3>
        <p className="text-center text-principal mb-6 text-lg">
          Tu primera vez hasta $500.000
        </p>
        <div className="mb-8">
          <label className="block text-lg font-medium text-texto mb-4">
            Elige el monto
          </label>
          <input
            type="range"
            id="montoSolicitado"
            value={montoSolicitado}
            min="100000"
            max="1500000"
            step="1000"
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-slider"
            onChange={handleMontoChange}
            style={{
              background: calculateBackground(),
            }}
          />
          <div className="text-center text-2xl font-semibold text-texto mt-4">
            ${montoSolicitado.toLocaleString()}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg font-medium text-texto mb-4">
            Elige la fecha de pago
          </label>
          <div className="flex justify-between items-center gap-4 flex-wrap sm:flex-nowrap">
            {['30/08/2024', '14/09/2024', '30/09/2024'].map((date) => (
              <button
                key={date}
                className={`date-button ${
                  fechaCuota === date ? 'selected' : ''
                } hover:bg-principal hover:text-white transition-colors duration-200`}
                onClick={() => handleFechaChange(date)}
              >
                {date} <br /> Vence en {/* Calculate days */} días
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side (Outputs) */}
      <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center h-full">
        <div className="mb-8">
          <div className="flex justify-between text-lg">
            <span className="text-texto">Monto solicitado</span>
            <span className="text-texto">${montoSolicitado.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-texto">Interés corriente (25% E.A)</span>
            <span className="text-texto">${interesCorriente.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-texto">Administración (Opcional)</span>
            <span className="text-texto">${administracion.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-texto">IVA</span>
            <span className="text-texto">${iva.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-2xl font-bold mt-6">
            <span className="text-texto">Total a pagar</span>
            <span className="text-black">${totalPagar.toLocaleString()}</span>
          </div>
          <div className="text-lg text-texto mt-4">
            Fecha de tu primera cuota: {fechaCuota}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-principal hover:bg-principalToneDown text-white font-bold rounded-full transition-all duration-200 py-4 text-xl text-center flex justify-center items-center"
        >
          Pedir crédito
          <svg className="w-7 h-7 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <Link to="/app" className="text-center mt-2 text-principal hover:underline">
          Ir a la aplicacion
        </Link>
      </div>
    </div>
  );
};

export default Calculator;