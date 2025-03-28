import type { User } from "./user";

export interface Profile {
  user: User;
  avatarUrl: string;
  bio?: string;
}
