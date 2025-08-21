// src/components/Button.js
import React from "react";

const Button = ({ children, type = "button", className = "", onClick }) => {
  return (
    <button
      type={type}
      className={`btn btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
