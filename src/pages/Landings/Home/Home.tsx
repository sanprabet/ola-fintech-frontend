import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, Info } from "lucide-react";
import { CreditData } from "types/types";
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Features from './Features';
import Requirements from './Requirements';
import HeroBottom from './HeroBottom';
import Faq from '../../../components/FAQ';

const Tooltip: React.FC<{ text: string, children: React.ReactNode }> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="absolute w-56 bg-gray-700 text-white text-xs rounded-lg p-2 shadow-lg"
          style={{
            top: '-50%',
            left: '100%',
            transform: 'translateY(-50%)',
            whiteSpace: 'normal',
            maxWidth: '200px',
            zIndex: 10,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

const Calculator: React.FC = () => {
  const [montoSolicitado, setMontoSolicitado] = useState<number>(200000); // Initial value set to 200,000
  const [interesCorriente, setInteresCorriente] = useState<number>(23368);
  const [administracion] = useState<number>(60000);
  const [iva] = useState<number>(11400);
  const [totalPagar, setTotalPagar] = useState<number>(276768); // Adjusted initial total
  const [fechaCuota, setFechaCuota] = useState<string>('');

  useEffect(() => {
    setFechaCuota(getFormattedDate(15));
  }, []);

  const handleMontoChange = (value: number) => {
    const clampedValue = Math.min(Math.max(value, 200000), 1500000);
    setMontoSolicitado(clampedValue);
    const interes = Math.ceil(clampedValue * 0.00207);
    setInteresCorriente(interes);
    setTotalPagar(clampedValue + interes + administracion + iva);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    handleMontoChange(value);
  };

  const handleArrowClick = (direction: 'up' | 'down') => {
    const change = direction === 'up' ? 10000 : -10000;
    handleMontoChange(montoSolicitado + change);
  };

  const handleFechaChange = (days: number) => {
    setFechaCuota(getFormattedDate(days));
  };

  const getFormattedDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const calculateBackground = (): string => {
    const percentage = ((montoSolicitado - 200000) / (1500000 - 200000)) * 100;
    return `linear-gradient(to right, #2D1C4B ${percentage}%, #E0DBEF ${percentage}%)`;
  };

  return (
    <div className="bg-gradient-to-b from-principal to-principalToneDown py-10 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <style>
          {`
            .custom-slider {
              -webkit-appearance: none;
              appearance: none;
              width: 100%;
              height: 8px;
              background: ${calculateBackground()};
              border-radius: 4px;
              cursor: pointer;
              transition: background 0.3s ease;
            }

            .custom-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 24px;
              height: 24px;
              background: #2D1C4B;
              border-radius: 50%;
              cursor: pointer;
              transition: background 0.3s ease, transform 0.1s ease;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            }

            .custom-slider::-moz-range-thumb {
              width: 24px;
              height: 24px;
              background: #2D1C4B;
              border-radius: 50%;
              cursor: pointer;
              transition: background 0.3s ease, transform 0.1s ease;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            }

            .custom-slider::-webkit-slider-thumb:hover,
            .custom-slider::-moz-range-thumb:hover {
              background: #56496e;
              transform: scale(1.1);
            }

            .date-button {
              width: 100%;
              padding: 12px 16px;
              border: 2px solid #E0DBEF;
              border-radius: 12px;
              text-align: center;
              cursor: pointer;
              font-size: 0.875rem;
              transition: all 0.3s ease;
              background-color: transparent;
              color: #07090E;
            }

            .date-button:hover {
              background-color: #E0DBEF;
              border-color: #8075BA;
            }

            .date-button.selected {
              background-color: #2D1C4B;
              border-color: #2D1C4B;
              color: white;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .amount-display {
              font-size: 2rem;
              font-weight: bold;
              color: #2D1C4B;
              transition: all 0.3s ease;
            }

            .arrow-button {
              background-color: #2D1C4B;
              color: white;
              border: none;
              border-radius: 8px;
              padding: 8px;
              font-size: 1rem;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .arrow-button:hover {
              background-color: #56496e;
            }

            .arrow-button:focus {
              outline: none;
              box-shadow: 0 0 0 3px rgba(45, 28, 75, 0.3);
            }
          `}
        </style>
        <div className="w-full mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:flex lg:items-start lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-texto mb-3 sm:mb-4">
                Calcula tu crédito
              </h3>
              <p className="text-center text-sm sm:text-base text-texto mb-4">
                Tu primera vez hasta $500.000
              </p>
              <div className="mb-6 sm:mb-8">
                <label className="block text-base sm:text-lg font-medium text-texto mb-3 sm:mb-4">
                  Elige el monto
                </label>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center flex-grow mr-4">
                    <span className="text-2xl font-bold mr-2">$</span>
                    <div className="amount-display">
                      {montoSolicitado.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => handleArrowClick('up')}
                      className="arrow-button mr-2"
                    >
                      <ArrowUp size={24} />
                    </button>
                    <button
                      onClick={() => handleArrowClick('down')}
                      className="arrow-button"
                    >
                      <ArrowDown size={24} />
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  id="montoSolicitado"
                  value={montoSolicitado}
                  min="200000"
                  max="1500000"
                  step="10000"
                  className="w-full custom-slider"
                  onChange={handleSliderChange}
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-base sm:text-lg font-medium text-texto mb-3 sm:mb-4">
                  Elige la fecha de pago
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[15, 30].map((days) => (
                    <button
                      key={days}
                      className={`date-button ${fechaCuota === getFormattedDate(days) ? 'selected' : ''}`}
                      onClick={() => handleFechaChange(days)}
                    >
                      <span className="block text-sm sm:text-base">{getFormattedDate(days)}</span>
                      <span className="block text-xs sm:text-sm mt-1">
                        Vence en {days} días
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center h-full mt-6 lg:mt-0">
              <div className="mb-6 sm:mb-8 p-6 rounded-lg">
                {[
                  { label: 'Monto solicitado', value: montoSolicitado },
                  {
                    label: 'Interés corriente (25% E.A)',
                    value: interesCorriente,
                    tooltip: "(Efectivo Anual) sobre el capital adeudado, para Octubre de 2024 la tasa máxima fijada por las autoridades en Colombia es del 28,17% E.A.",
                  },
                  {
                    label: 'Administración (Opcional)',
                    value: administracion,
                    tooltip: "Esta tarifa te permite realizar solicitudes en línea, garantizar un cupo de crédito rotativo, firmar documentos electrónicamente y acceder a beneficios.",
                  },
                  { label: 'IVA', value: iva },
                ].map(({ label, value, tooltip }) => (
                  <div key={label} className="flex justify-between text-sm sm:text-base mb-2">
                    <Tooltip text={tooltip || ""}>
                      <div className="flex items-center space-x-2">
                        <span className="text-texto">{label}</span>
                        {tooltip && <Info size={16} className="text-gray-500" />}
                      </div>
                    </Tooltip>
                    <span className="text-texto font-medium">${value.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between text-xl sm:text-2xl font-bold mt-4 pt-4 border-t border-secondario">
                  <span className="text-texto">Total a pagar</span>
                  <span className="text-principal">${totalPagar.toLocaleString()}</span>
                </div>
                <div className="text-sm sm:text-base text-texto mt-3 sm:mt-4">
                  Fecha de tu primera cuota: <span className="font-medium text-principal">{fechaCuota}</span>
                </div>
              </div>

              <Link
                to="/app"
                className="w-full bg-principal hover:bg-principalToneDown text-white font-bold rounded-full transition-all duration-200 py-3 sm:py-4 text-lg sm:text-xl text-center flex justify-center items-center"
              >
                Solicitar crédito
                <svg className="w-5 h-5 sm:w-7 sm:h-7 ml-4 sm:ml-8 -mr-1 sm:-mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div className='mt-9'>
      <Hero />
      <Features />
      <Requirements />
      <Calculator />
      <HeroBottom />
      <Faq />
    </div>
  );
}

export default Home;
