// src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  loggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
  loggedUser: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");

  const login = (username: string) => {
    setLoggedUser(username);
    setLoggedIn(true);
  };
  const logout = () => setLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{ loggedIn, login, logout, loggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
