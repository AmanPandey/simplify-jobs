import React, { useCallback, useEffect } from "react";
import AdminContext from "./AdminContext";
import { useState } from "react";

const AdminProvider = ({ children }) => {
  const [editJob, setEditJob] = useState(false);
  const [draft, setDraft] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = useCallback((newToken) => {
    // localStorage.setItem("token", newToken);
    setToken(newToken);
  }, []);

  const logout = useCallback(() => {
    // localStorage.removeItem("token");
    setToken(null);
  }, []);

  // 🔹 keep localStorage synced when token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // 🔹 listen for manual localStorage changes (other tabs or devtools)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken !== token) {
        setToken(storedToken);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [token]);

  // console.log(errors);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const value = {
    editJob,
    setEditJob,
    draft,
    setDraft,
    showSidebar,
    setShowSidebar,
    isSignUpMode,
    setIsSignUpMode,
    formData,
    setFormData,
    errors,
    setErrors,
    token,
    login,
    logout,
  };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
