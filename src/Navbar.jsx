import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import AuthProvider, { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser();
  };
  return (
    <div className="navbar bg-base-100 mb-12">
      <div className="navbar-start">{user && user.email}</div>
      <div className="navbar-center hidden lg:flex gap-5">
        <NavLink to={"/"} className="text-lg text-gray-600 font-semibold">
          Home
        </NavLink>
        <NavLink to={"/details"} className="text-lg text-gray-600 font-semibold">
          Details
        </NavLink>
        <NavLink to={"/career"} className="text-lg text-gray-600 font-semibold">
          Career
        </NavLink>
      </div>
      <div className="navbar-end flex gap-5">
        {user ? (
          <div className="flex items-center gap-3">
            <FaUser className="w-7 h-7" />
            <button
              onClick={handleLogOut}
              className="bg-gray-700 text-white font-semibold text-xl px-6 py-1 mx-2"
            >
              SignOut
            </button>
          </div>
        ) : (
          <div>
            <Link
              to={"auth/register"}
              className="bg-gray-700 text-white font-semibold text-xl px-6 py-1 mx-2"
            >
              SignUp
            </Link>
            <Link
              to={"auth/login"}
              className="bg-gray-700 text-white font-semibold text-xl px-6 py-1 mx-2"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
