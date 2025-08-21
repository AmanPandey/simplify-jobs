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
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`form-control ${className}`}
      required={required}
    />
  );
};

export default Input;
