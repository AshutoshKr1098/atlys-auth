import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const useAuthentication = () => {
  const [loginView, setLoginView] = useState(true);
  const { loggedIn, login, logout } = useAuth();

  const toggleView = () => {
    setLoginView((prev) => !prev);
  };

  return {
    loggedIn,
    login,
    logout,
    isAuthenticated: loggedIn,
    toggleView,
    loginView,
  };
};
