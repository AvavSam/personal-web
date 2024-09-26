import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function ProtectedRoute({ children }) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
