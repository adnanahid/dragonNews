import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader";

const Private = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login" replace></Navigate>;
  }
};

export default Private;
