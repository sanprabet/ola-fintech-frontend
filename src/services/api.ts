import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
}

export class BaseApi {
  protected api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('authToken');
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    });
  }

  protected async request<T>(method: 'get' | 'post' | 'put' | 'delete', url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.request<ApiResponse<T>>({
        method,
        url,
        data,
        ...config,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiResponse<T>>;
        console.error('API Error:', axiosError.response?.data || axiosError.message);
        throw axiosError.response?.data || axiosError;
      }
      console.error('Unexpected error:', error);
      throw error;
    }
  }

  protected get<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>('get', url, undefined, config);
  }

  protected post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    console.log(url, data, config)
    return this.request<T>('post', url, data, config);
  }

  protected put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request<T>('put', url, data, config);
  }

  protected delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>('delete', url, undefined, config);
  }
}