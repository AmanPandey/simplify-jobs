import React, { useCallback, useEffect, useState } from "react";
import FrontendContext from "./FrontendContext";
import { getCurrentUser } from "../Hooks/getCurrentUser";

const FrontEndProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("Frontend_user_token") || null
  );
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("Frontend_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [errors, setErrors] = useState({});

  // signup
  const signup = useCallback((newUser, newToken) => {
    localStorage.setItem("Frontend_user", JSON.stringify(newUser));
    localStorage.setItem("Frontend_user_token", newToken);
    setUser(newUser);
    setToken(newToken);
  }, []);
  //login
  const login = useCallback((newUser, newToken) => {
    localStorage.setItem("Frontend_user", JSON.stringify(newUser));
    localStorage.setItem("Frontend_user_token", newToken);
    setUser(newUser);
    setToken(newToken);
  }, []);

  //sync local storage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "Frontend_user") {
        if (e.newValue) {
          console.log(e.newValue);

          setUser(JSON.parse(e.newValue));
        } else {
          setUser(null);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const value = {
    errors,
    setErrors,
    token,
    setToken,
    signup,
    login,
    user,
    setUser,
  };

  return (
    <div>
      <FrontendContext.Provider value={value}>
        {children}
      </FrontendContext.Provider>
    </div>
  );
};

export default FrontEndProvider;
