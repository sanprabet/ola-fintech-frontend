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



export interface LoginData {
  documentNumber: string;
  password: string;
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
export interface UserInformationData {
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
}

// Bank account
export interface BankAccountData {
  accountType: 'ahorro'|'corriente'|'billetera digital (Nequi)'| '';
  accountNumber: string;
  accountInstitution: string;
}

// // ADMIN APP
export interface UserAllData extends UserDB {
  creditHistory?: CreditDB[];
  messageHistory?: MessageDB[]
}

// User
export interface UserRegisterForm {
  documentType: string,
  documentNumber: string,
  email: string,
  phoneNumber: string,
  password: string
}

export interface UserRegisterData{
  uid?: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phoneNumber: string;
}

export interface UserDB {
  _id: string;
  uid: string;
  
  documentType: string;
  documentNumber: string;
  
  email: string;
  phoneNumber: string;
  
  financialCheck?: string;
  admin?: boolean;
  
  personalInfo?: PersonalInfo;
  professionalInfo?: ProfessionalInfo;
  accountInformation?: BankAccountData
}

export interface CreditDB{
  userId: string;
  status: 'pending'|'active'|'payed'|'denied';
  otpCode: string;
  otpTimeStamp: string;
  data: CreditRequestData
}

export interface MessageDB {
  userId: string;
  status: 'scheduled'|'sending'|'sent'|'error';
  message: string;
  error?: string;
}
