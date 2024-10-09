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

export interface AdminLoginData {
  email: string;
  password: string;
}



export interface PersonalInfo {
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
export interface UserInformationRequest {
  personalInfo: PersonalInfo;
  professionalInfo: ProfessionalInfo;
}

export interface BankAccountRequest {
  accountType: 'ahorro'|'corriente'|'billetera digital (Nequi)'| '';
  accountNumber: string;
  accountInstitution: string;
}



export interface UserRegister{
  documentType: string,
  documentNumber: string,
  email: string,
  phoneNumber: string,
}

export interface UserRegisterAuth extends UserRegister{
  password: string
}

export interface UserDataRequest extends UserRegister{
  uid?: string;
}

export interface UserDB extends UserDataRequest {
  _id: string;

  uid: string;
  admin?: boolean;
  
  personalInfo?: PersonalInfo;
  professionalInfo?: ProfessionalInfo;
  accountInformation?: BankAccountRequest;

  financialCheck?: string;
}



export interface MessageDB {
  _id: string;
  uid: string;
  status: 'pending' | 'sent' | 'error' | 'scheduled' | 'failed';
  scheduledTimeStamp?: string; // Only if status == "pending"

  error?: {
    code: string;    // Error code if something goes wrong
    message: string; // Detailed error message
  };

  sent?: {
    sid: string;           // Twilio Message SID
    dateCreated: string;    // When the message was created
    dateSent?: string;      // When the message was sent (may not be available immediately)
    to: string;             // Recipient's phone number
    from: string;           // Twilio phone number (WhatsApp)
    body: string;           // Message content
    price?: string;         // Cost of sending the message (if available)
    status: string;         // Message status (queued, sent, delivered, failed, etc.)
  };
}




export interface CreditData {
  montoSolicitado: number;
  interesCorriente: number;
  administracion: number;
  iva: number;
  totalPagar: number;
  fechaCuota: string;
}

export interface CreditRequestData extends CreditData {
  uid: string
  otpCode: string;
  otpTimeStamp: string;
}

export interface CreditDB extends CreditRequestData{
  _id: string;
  status: 'pending'|'rejected'|'active'|'paid'|'extended';

  montoAprobado?: string // This status only exist if status is 'rejected'
  extensionRequested?: boolean // This status only exist if status is 'active'

}





export interface UserAllData{
  userData: UserDB
  creditHistory: CreditDB[];
  messageHistory: MessageDB[];
}
