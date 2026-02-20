import { Navigate } from "react-router-dom";

import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Checking authentication...</p>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
