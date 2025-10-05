import React from "react";
import { useUser } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;
