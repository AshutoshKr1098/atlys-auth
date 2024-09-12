import { useAuth } from "../contexts/AuthContext";

export const useAuthentication = () => {
  const { loggedIn, login, logout } = useAuth();

  return {
    loggedIn,
    login,
    logout,
    isAuthenticated: loggedIn,
  };
};
