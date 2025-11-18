// components/Input.jsx
import React from "react";

const Input = React.forwardRef(
  (
    {
      type = "text",
      id,
      name,
      placeholder = "",
      value,
      onChange,
      className = "",
      required = false,
      checked,
    },
    ref
  ) => {
    const baseClass =
      type === "radio" || type === "checkbox"
        ? "form-check-input"
        : "form-control";

    return (
      <input
        ref={ref} // ✅ Now forwarded correctly
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...(type === "radio" || type === "checkbox"
          ? { checked, value }
          : { value })}
        onChange={onChange}
        className={`${baseClass} ${className}`}
        required={required}
      />
    );
  }
);

export default Input;
