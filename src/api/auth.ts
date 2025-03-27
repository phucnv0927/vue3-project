import { catchAsync } from "@/utils/catchAsync";
import axiosClient from "./axiosClient";
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

export const authApi = {
  login: async (data: { email: string; password: string }) =>
    catchAsync(async () => {
      const response = await axiosClient.post("/auth/login", data);

      if (response?.access_token) {
        localStorage.setItem("auth", JSON.stringify(response));
      }
      const user = response?.user;
      authStore.login(user);

      return response;
    }),

  logout: () => axiosClient.post("/auth/logout"),

  getProfile: () => axiosClient.get("/auth/profile"),
};
