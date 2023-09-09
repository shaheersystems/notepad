import { useState, createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    try {
      const token = localStorage.getItem("token");
      return token || null;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return null;
    }
  });

  const [loggedIn, setLoggedIn] = useState(() => {
    return !!token;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const value = {
    token,
    setToken,
    loggedIn,
    setLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.prototype = {
  children: PropTypes.node.isRequired,
};
