import { useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { ROUTE_CONSTANTS } from "../routes";

const Login = () => {
  const { isAuthenticated, login, toggleView, loginView } = useAuthentication();
  if (isAuthenticated) {
    return <Navigate to={ROUTE_CONSTANTS.HOME} />;
  }

  return (
    <div className='flex items-center justify-center h-full w-full'>
      {loginView ? (
        <LoginForm toggleView={toggleView} login={login} />
      ) : (
        <RegisterForm toggleView={toggleView} />
      )}
    </div>
  );
};

export default Login;
