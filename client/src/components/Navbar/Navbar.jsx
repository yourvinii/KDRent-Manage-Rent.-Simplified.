import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-5 flex justify-between items-center px-5">
      <div className="text-2xl font-bold">KDRent</div>
      <div className="flex gap-10 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/explore"}>Explore</Link>
        <Link to={"/listing"}>Listing</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
