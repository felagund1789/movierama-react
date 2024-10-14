import axios, { AxiosRequestConfig } from "axios";

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
});

class ApiClient {
  async fetch<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get<T>(path, config).then((res) => res.data);
  }
}

export default new ApiClient();
