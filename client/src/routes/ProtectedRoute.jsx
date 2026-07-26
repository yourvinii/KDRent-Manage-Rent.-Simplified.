import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Auth check hone tak kuch render mat karo
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Login nahi hai
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Login hai
  return children;
};

export default ProtectedRoute;