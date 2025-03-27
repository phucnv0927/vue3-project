import { catchAsync } from "@/utils/catchAsync";
import axiosClient from "./axiosClient";

export const authApi = {
  login: async (data: { email: string; password: string }) =>
    catchAsync(async () => {
      const response = await axiosClient.post("/auth/login", data);

      if (response?.access_token) {
        localStorage.setItem("auth", JSON.stringify(response));
      }

      return response;
    }),

  logout: () => axiosClient.post("/auth/logout"),

  getProfile: () => axiosClient.get("/auth/profile"),
};
