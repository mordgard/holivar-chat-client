import React from "react";
import { UserRole } from "types";

interface AuthContext {
  loggedIn: boolean;
  token: string | undefined;
  userId: string | undefined;
  email: string | undefined;
  role: UserRole | undefined;
}

export const context: AuthContext = {
  loggedIn: false,
  token: undefined,
  userId: undefined,
  email: undefined,
  role: undefined
};

export const AuthContext = React.createContext(context);
