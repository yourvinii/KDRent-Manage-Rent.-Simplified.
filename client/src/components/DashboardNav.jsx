import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function DashboardNav() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/dashboard/my-properties"}>My Properties</NavLink>
      <NavLink to={"/dashboard/add-property"}>Add Property</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
