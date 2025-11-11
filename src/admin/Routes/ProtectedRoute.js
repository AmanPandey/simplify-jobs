import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../Utils/authService";
import AdminContext from "../Context/AdminContext";

const ProtectedRoute = ({ children }) => {
  const [valid, setValid] = useState(null);
  const [user, setUser] = useState(null);
  const { token, logout } = useContext(AdminContext);

  useEffect(() => {
    const checkToken = async () => {
      if (!token) {
        setValid(false);
        return;
      }
      try {
        const res = await verifyToken(token);

        if (res.success) {
          setValid(true);
          setUser({
            id: res.user.id,
            name: res.user.name,
            email: res.user.email,
          });
        } else {
          logout();
          setValid(false);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        logout();
        setValid(false);
      }
    };

    checkToken();
  }, [token, logout]);

  // Wait for verification to complete before rendering anything
  if (valid === null) return null;

  if (!valid) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
