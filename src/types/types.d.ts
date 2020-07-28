declare module "types" {
  export interface ITopic {
    id: string;
    title: string;
  }

  export interface IUser {
    id: string;
    email: string;
    status: UserStatus;
    role: UserRole;
  }

  export type UserRole = "moderator" | "admin";
  export type UserStatus = "new" | "active" | "archived";
}
