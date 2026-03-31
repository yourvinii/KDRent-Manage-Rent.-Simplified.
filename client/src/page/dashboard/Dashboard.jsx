import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="container">
      <h1>dashboard</h1>
      <div className="row">
        <div className="col-4">
          <h1>side panel</h1>
          <NavLink to={"/dashboard/my-properties"}>My Properties</NavLink>
          <NavLink to={"/dashboard/add-property"}>Add Property</NavLink>
          <button onClick={handleLogout}>logout</button>
        </div>
        <div className="col-8">main container</div>
      </div>
    </div>
  );
}
