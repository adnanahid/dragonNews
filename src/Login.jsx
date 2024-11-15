import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Login = () => {
  const { setUser, loginUser } = useContext(AuthContext);
  const [toHome, setToHome] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setToHome(true);
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        console.log("Error:", error.code, error.message);
      });
  };

  if (toHome) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-3">
        <h2 className="text-2xl font-semibold text-center mt-6 mb-10">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              required

            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
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
// import React, { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { AuthContext } from "./Provider/AuthProvider";

// const Login = () => {
//   const { setUser, loginUser } = useContext(AuthContext);
//   const [toHome, setToHome] = useState(false);
//   const [error, setError] = useState(null);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = new FormData(e.target);
//     const email = form.get("email");
//     const password = form.get("password");

//     loginUser(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         setUser(user);
//         setToHome(true);
//         console.log("Login successful:", user.email);
//       })
//       .catch((error) => {
//         setError(error.message);
//         console.log("Error:", error.code, error.message);
//       });
//   };

//   if (toHome) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-3">
//         <h2 className="text-2xl font-semibold text-center mt-6 mb-10">
//           Login to Your Account
//         </h2>
//         <form onSubmit={handleLogin} className="space-y-8">
//           <div>
//             <label className="block text-gray-700">Email address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             />
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//           <button
//             type="submit"
//             className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-center text-gray-700 mt-4">
//           Don’t have an account?{" "}
//           <Link
//             to={"/auth/register"}
//             className="text-red-500 font-semibold cursor-pointer"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
