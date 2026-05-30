import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="text-2xl font-bold">
        KDRent
      </Link>

      {/* Mobile Menu Icon */}
      <HiMenu size={28} className="md:hidden cursor-pointer" />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/listings">Listings</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
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
