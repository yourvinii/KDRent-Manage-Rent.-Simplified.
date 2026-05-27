import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-black text-white px-6 py-4 flex items-center justify-between ">
      {/* LOGO */}
      <Link to="/" className="text-2xl font-bold">
        KDRent
      </Link>

      {/* Links  */}

      <div className=" flex gap-6 ">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
