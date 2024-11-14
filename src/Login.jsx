import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-3">
        <h2 className="text-2xl font-semibold text-center mt-6 mb-10">
          Login your account
        </h2>
        <form className="space-y-8">
          <div>
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">
          Don’t Have An Account?{" "}
          <Link
            to={"/auth/register"}
            className="text-red-500 font-semibold cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
