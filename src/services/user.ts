import { BaseApi } from './api';
import { UserDB, UserRegisterData, UserInformationData, CreditRequestData, BankAccountData } from '../types/types';

class UserApiV1 extends BaseApi {
  constructor() {
    super('http://127.0.0.1:8000/v1/user');
  }

  async checkCredentials(data: UserRegisterData) {
    try {
      const { documentNumber, phoneNumber, email } = data
      const response = await this.get<null>('/checkCredentials/'+ documentNumber + "/" + phoneNumber + "/" + email);
      return response;
    } catch (error) {
      console.error('Error verifying registration data:', error);
      throw error;
    }
  }

  async register(data: UserRegisterData) {
    try {
      const response = await this.post<UserDB>('/register', data);
      return response;
    } catch (error) {
      console.error('Error creating account:', error);
      throw error;
    }
  }

  async getEmailByDocument(documentNumber: string) {
    try {
      const response = await this.get<{"email": string}>('/getEmail/documentNumber/' + documentNumber);
      console.log(response)
      return response; 
    } catch (error) {
      console.error('Error getting email by document:', error);
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const response = await this.get<UserDB>('/getUser/email/' + email);
      return response; 
    } catch (error) { 
      console.error('Error getting user by email:', error);
      throw error;
    }
  }

  async getUserByUid(uid: string) {
    try {
      const response = await this.get<UserDB>('/getUser/uid/' + uid);
      return response; 
    } catch (error) { 
      console.error('Error getting user by UID:', error);
      throw error;
    }
  }

  async sendOtp(uid: string) {
    try {
      const response = await this.post<null>('/sendOtp/uid/' + uid );
      return response;
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw error;
    }
  }

  async verifyOtp(uid: string, code: string) {
    try {
      const response = await this.get<null>('/verifyOtp/uid/' + uid + '/code/' + code);
      return response; 
    } catch (error) { 
      console.error('Error verifying OTP:', error);
      throw error;
    }
  }

  async updateUserInformation(uid: string, data: UserInformationData) {
    try {
      const response = await this.put<UserDB>(`/updateUser?uid=${uid}`, data);
      return response; 
    } catch (error) { 
      console.error('Error adding user information:', error);
      throw error;
    }
  }
  
  async updateBankAccount(uid: string, data: BankAccountData) {
    try {
      const response = await this.put<null>(`/updateBankAccount?uid=${uid}`, data);
      return response; 
    } catch (error) {
      console.error('Error updating bank account:', error);
      throw error;
    }
  }

  async submitCreditRequest(uid: string, data: CreditRequestData) {
    try {
      const response = await this.post<null>(`/submitCreditRequest?uid=${uid}`, data);
      return response;
    } catch (error) {
      console.error('Error submitting credit request:', error);
      throw error;
    }
  }


}

export const UserApi = new UserApiV1();