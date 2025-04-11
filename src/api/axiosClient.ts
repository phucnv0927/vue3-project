import axios from "axios";
import router from "@/router";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("auth");

    const accessToken = JSON.parse(auth)?.access_token;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // Handle status 401 - Unauthorized
      if (status === 401) {
        localStorage.removeItem("token");
        router.push("/login");
      }

      // Handle status 400 - Bad Request
      if (status === 400) {
        return Promise.reject({
          message: data.message,
        });
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
