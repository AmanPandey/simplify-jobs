import React from "react";
import AdminContext from "./AdminContext";
import { useState } from "react";

const AdminProvider = ({ children }) => {
  const [editJob, setEditJob] = useState(false);
  const [draft, setDraft] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
