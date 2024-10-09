import { BaseApi } from './api';
import { CreditData, CreditRequestData, CreditDB } from '../types/types';

class CreditApiV1 extends BaseApi {
  constructor() {
    super('http://127.0.0.1:8000/v1/credit');
  }

  async sendCreditForm(data: CreditData, code: string, uid: string) {
    try {
      const requestData: CreditRequestData = {
        ...data,
        otpCode: code,
        otpTimeStamp: new Date().toISOString(),
        uid,
      };
      const response = await this.post<null>('/requestCredit', requestData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getActiveCredit(uid: string) {
    try {
      const response = await this.get<CreditDB | null>('/' + uid);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async requestCreditExtension(uid: string){
    try {
      const response = await this.put<null>('/creditExtension/' + uid);
      return response;
    } catch (error) {
      throw error;
    }
  }


}

export const CreditApi = new CreditApiV1();