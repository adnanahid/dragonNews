import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Loader";

const Private = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if(loader){
    return <Loader></Loader>
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/auth/login" replace></Navigate>;
  }
};

export default Private;
