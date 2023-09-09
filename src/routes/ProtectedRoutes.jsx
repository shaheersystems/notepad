import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
