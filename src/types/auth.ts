import type { User } from "./user";

export interface Auth {
  access_token: string;
  user: User;
}