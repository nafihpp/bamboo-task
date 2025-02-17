import axios, { AxiosInstance } from "axios";

/**  Create an Axios instance with a base URL from environment variables */
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      console.log("401 error");
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (request) => request,
  (error) => error
);
