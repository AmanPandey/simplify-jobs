import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../Utils/authService";
import AdminContext from "../Context/AdminContext";

const ProtectedRoute = ({ children }) => {
  const [valid, setValid] = useState(null); // null = not verified yet
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
        if (res.ok) {
          setValid(true);
          setUser({
            profile_id: res.profile_id,
            email: res.email,
            full_name: res.full_name,
            role: res.role,
          });
        } else {
          logout();
          setValid(false);
        }
      } catch (err) {
        console.error("Token verification failed", err);
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
