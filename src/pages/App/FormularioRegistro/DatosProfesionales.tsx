import React, { useState } from 'react';
import { PersonalInfo, ProfessionalInfo, UserInformationData } from '../../../types/types';

interface DatosProfesionalesProps {
  handleNext: () => void;
  handlePrevious: () => void;
  formData: UserInformationData;
  setFormData: React.Dispatch<React.SetStateAction<UserInformationData>>;
}

interface ValidationErrors {
  [key: string]: string;
}

const requiredFields = [
  'ocupacion', 'actividadEconomica', 'estrato', 'tieneCuentaBancaria', 'situacionCrediticia', 'antiguedadTelefonoMovil'
];

function DatosProfesionales({ handleNext, handlePrevious, formData, setFormData }: DatosProfesionalesProps) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: UserInformationData) => ({
      ...prevData,
      professionalInfo: {
        ...prevData.professionalInfo,
        [name]: value
      }
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    requiredFields.forEach(field => {
      if (!formData.professionalInfo[field as keyof ProfessionalInfo]) {
        newErrors[field] = 'Este campo es requerido';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-4xl font-bold text-texto mb-6 text-center my-4">Información Laboral</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Ocupación */}
          <div>
            <label htmlFor="ocupacion" className="block text-base font-medium text-texto">
              Ocupación
            </label>
            <select
              id="ocupacion"
              name="ocupacion"
              value={formData.professionalInfo.ocupacion}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.ocupacion ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Selecciona una opción.</option>
              <option value="Empleado/a">Empleado/a</option>
              <option value="Independiente">Independiente</option>
              <option value="Desempleado/a">Desempleado/a</option>
              <option value="Pensionado">Pensionado</option>
              <option value="Ama de casa">Ama de casa</option>
            </select>
            {errors.ocupacion && (
              <p className="mt-2 text-sm text-red-600">
                {errors.ocupacion}
              </p>
            )}
          </div>

          {/* Actividad económica */}
          <div>
            <label htmlFor="actividadEconomica" className="block text-base font-medium text-texto">
              Actividad económica
            </label>
            <select
              id="actividadEconomica"
              name="actividadEconomica"
              value={formData.professionalInfo.actividadEconomica}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.actividadEconomica ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Selecciona una opción.</option>
              <option value="Agricultura, ganadería">Agricultura, ganadería</option>
              <option value="Minería y canteras">Minería y canteras</option>
              <option value="Industrias manufactureras">Industrias manufactureras</option>
              <option value="Suministro de servicios">Suministro de servicios</option>
              <option value="Construcción">Construcción</option>
              <option value="Comercio al por mayor y por menor">Comercio al por mayor y por menor</option>
              <option value="Transporte y almacenamiento">Transporte y almacenamiento</option>
              <option value="Alojamiento y comida">Alojamiento y comida</option>
              <option value="Financieros y seguros">Financieros y seguros</option>
              <option value="Inmobiliarias">Inmobiliarias</option>
              <option value="Profesionales, científicas y técnicas">Profesionales, científicas y técnicas</option>
              <option value="Servicios administrativos">Servicios administrativos</option>
              <option value="Educación">Educación</option>
              <option value="Salud humana y asistencia">Salud humana y asistencia</option>
              <option value="Software y tecnología">Software y tecnología</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.actividadEconomica && (
              <p className="mt-2 text-sm text-red-600">
                {errors.actividadEconomica}
              </p>
            )}
          </div>

          {/* Estrato */}
          <div>
            <label htmlFor="estrato" className="block text-base font-medium text-texto">
              Estrato
            </label>
            <select
              id="estrato"
              name="estrato"
              value={formData.professionalInfo.estrato}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.estrato ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Selecciona una opción.</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            {errors.estrato && (
              <p className="mt-2 text-sm text-red-600">
                {errors.estrato}
              </p>
            )}
          </div>

          {/* Tienes una cuenta bancaria a tu nombre */}
          <div>
            <label htmlFor="tieneCuentaBancaria" className="block text-base font-medium text-texto">
              ¿Tienes una cuenta bancaria a tu nombre?
            </label>
            <select
              id="tieneCuentaBancaria"
              name="tieneCuentaBancaria"
              value={formData.professionalInfo.tieneCuentaBancaria}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.tieneCuentaBancaria ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Selecciona una opción.</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
              <option value="Nequi">No, tengo nequi o daviplata</option>
            </select>
            {errors.tieneCuentaBancaria && (
              <p className="mt-2 text-sm text-red-600">
                {errors.tieneCuentaBancaria}
              </p>
            )}
          </div>

          {/* Situación crediticia */}
          <div>
            <label htmlFor="situacionCrediticia" className="block text-base font-medium text-texto">
              Situación crediticia
            </label>
            <select
              id="situacionCrediticia"
              name="situacionCrediticia"
              value={formData.professionalInfo.situacionCrediticia}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.situacionCrediticia ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Selecciona una opción.</option>
              <option value="Buena">Buena</option>
              <option value="Regular">Regular</option>
              <option value="Mala">Mala</option>
              <option value="No tengo historial crediticio">No tengo historial crediticio</option>
            </select>
            {errors.situacionCrediticia && (
              <p className="mt-2 text-sm text-red-600">
                {errors.situacionCrediticia}
              </p>
            )}
            <p className="mt-1 text-sm text-principal">
              Responde con sinceridad para aumentar tus probabilidades de aprobación.
            </p>
          </div>

          {/* Antigüedad del teléfono móvil */}
          <div>
            <label htmlFor="antiguedadTelefonoMovil" className="block text-base font-medium text-texto">
              Antigüedad del teléfono móvil
            </label>
            <select
              id="antiguedadTelefonoMovil"
              name="antiguedadTelefonoMovil"
              value={formData.professionalInfo.antiguedadTelefonoMovil}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.antiguedadTelefonoMovil ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Selecciona una opción.</option>
              <option value="Menos de 6 meses">Menos de 6 meses</option>
              <option value="Entre 6 meses y 1 año">Entre 6 meses y 1 año</option>
              <option value="Entre 1 y 2 años">Entre 1 y 2 años</option>
              <option value="Más de 2 años">Más de 2 años</option>
            </select>
            {errors.antiguedadTelefonoMovil && (
              <p className="mt-2 text-sm text-red-600">
                {errors.antiguedadTelefonoMovil}
              </p>
            )}
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
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default DatosProfesionales;