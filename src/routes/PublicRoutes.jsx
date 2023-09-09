import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PublicRoutes = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <Navigate to="/workspace" /> : <Outlet />;
};
