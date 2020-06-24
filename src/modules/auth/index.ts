import React from "react";

interface AuthContext {
  loggedIn: boolean;
  token: string | undefined;
  userId: string | undefined;
  email: string | undefined;
}

export const context: AuthContext = {
  loggedIn: false,
  token: undefined,
  userId: undefined,
  email: undefined
};

export const AuthContext = React.createContext(context);
