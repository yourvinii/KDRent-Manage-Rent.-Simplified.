import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    // Future: Call logout API if required
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-black text-white py-5 flex justify-between items-center px-5">
      <Link to={"/"} className="text-2xl font-bold">
        KDRent
      </Link>

      <div className="flex gap-10 items-center">
        <Link to="/">Home</Link>

        <Link to="/listing">Listing</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        {isAuthenticated ? (
          <>
            {user?.role === "buyer" && (
              <>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/my-inquiries">My Inquiries</Link>
              </>
            )}

            {user?.role === "seller" && (
              <>
                <Link to="/seller/dashboard">Dashboard</Link>
                <Link to="/seller/my-properties">My Properties</Link>
                <Link to="/seller/add-property">Add Property</Link>
                <Link to="/seller/applications">Applications</Link>
              </>
            )}

            {user?.role === "admin" && (
              <>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/properties">Properties</Link>
                <Link to="/admin/inquiries">Inquiries</Link>
                <Link to="/admin/approvals">Approvals</Link>
              </>
            )}

            <Link to="/profile">{user?.name}</Link>

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
