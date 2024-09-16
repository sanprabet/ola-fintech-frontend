// // LANDINGS
export interface TextLandingData {
  title: string;
  description?: string;
  sections: {
    title: string;
    content: string;
    list?: {
      name: string;
      description: string;
    }[];
  }[];
}


// // AUTH
// User
export interface RegisterData {
  documentType: string;
  documentNumber: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface LoginData {
  documentNumber: string;
  password: string;
}

export interface OTPCodeData {
  code: string
}


// User Recovery
export interface PasswordRequestData {
  documentNumber: string
}

export interface PasswordRecoveryData {
  code: string
}

export interface PasswordResetData{
  newPassword: string;
  confirmPassword: string
}

// Admin
export interface AdminLoginData {
  email: string;
  password: string;
}

// // USER APP
// Register Form
export interface AccountCreationData {
  personalInfo: PersonalInfo;
  professionalInfo: ProfessionalInfo;
}


export interface PersonalInfo { // All string values need to be != ""
  primerNombre: string; 
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido: string;
  estadoCivil: string;
  fechaNacimiento: string;
  genero: string;
  nivelEducativo: string;
  departamento: string;
  ciudad: string;
}

export interface ProfessionalInfo {
  ocupacion: string;
  actividadEconomica: string;
  estrato: string;
  tieneCuentaBancaria: string;
  situacionCrediticia: string;
  antiguedadTelefonoMovil: string;
}

// Credit Form
export interface CreditRequestData {
  montoSolicitado: number;
  interesCorriente: number;
  administracion: number;
  iva: number;
  totalPagar: number;
  fechaCuota: string;
  otpCode: string;
  otpTimestamp: number;
}

// Bank account
export interface BankAccountData {
  accountType: 'ahorro'|'corriente'|'billetera digital (Nequi)'| '',
  accountNumber: string,
  accountInstitution: string,
}

// // ADMIN APP

export interface UserAllData extends UserDB {
  creditHistory?: CreditDB[],
  messageHistory?: MessageDB[]
}

export interface UserDB {
  financialCheckUntil: string | null, // Valid 6 months after credit request approved or denied.

  documentType: string,
  documentNumber: string,

  email: string,
  phoneNumber: string,

  personalInfo: PersonalInfo,
  professionalInfo: ProfessionalInfo,
  accountInformation?: BankAccountData
}

export interface CreditDB{
  userId: string,
  status: 'pending'|'active'|'payed'|'denied',
  data: CreditRequestData
}

export interface MessageDB {
  userId: string,
  status: 'scheduled'|'sending'|'sent'|'error',
  message: string,
  error?: string,
}
