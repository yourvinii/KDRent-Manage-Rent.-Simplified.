import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // wait until auth check finishes
  if (loading) {
    return <p>Loading...</p>;
  }

  // if not logged in -> redirect
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // if logged in -> show page
  return children;
}
