import { useAuthentication } from "../hooks/useAuthentication";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/AuthenticationForms/LoginForm";
import RegisterForm from "../components/AuthenticationForms/RegisterForm";
import { ROUTE_CONSTANTS } from "../routes";

interface AuthenticateProps {
  onClose?: () => void;
}

const Authenticate: React.FC<AuthenticateProps> = (props) => {
  const { isAuthenticated, login, toggleView, loginView } = useAuthentication();
  if (isAuthenticated) {
    return <Navigate to={ROUTE_CONSTANTS.HOME} />;
  }

  function handleLogin(val: string) {
    props?.onClose?.();
    login(val);
  }

  return (
    <div className='flex items-center justify-center h-full w-full'>
      {loginView ? (
        <LoginForm toggleView={toggleView} login={handleLogin} />
      ) : (
        <RegisterForm toggleView={toggleView} />
      )}
    </div>
  );
};

export default Authenticate;
