import { Navigate } from 'react-router-dom';
import { getCurrentToken } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  //   const { token } = useAppSelector((state) => state.auth); //this is an way

  const token = useAppSelector(getCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
