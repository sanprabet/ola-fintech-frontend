import React, { useState, useEffect } from 'react';
import { UserDB, BankAccountData, PersonalInfo, ProfessionalInfo } from 'types/types';
import useAuth from '../../hooks/useAuth';
import { useAuthHandlers } from '../../hooks/useAuthHandlers';

interface UserInfoCardProps {
  user: UserDB;
  onEditClick: () => void;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ user, onEditClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Información Personal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Nombre:</strong> {`${user.personalInfo?.primerNombre} ${user.personalInfo?.primerApellido}`}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Teléfono:</strong> {user.phoneNumber}</p>
        <p><strong>{user.documentType}:</strong> {user.documentNumber}</p>
        <p><strong>Fecha de Nacimiento:</strong> {user.personalInfo?.fechaNacimiento}</p>
        <p><strong>Ciudad:</strong> {`${user.personalInfo?.ciudad}, ${user.personalInfo?.departamento}`}</p>
        <p><strong>Estado Civil:</strong> {user.personalInfo?.estadoCivil}</p>
        <p><strong>Género:</strong> {user.personalInfo?.genero}</p>
        <p><strong>Nivel Educativo:</strong> {user.personalInfo?.nivelEducativo}</p>
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-6">Información Profesional</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Ocupación:</strong> {user.professionalInfo?.ocupacion}</p>
        <p><strong>Actividad Económica:</strong> {user.professionalInfo?.actividadEconomica}</p>
        <p><strong>Estrato:</strong> {user.professionalInfo?.estrato}</p>
        <p><strong>Tiene Cuenta Bancaria:</strong> {user.professionalInfo?.tieneCuentaBancaria}</p>
        <p><strong>Situación Crediticia:</strong> {user.professionalInfo?.situacionCrediticia}</p>
        <p><strong>Antigüedad Teléfono Móvil:</strong> {user.professionalInfo?.antiguedadTelefonoMovil}</p>
      </div>
      <div className="mt-4">
        <button 
          onClick={onEditClick}
          className="bg-principal text-white px-4 py-2 rounded-lg shadow hover:bg-principalToneDown"
        >
          Editar información
        </button>
      </div>
    </div>
  );
};

interface BankAccountCardProps {
  account: BankAccountData;
  onEditClick: () => void;
}

const BankAccountCard: React.FC<BankAccountCardProps> = ({ account, onEditClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center mb-4">
      <div>
        <div className="text-lg">
          <p><strong>Banco:</strong> {account.accountInstitution}</p>
          <p><strong>Tipo de cuenta:</strong> {account.accountType}</p>
          <p><strong>Número de cuenta:</strong> {account.accountNumber}</p>
        </div>
      </div>
      <button 
        onClick={onEditClick}
        className="bg-principal text-white px-4 py-2 rounded-lg shadow hover:bg-principalToneDown"
      >
        Editar cuenta bancaria
      </button>
    </div>
  );
};

interface BankAccountFormProps {
  account: BankAccountData | null;
  onSubmit: (account: BankAccountData) => void;
  onCancel: () => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({ account, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<BankAccountData>(account || {
    accountType: '',
    accountNumber: '',
    accountInstitution: '',
  });

  useEffect(() => {
    if (account) {
      setFormData(account);
    }
  }, [account]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">{account ? 'Editar cuenta bancaria' : 'Agregar cuenta bancaria'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-base font-medium">Banco o Billetera Digital</label>
          <select
            name="accountInstitution"
            value={formData.accountInstitution}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border shadow-sm h-12"
          >
            <option value="">Selecciona una opción</option>
            <option value="Banco de Bogotá">Banco de Bogotá</option>
            <option value="Bancolombia">Bancolombia</option>
            <option value="Nequi">Nequi</option>
            <option value="Daviplata">Daviplata</option>
            {/* Add more options here */}
          </select>
        </div>
        <div>
          <label className="block text-base font-medium">Tipo de cuenta</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border shadow-sm h-12"
          >
            <option value="">Selecciona una opción</option>
            <option value="ahorro">Ahorro</option>
            <option value="corriente">Corriente</option>
            <option value="billetera digital">Billetera digital</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium">No. Cuenta / Numero Celular</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border shadow-sm h-12"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow">
          Cancelar
        </button>
        <button type="submit" className="bg-principal text-white px-8 py-2 rounded-lg shadow hover:bg-principalToneDown">
          {account ? 'Actualizar' : 'Agregar'}
        </button>
      </div>
    </form>
  );
};


interface UserInfoEditFormProps {
  userInfo: {
    personalInfo: PersonalInfo | undefined;
    professionalInfo: ProfessionalInfo | undefined;
  };
  onSubmit: (personalInfo: PersonalInfo, professionalInfo: ProfessionalInfo) => void;
  onCancel: () => void;
}

interface ValidationErrors {
  [key: string]: string;
}

const UserInfoEditForm: React.FC<UserInfoEditFormProps> = ({ userInfo, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    personalInfo: userInfo.personalInfo || {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      estadoCivil: '',
      fechaNacimiento: '',
      genero: '',
      nivelEducativo: '',
      departamento: '',
      ciudad: '',
    },
    professionalInfo: userInfo.professionalInfo || {
      ocupacion: '',
      actividadEconomica: '',
      estrato: '',
      tieneCuentaBancaria: '',
      situacionCrediticia: '',
      antiguedadTelefonoMovil: '',
    },
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

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
    "Yacopí", "Zipacón", "Zipaquirá"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, infoType: 'personalInfo' | 'professionalInfo') => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [infoType]: {
        ...prev[infoType],
        [name]: value,
      },
    }));
    // Clear the error for this field when it's changed
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Validate personal info
    const requiredPersonalFields = ['primerNombre', 'primerApellido', 'segundoApellido', 'estadoCivil', 'fechaNacimiento', 'genero', 'nivelEducativo', 'departamento', 'ciudad'];
    requiredPersonalFields.forEach(field => {
      if (!formData.personalInfo[field as keyof PersonalInfo]) {
        newErrors[field] = 'Este campo es requerido';
        isValid = false;
      }
    });

    const nameRegex = /^[A-Za-zÀ-ÿ\s]*$/;
    ['primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido'].forEach(field => {
      const value = formData.personalInfo[field as keyof PersonalInfo];
      if (value && !nameRegex.test(value)) {
        newErrors[field] = 'Solo se permiten letras en este campo';
        isValid = false;
      }
    });

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

    // Validate professional info
    const requiredProfessionalFields = ['ocupacion', 'actividadEconomica', 'estrato', 'tieneCuentaBancaria', 'situacionCrediticia', 'antiguedadTelefonoMovil'];
    requiredProfessionalFields.forEach(field => {
      if (!formData.professionalInfo[field as keyof ProfessionalInfo]) {
        newErrors[field] = 'Este campo es requerido';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData.personalInfo, formData.professionalInfo);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Editar información personal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="estadoCivil" className="block text-base font-medium text-texto">Estado Civil</label>
          <select
            id="estadoCivil"
            name="estadoCivil"
            value={formData.personalInfo.estadoCivil}
            onChange={(e) => handleChange(e, 'personalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="Soltero(a)">Soltero(a)</option>
            <option value="Casado(a)">Casado(a)</option>
            <option value="Unión libre">Unión libre</option>
            <option value="Divorciado(a)">Divorciado(a)</option>
            <option value="Viudo(a)">Viudo(a)</option>
          </select>
          {errors.estadoCivil && <p className="mt-2 text-sm text-red-600">{errors.estadoCivil}</p>}
        </div>

        <div>
          <label htmlFor="genero" className="block text-base font-medium text-texto">Género</label>
          <select
            id="genero"
            name="genero"
            value={formData.personalInfo.genero}
            onChange={(e) => handleChange(e, 'personalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
            <option value="Prefiero no decir">Prefiero no decir</option>
          </select>
          {errors.genero && <p className="mt-2 text-sm text-red-600">{errors.genero}</p>}
        </div>

        <div>
          <label htmlFor="nivelEducativo" className="block text-base font-medium text-texto">Nivel Educativo</label>
          <select
            id="nivelEducativo"
            name="nivelEducativo"
            value={formData.personalInfo.nivelEducativo}
            onChange={(e) => handleChange(e, 'personalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="Primaria básica">Primaria básica</option>
            <option value="Bachiller">Bachiller</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Profesional pregrado">Profesional pregrado</option>
            <option value="Profesional posgrado">Profesional posgrado</option>
          </select>
          {errors.nivelEducativo && <p className="mt-2 text-sm text-red-600">{errors.nivelEducativo}</p>}
        </div>

        <div>
          <label htmlFor="departamento" className="block text-base font-medium text-texto">Departamento</label>
          <select
            id="departamento"
            name="departamento"
            value={formData.personalInfo.departamento}
            onChange={(e) => handleChange(e, 'personalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            {departamentos.map((depto) => (
              <option key={depto} value={depto}>{depto}</option>
            ))}
          </select>
          {errors.departamento && <p className="mt-2 text-sm text-red-600">{errors.departamento}</p>}
        </div>

        <div>
          <label htmlFor="ciudad" className="block text-base font-medium text-texto">Ciudad</label>
          <select
            id="ciudad"
            name="ciudad"
            value={formData.personalInfo.ciudad}
            onChange={(e) => handleChange(e, 'personalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            {ciudades.map((ciudad) => (
              <option key={ciudad} value={ciudad}>{ciudad}</option>
            ))}
          </select>
          {errors.ciudad && <p className="mt-2 text-sm text-red-600">{errors.ciudad}</p>}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Editar información profesional</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ocupacion" className="block text-base font-medium text-texto">Ocupación</label>
          <select
            id="ocupacion"
            name="ocupacion"
            value={formData.professionalInfo.ocupacion}
            onChange={(e) => handleChange(e, 'professionalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="Empleado/a">Empleado/a</option>
            <option value="Independiente">Independiente</option>
            <option value="Desempleado/a">Desempleado/a</option>
            <option value="Pensionado">Pensionado</option>
            <option value="Ama de casa">Ama de casa</option>
          </select>
          {errors.ocupacion && <p className="mt-2 text-sm text-red-600">{errors.ocupacion}</p>}
        </div>
        <div>
          <label htmlFor="actividadEconomica" className="block text-base font-medium text-texto">Actividad Económica</label>
          <select
            id="actividadEconomica"
            name="actividadEconomica"
            value={formData.professionalInfo.actividadEconomica}
            onChange={(e) => handleChange(e, 'professionalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
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
          {errors.actividadEconomica && <p className="mt-2 text-sm text-red-600">{errors.actividadEconomica}</p>}
        </div>

        <div>
          <label htmlFor="estrato" className="block text-base font-medium text-texto">Estrato</label>
          <select
            id="estrato"
            name="estrato"
            value={formData.professionalInfo.estrato}
            onChange={(e) => handleChange(e, 'professionalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          {errors.estrato && <p className="mt-2 text-sm text-red-600">{errors.estrato}</p>}
        </div>

        <div>
          <label htmlFor="tieneCuentaBancaria" className="block text-base font-medium text-texto">¿Tienes una cuenta bancaria a tu nombre?</label>
          <select
            id="tieneCuentaBancaria"
            name="tieneCuentaBancaria"
            value={formData.professionalInfo.tieneCuentaBancaria}
            onChange={(e) => handleChange(e, 'professionalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="Sí">Sí</option>
            <option value="No">No</option>
            <option value="Nequi">No, tengo nequi o daviplata</option>
          </select>
          {errors.tieneCuentaBancaria && <p className="mt-2 text-sm text-red-600">{errors.tieneCuentaBancaria}</p>}
        </div>

        <div>
          <label htmlFor="situacionCrediticia" className="block text-base font-medium text-texto">Situación Crediticia</label>
          <select
            id="situacionCrediticia"
            name="situacionCrediticia"
            value={formData.professionalInfo.situacionCrediticia}
            onChange={(e) => handleChange(e, 'professionalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="Buena">Buena</option>
            <option value="Regular">Regular</option>
            <option value="Mala">Mala</option>
            <option value="No tengo historial crediticio">No tengo historial crediticio</option>
          </select>
          {errors.situacionCrediticia && <p className="mt-2 text-sm text-red-600">{errors.situacionCrediticia}</p>}
        </div>

        <div>
          <label htmlFor="antiguedadTelefonoMovil" className="block text-base font-medium text-texto">Antigüedad del teléfono móvil</label>
          <select
            id="antiguedadTelefonoMovil"
            name="antiguedadTelefonoMovil"
            value={formData.professionalInfo.antiguedadTelefonoMovil}
            onChange={(e) => handleChange(e, 'professionalInfo')}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
          >
            <option value="Menos de 6 meses">Menos de 6 meses</option>
            <option value="Entre 6 meses y 1 año">Entre 6 meses y 1 año</option>
            <option value="Entre 1 y 2 años">Entre 1 y 2 años</option>
            <option value="Más de 2 años">Más de 2 años</option>
          </select>
          {errors.antiguedadTelefonoMovil && <p className="mt-2 text-sm text-red-600">{errors.antiguedadTelefonoMovil}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button 
          type="button" 
          onClick={onCancel} 
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition-colors duration-200"
        >
          Cancelar
        </button>
        <button 
          type="submit" 
          className="bg-principal text-white px-8 py-2 rounded-lg shadow hover:bg-principalToneDown transition-colors duration-200"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};


const UserAccount: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingBank, setIsEditingBank] = useState(false);
  const { dbUser, refreshDbUser } = useAuth();
  const { handleUpdateUserInformation, handleUpdateBankInformation } = useAuthHandlers();

  useEffect(() => {
    if (dbUser) {
      setIsEditing(false);
      setIsEditingBank(false);
    }
  }, [dbUser]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBankEditClick = () => {
    setIsEditingBank(true);
  };

  const handleUserInfoUpdate = async (personalInfo: PersonalInfo, professionalInfo: ProfessionalInfo) => {
    try {
      await handleUpdateUserInformation(personalInfo, professionalInfo);
      setIsEditing(false);
      await refreshDbUser();
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  const handleBankAccountUpdate = async (newAccountInfo: BankAccountData) => {
    try {
      await handleUpdateBankInformation(newAccountInfo);
      setIsEditingBank(false);
      await refreshDbUser();
    } catch (error) {
      console.error('Error updating bank account information:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen flex flex-col">
      <h1 className="text-5xl mb-5">Tu cuenta</h1>
      {dbUser && !isEditing && <UserInfoCard user={dbUser} onEditClick={handleEditClick} />}
      {dbUser && isEditing && (
        <UserInfoEditForm
          userInfo={{ personalInfo: dbUser.personalInfo, professionalInfo: dbUser.professionalInfo }}
          onSubmit={handleUserInfoUpdate}
          onCancel={() => setIsEditing(false)}
        />
      )}
      {dbUser && dbUser.accountInformation && !isEditingBank && (
        <BankAccountCard account={dbUser.accountInformation} onEditClick={handleBankEditClick} />
      )}
      {(!dbUser?.accountInformation || isEditingBank) && (
        <BankAccountForm
          account={dbUser?.accountInformation || null}
          onSubmit={handleBankAccountUpdate}
          onCancel={() => setIsEditingBank(false)}
        />
      )}
    </div>
  );
};

export default UserAccount;
