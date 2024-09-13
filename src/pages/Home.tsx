import { useState } from "react";
import Homepage from "../components/Homepage";
import Login from "../components/LoginForm";
import Modal from "../components/ui/Modal";
import { useAuthentication } from "../hooks/useAuthentication";

const Home = () => {
  const { isAuthenticated, login, toggleView, loginView } = useAuthentication();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Homepage />
      {/* <button onClick={() => setOpen(true)}>Click me</button> */}
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}>
        <Login login={login} toggleView={toggleView} />
      </Modal>
    </>
  );
};

export default Home;
