import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // your auth hook

export default function ProtectedRoute({ children }) {
  const { user } = useAuth(); // returns null if not logged in
  const location = useLocation();

  if (!user) {
    // preserve where the user wanted to go
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
}
