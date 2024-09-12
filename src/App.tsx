import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <div className='bg-black-900 h-screen w-full text-white'>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
};

export default App;
