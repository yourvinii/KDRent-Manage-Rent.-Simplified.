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
      <div className="row">
        <div className="col-4 border" style={{ backgroundColor: "red" }}>
          <h1>side panel</h1>
          <ul>
            <li>
              <NavLink to={"/my-properties"}>My Properties</NavLink>
            </li>
            <li>
              <NavLink to={"/add-property"}>Add Property</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>logout</button>
            </li>
          </ul>
        </div>
        <div className="col-8" style={{ backgroundColor: "green" }}>
          main container
          
        </div>
      </div>
    </div>
  );
}
