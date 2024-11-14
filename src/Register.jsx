import React from "react";

function RegisterCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Register your account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
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
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">
              Accept{" "}
              <span className="text-gray-800 font-semibold">
                Terms & Conditions
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterCard;
