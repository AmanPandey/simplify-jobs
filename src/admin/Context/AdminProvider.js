import React, { useCallback, useEffect, useState, useMemo } from "react";
import AdminContext from "./AdminContext";

const AdminProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [editJob, setEditJob] = useState(false);
  const [draft, setDraft] = useState(false);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 992);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [notif, setNotif] = useState({ message: null, type: "" });
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  const login = useCallback((newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  // Keep localStorage synced when token changes
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  // Listen for token changes across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken !== token) {
        setToken(storedToken);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [token]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) setShowSidebar(false);
      else setShowSidebar(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Memoize context value to prevent infinite re-renders
  const value = useMemo(
    () => ({
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
      notif,
      setNotif,
    }),
    [
      editJob,
      draft,
      showSidebar,
      isSignUpMode,
      formData,
      errors,
      token,
      notif,
      login,
      logout,
    ]
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
