import { catchAsync } from "@/utils/catchAsync";
import axiosClient from "./axiosClient";
import { useAuthStore } from '@/stores/auth';
import type { User } from "@/types/user";
import type { Auth } from "@/types/auth";

const authStore = useAuthStore();

export const authApi = {
  login: async (data: { email: string; password: string }) =>
    catchAsync(async () => {
      const response: Auth = await axiosClient.post("/auth/login", data);

      if (response?.access_token) {
        localStorage.setItem("auth", JSON.stringify(response));
      }
      const user: User | null = response?.user ?? null;
      authStore.login(user);

      return response;
    }),

  logout: () => {
    localStorage.removeItem("auth");
    authStore.logout();
  },

  getProfile: () =>
    catchAsync(async () => {
      const response = await axiosClient.get<User>("/auth/profile")
      return response;
    }),
};
