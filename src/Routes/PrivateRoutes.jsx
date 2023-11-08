import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let { isLoggedIn } = useSelector((store) => store.userLogin);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoutes;
