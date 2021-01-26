import * as React from "react";

enum actionTypes {
  login = "auth/login",
  logout = "auth/logout",
}

interface IAuthenticationContext {
  token?: string;
  userId?: string;
  loggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<IAuthenticationContext | null>(null);
AuthContext.displayName = "AuthContext";

interface IState {
  token?: string;
  userId?: string;
  loggedIn: boolean;
}

const initialState: IState = {
  loggedIn: false,
};

const authReducer = (state: IState, action: { type: string; payload?: any }): IState => {
  switch (action.type) {
    case actionTypes.login:
      return { ...state, loggedIn: true, token: action.payload };
    case actionTypes.logout:
      return { loggedIn: false };
    default:
      return state;
  }
};

interface IProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProviderProps> = props => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const login = (token: string) => dispatch({ type: actionTypes.login, payload: token });
  const logout = () => dispatch({ type: actionTypes.logout });

  const value = React.useMemo(() => ({ ...state, login, logout }), [state]);

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("`useAuth` must be within a `AuthProvider`");
  }

  return context;
};

export { AuthProvider, useAuth };
