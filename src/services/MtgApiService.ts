import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export class MtgApiService {

    static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axios.get<T>(url, config);
    return response.data;
  }

  
}