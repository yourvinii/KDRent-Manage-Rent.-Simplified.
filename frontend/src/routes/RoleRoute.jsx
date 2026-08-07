import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RoleRoute = ({ roles, children }) => {
  const { user } = useAuth();
  return roles.includes(user?.role) ? children : <Navigate to="/" replace />;
};

export default RoleRoute;
