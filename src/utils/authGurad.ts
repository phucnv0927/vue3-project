import { jwtDecode } from "jwt-decode";
import moment from "moment";

export const isTokenExpired = (): boolean => {
  try {
    const auth = localStorage.getItem("auth");
    if (!auth) return true;

    const accessToken = JSON.parse(auth).access_token;

    const decoded: { exp?: number } = jwtDecode(accessToken);
    if (!decoded.exp) return true;
    return moment().unix() > decoded.exp;
  } catch (error) {
    return true;
  }
};
