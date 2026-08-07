import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) return <div className="page-shell py-14">Loading your account…</div>;
  return isAuthenticated ? children : <Navigate to="/login" replace state={{ from: location }} />;
};

export default ProtectedRoute;
