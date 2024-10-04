import React, { useState } from 'react';
import { PersonalInfo, UserInformationData } from 'types/types';

interface DatosPersonalesProps {
  handleNext: () => void;
  formData: UserInformationData;
  setFormData: React.Dispatch<React.SetStateAction<UserInformationData>>;
}

interface ValidationErrors {
  [key: string]: string;
}

const departamentos = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá",
  "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare",
  "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo",
  "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima",
  "Valle del Cauca", "Vaupés", "Vichada"
];

const ciudades = [
  "Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima",
  "Bogotá", "Bojacá", "Cabrera", "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Carmen de Carupa",
  "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio",
  "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza", "Fúquene", "Fusagasugá",
  "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas",
  "Guasca", "Guataquí", "Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén",
  "Junín", "La Calera", "La Mesa", "La Palma", "La Peña", "La Vega", "Lenguazaque", "Machetá",
  "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima",
  "Venecia", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra",
  "Quetame", "Quipile", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano",
  "San Francisco", "San Juan de Rioseco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca",
  "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa",
  "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque",
  "Ubaté", "Une", "Útica", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá",
  "Yacopí", "Zipacón", "Zipaquirá",
  // Antioquia
  "Medellín", "Bello", "Itagüí", "Envigado", "Apartadó", "Turbo", "Rionegro", "Caucasia", "Chigorodó",
  "Necoclí", "Carepa", "Sabaneta", "La Estrella", "Copacabana", "Caldas", "Girardota", "Barbosa",
  // Valle del Cauca
  "Cali", "Buenaventura", "Palmira", "Tuluá", "Cartago", "Buga", "Jamundí", "Yumbo", "Zarzal",
  // Atlántico
  "Barranquilla", "Soledad", "Malambo", "Sabanalarga", "Baranoa", "Puerto Colombia",
  // Santander
  "Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja", "San Gil",
  // Bolívar
  "Cartagena", "Magangué", "Carmen de Bolívar", "Turbaco", "Arjona",
  // Nariño
  "Pasto", "Ipiales", "Tumaco", "Túquerres", "La Unión",
  // Norte de Santander
  "Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Los Patios",
  // Cauca
  "Popayán", "Santander de Quilichao", "Puerto Tejada", "Piendamó", "Patía",
  // Risaralda
  "Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia",
  // Magdalena
  "Santa Marta", "Ciénaga", "Fundación", "Aracataca", "Plato",
  // Caldas
  "Manizales", "La Dorada", "Chinchiná", "Villamaría", "Anserma",
  // Meta
  "Villavicencio", "Acacías", "Granadas", "Puerto López", "La Macarena",
  // Tolima
  "Ibagué", "Espinal", "Melgar", "Chaparral", "Mariquita",
  // Huila
  "Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre",
  // Cesar
  "Valledupar", "Aguachica", "Agustín Codazzi", "Bosconia", "La Jagua de Ibirico",
  // Boyacá
  "Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Paipa",
  // Córdoba
  "Montería", "Lorica", "Cereté", "Sahagún", "Montelíbano",
  // Quindío
  "Armenia", "Calarcá", "Montenegro", "Quimbaya", "La Tebaida",
  // Sucre
  "Sincelejo", "Corozal", "San Marcos", "San Onofre", "Tolú",
  // La Guajira
  "Riohacha", "Maicao", "Uribia", "Manaure", "Fonseca",
  // Caquetá
  "Florencia", "San Vicente del Caguán", "Puerto Rico", "El Doncello", "Belén de los Andaquíes",
  // Casanare
  "Yopal", "Aguazul", "Villanueva", "Tauramena", "Paz de Ariporo",
  // Arauca
  "Arauca", "Saravena", "Tame", "Fortul", "Arauquita",
  // Chocó
  "Quibdó", "Istmina", "Tadó", "Acandí", "Bahía Solano",
  // Putumayo
  "Mocoa", "Puerto Asís", "Orito", "Valle del Guamuez", "Villagarzón",
  // San Andrés y Providencia
  "San Andrés", "Providencia",
  // Guaviare
  "San José del Guaviare", "El Retorno", "Calamar", "Miraflores",
  // Amazonas
  "Leticia", "Puerto Nariño",
  // Vichada
  "Puerto Carreño", "La Primavera", "Santa Rosalía", "Cumaribo",
  // Vaupés
  "Mitú", "Carurú", "Taraira",
  // Guainía
  "Inírida", "Barranco Minas", "Mapiripana", "San Felipe"
];

const requiredFields = [
  'primerNombre', 'primerApellido', 'segundoApellido', 'estadoCivil', 
  'fechaNacimiento', 'genero', 'nivelEducativo', 'departamento', 'ciudad'
];

function DatosPersonales({ handleNext, formData, setFormData }: DatosPersonalesProps) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: UserInformationData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value
      }
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    requiredFields.forEach(field => {
      if (!formData.personalInfo[field as keyof PersonalInfo]) {
        newErrors[field] = 'Este campo es requerido';
        isValid = false;
      }
    });

    // Validate name fields (only letters allowed)
    const nameFields = ['primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido'];
    const nameRegex = /^[A-Za-zÀ-ÿ\s]*$/;
    nameFields.forEach(field => {
      const value = formData.personalInfo[field as keyof PersonalInfo];
      if (value && !nameRegex.test(value)) {
        newErrors[field] = 'Solo se permiten letras en este campo';
        isValid = false;
      }
    });

    // Validate birth date (must be 18 years or older)
    if (formData.personalInfo.fechaNacimiento) {
      const birthDate = new Date(formData.personalInfo.fechaNacimiento);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        newErrors.fechaNacimiento = 'Debes ser mayor de 18 años para registrarte.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Remove segundoNombre if it's empty before submitting
      const submissionData = { ...formData };
      if (!submissionData.personalInfo.segundoNombre) {
        delete submissionData.personalInfo.segundoNombre;
      }
      setFormData(submissionData);
      handleNext();
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-texto mb-6 text-center my-4">Información básica</h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Primer nombre */}
          <div>
            <label htmlFor="primerNombre" className="block text-base font-medium text-texto">
              Primer nombre
            </label>
            <input
              type="text"
              id="primerNombre"
              name="primerNombre"
              value={formData.personalInfo.primerNombre}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.primerNombre ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3`}
            />
            {errors.primerNombre && (
              <p className="mt-2 text-sm text-red-600">
                {errors.primerNombre}
              </p>
            )}
          </div>

          {/* Segundo nombre */}
          <div>
            <label htmlFor="segundoNombre" className="block text-base font-medium text-texto">
              Segundo nombre (Si aplica)
            </label>
            <input
              type="text"
              id="segundoNombre"
              name="segundoNombre"
              value={formData.personalInfo.segundoNombre}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
            />
            {errors.segundoNombre && (
              <p className="mt-2 text-sm text-red-600">
                {errors.segundoNombre}
              </p>
            )}
          </div>

          {/* Primer apellido */}
          <div>
            <label htmlFor="primerApellido" className="block text-base font-medium text-texto">
              Primer apellido
            </label>
            <input
              type="text"
              id="primerApellido"
              name="primerApellido"
              value={formData.personalInfo.primerApellido}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.primerApellido ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3`}
            />
            {errors.primerApellido && (
              <p className="mt-2 text-sm text-red-600">
                {errors.primerApellido}
              </p>
            )}
          </div>

          {/* Segundo apellido */}
          <div>
            <label htmlFor="segundoApellido" className="block text-base font-medium text-texto">
              Segundo apellido
            </label>
            <input
              type="text"
              id="segundoApellido"
              name="segundoApellido"
              value={formData.personalInfo.segundoApellido}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.segundoApellido ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3`}
            />
            {errors.segundoApellido && (
              <p className="mt-2 text-sm text-red-600">
                {errors.segundoApellido}
              </p>
            )}
          </div>

          {/* Estado civil */}
          <div>
            <label htmlFor="estadoCivil" className="block text-base font-medium text-texto">
              Estado civil
            </label>
            <select
              id="estadoCivil"
              name="estadoCivil"
              value={formData.personalInfo.estadoCivil}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.estadoCivil ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Seleccione una opción</option>
              <option value="Soltero(a)">Soltero(a)</option>
              <option value="Casado(a)">Casado(a)</option>
              <option value="Unión libre">Unión libre</option>
              <option value="Divorciado(a)">Divorciado(a)</option>
              <option value="Viudo(a)">Viudo(a)</option>
            </select>
            {errors.estadoCivil && (
              <p className="mt-2 text-sm text-red-600">
                {errors.estadoCivil}
              </p>
            )}
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label htmlFor="fechaNacimiento" className="block text-base font-medium text-texto">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.personalInfo.fechaNacimiento}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.fechaNacimiento ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3`}
            />
            {errors.fechaNacimiento && (
              <p className="mt-2 text-sm text-red-600">
                {errors.fechaNacimiento}
              </p>
            )}
          </div>

          {/* Género */}
          <div>
            <label htmlFor="genero" className="block text-base font-medium text-texto">
              Género
            </label>
            <select
              id="genero"
              name="genero"
              value={formData.personalInfo.genero}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.genero ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Seleccione una opción</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
              <option value="Prefiero no decir">Prefiero no decir</option>
            </select>
            {errors.genero && (
              <p className="mt-2 text-sm text-red-600">
                {errors.genero}
              </p>
            )}
          </div>

          {/* Nivel educativo */}
          <div>
            <label htmlFor="nivelEducativo" className="block text-base font-medium text-texto">
              Nivel educativo
            </label>
            <select
              id="nivelEducativo"
              name="nivelEducativo"
              value={formData.personalInfo.nivelEducativo}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.nivelEducativo ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Seleccione una opción</option>
              <option value="Primaria básica">Primaria básica</option>
              <option value="Bachiller">Bachiller</option>
              <option value="Técnico">Técnico</option>
              <option value="Tecnólogo">Tecnólogo</option>
              <option value="Profesional pregrado">Profesional pregrado</option>
              <option value="Profesional posgrado">Profesional posgrado</option>
            </select>
            {errors.nivelEducativo && (
              <p className="mt-2 text-sm text-red-600">
                {errors.nivelEducativo}
              </p>
            )}
          </div>

          {/* Departamento */}
          <div>
            <label htmlFor="departamento" className="block text-base font-medium text-texto">
              Departamento
            </label>
            <select
              id="departamento"
              name="departamento"
              value={formData.personalInfo.departamento}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.departamento ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Seleccione una opción</option>
              {departamentos.map((depto) => (
                <option key={depto} value={depto}>{depto}</option>
              ))}
            </select>
            {errors.departamento && (
              <p className="mt-2 text-sm text-red-600">
                {errors.departamento}
              </p>
            )}
          </div>

          {/* Ciudad (updated to dropdown) */}
          <div>
            <label htmlFor="ciudad" className="block text-base font-medium text-texto">
              Ciudad
            </label>
            <select
              id="ciudad"
              name="ciudad"
              value={formData.personalInfo.ciudad}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border ${errors.ciudad ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm sm:text-base h-14 px-3 focus:border-principal focus:ring-principal`}
            >
              <option value="">Seleccione una opción</option>
              {ciudades.map((ciudad) => (
                <option key={ciudad} value={ciudad}>{ciudad}</option>
              ))}
            </select>
            {errors.ciudad && (
              <p className="mt-2 text-sm text-red-600">
                {errors.ciudad}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <button
            type="submit"
            className="w-full ml-auto sm:w-auto inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export default DatosPersonales;