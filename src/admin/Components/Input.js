// components/Input.jsx
import React from "react";

const Input = ({
  type = "text",
  id,
  name,
  placeholder = "",
  value,
  onChange,
  className = "",
  required = false,
  checked,
}) => {
  // Choose correct base class
  const baseClass =
    type === "radio" || type === "checkbox"
      ? "form-check-input"
      : "form-control";

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      // ✅ Only apply value for non-radio/checkbox
      {...(type === "radio" || type === "checkbox"
        ? { checked, value } // for radio/checkbox we allow value + checked
        : { value })}
      onChange={onChange}
      className={`${baseClass} ${className}`}
      required={required}
    />
  );
};

export default Input;
