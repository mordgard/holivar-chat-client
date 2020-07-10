declare module "types" {
  export type Topic = {
    title: string;
  };

  export type User = {
    id: string;
    email: string;
    status: UserStatus;
    role: UserRole;
  };

  export type UserRole = "moderator" | "admin";
  export type UserStatus = "new" | "active" | "archived";
}
