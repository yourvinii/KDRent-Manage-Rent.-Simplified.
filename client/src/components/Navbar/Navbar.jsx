import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-black text-white py-5 flex justify-between items-center px-5">
      <div className="text-2xl font-bold">
        KDRent
      </div>

      <div className="flex gap-10 items-center">
        <Link to="/">Home</Link>

        <Link to="/explore">Explore</Link>

        <Link to="/listing">Listing</Link>

        {isAuthenticated ? (
          <>
            <span className="font-medium">
              {user?.name}
            </span>

            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;