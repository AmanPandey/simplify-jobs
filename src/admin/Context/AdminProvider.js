import React, { useCallback, useEffect, useState, useMemo } from "react";
import AdminContext from "./AdminContext";

import { getEmployer, getEmployersByUser } from "../Utils/employersLogic";

const AdminProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [editJob, setEditJob] = useState(false);
  // const [draft, setDraft] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 992);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [notif, setNotif] = useState({ message: null, type: "" });
  const [createdEmployersByUser, setCreatedEmployersByusers] = useState(null);
  const [selectEmployerId, setSelectEmployerId] = useState("");
  const [company, setCompany] = useState({ logo: "", name: "" });
  const [refreshEmployers, setRefreshEmployers] = useState(false);
  const [user, setUser] = useState(null);

  const [isValidImage, setIsValidImage] = useState(true);

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

  // get employers data by user

  useEffect(() => {
    if (!loggedInUser?.id) {
      setNotif({
        id: Date.now(),
        message: "Invalid User ID",
        type: "error",
      });
      return;
    }
    if (!token) {
      setNotif({
        id: Date.now(),
        message: "Your session has expired. Please log in again.",
        type: "error",
      });

      return;
    }

    const fetchEmployers = async () => {
      try {
        const res = await getEmployersByUser(loggedInUser.id, token);

        if (!res.success) {
          return setNotif({
            id: Date.now(),
            message: res.message,
            type: "error",
          });
        }

        setCreatedEmployersByusers(res.employers);
      } catch (error) {
        console.log(error.message);
        setNotif({
          id: Date.now(),
          message: error.message || "Something went wrong.",
          type: "error",
        });
      }
    };

    fetchEmployers();
  }, [loggedInUser?.id, token, refreshEmployers]);

  // get employer by id

  useEffect(() => {
    if (
      !selectEmployerId ||
      selectEmployerId === "" ||
      selectEmployerId === "undefined"
    ) {
      return;
    }

    if (!token) {
      setNotif({
        id: Date.now(),
        message: "Your session has expired. Please log in again.",
        type: "error",
      });
      return;
    }

    const fetchEmployer = async () => {
      try {
        const res = await getEmployer(selectEmployerId, token);

        if (!res.success) {
          setNotif({
            id: Date.now(),
            message: res.message,
            type: "error",
          });
          return;
        }

        setCompany((prev) => ({
          ...prev,
          logo: res.employer.company_logo,
          name: res.employer.company_name,
        }));
      } catch (error) {
        console.log(error.message);
        setNotif({
          id: Date.now(),
          message: error.message || "Something went wrong.",
          type: "error",
        });
      }
    };

    fetchEmployer();
  }, [selectEmployerId]);

  // ✅ Memoize context value to prevent infinite re-renders
  const value = useMemo(
    () => ({
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
      loggedInUser,
      setLoggedInUser,
      createdEmployersByUser,
      setCreatedEmployersByusers,
      selectEmployerId,
      setSelectEmployerId,
      company,
      setCompany,
      isValidImage,
      setIsValidImage,
      setRefreshEmployers,
      user,
      setUser,
    }),
    [
      showSidebar,
      isSignUpMode,
      formData,
      errors,
      token,
      notif,
      login,
      logout,
      loggedInUser,
      createdEmployersByUser,
      selectEmployerId,
      company,
      isValidImage,
    ]
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
