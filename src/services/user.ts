import { BaseApi } from './api';
import { UserDB, UserDataRequest, UserInformationRequest, CreditData, BankAccountRequest, UserAllData } from '../types/types';

class UserApiV1 extends BaseApi {
  constructor() {
    super('http://127.0.0.1:8000/v1/user');
  }

  async checkCredentials(data: UserDataRequest) {
    try {
      const { documentNumber, phoneNumber, email } = data;
      const response = await this.get<null>('/checkCredentials/' + documentNumber + '/' + phoneNumber + '/' + email);
      return response;
    } catch (error) {
      console.error('Error verifying registration data:', error);
      throw error;
    }
  }

  async register(data: UserDataRequest) {
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
      const response = await this.get<{ email: string }>('/getEmail/documentNumber/' + documentNumber);
      console.log(response);
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
      const response = await this.post<null>('/sendOtp/uid/' + uid);
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

  async updateUserInformation(uid: string, data: UserInformationRequest) {
    try {
      const response = await this.put<UserDB>(`/updateUser?uid=${uid}`, data);
      return response;
    } catch (error) {
      console.error('Error adding user information:', error);
      throw error;
    }
  }

  async updateBankAccount(uid: string, data: BankAccountRequest) {
    try {
      const response = await this.put<null>(`/updateBankAccount?uid=${uid}`, data);
      return response;
    } catch (error) {
      console.error('Error updating bank account:', error);
      throw error;
    }
  }

  /**
   * Fetch users with admin privileges with pagination and filtering.
   * @param page The current page number
   * @param limit The number of users per page
   * @param searchTerm The search query for user filtering
   * @param showPending Filter users by pending credit status
   * @param showActive Filter users by active credit status
   * @returns A list of users and the total number of users
   */
  async getUsersAdmin(page: number, limit: number, searchTerm: string = '', showPending: boolean = false, showActive: boolean = false) {
    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', limit.toString());
      if (searchTerm) params.append('searchTerm', searchTerm);
      if (showPending) params.append('showPending', showPending.toString());
      if (showActive) params.append('showActive', showActive.toString());

      const response = await this.get<{ users: UserAllData[]; total: number }>(`/getUsersAdmin?${params.toString()}`);
      return response;
    } catch (error) {
      console.error('Error fetching admin users:', error);
      throw error;
    }
  }
}

export const UserApi = new UserApiV1();