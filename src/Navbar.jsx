import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-12">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex gap-5">
        <NavLink to={"/"} className="text-lg text-gray-600 font-semibold">Home</NavLink>
        <NavLink to={"/about"} className="text-lg text-gray-600 font-semibold">About</NavLink>
        <NavLink to={"/career"} className="text-lg text-gray-600 font-semibold">Career</NavLink>
      </div>
      <div className="navbar-end flex gap-5">
        <FaUser className="w-7 h-7" />
        <Link to={"auth/login"} className="bg-gray-700 text-white font-semibold text-xl px-6 py-1">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
