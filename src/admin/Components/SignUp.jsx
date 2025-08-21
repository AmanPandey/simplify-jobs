import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../Utils/Validate";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validationConfig = {
    name: [
      { required: true, message: "Please enter your name" },
      { minLength: 2, message: "Name should be at least 2 characters" },
    ],
    email: [
      { required: true, message: "Please enter your email" },
      {
        pattern: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        message: "Please enter a valid email address",
      },
    ],
    password: [
      { required: true, message: "Please enter your password" },
      { minLength: 6, message: "Password must be at least 6 characters" },
    ],
    confirmPassword: [
      { required: true, message: "Please confirm your password" },
      {
        custom: (val, formData) => val === formData.password,
        message: "Passwords do not match",
      },
    ],
  };

  //   function validate(formData) {
  //     const errorData = {};

  //     Object.entries(formData).forEach(([key, value]) => {
  //       const rules = validationConfig[key];
  //       if (!rules) return;

  //       rules.some((rule) => {
  //         if (rule.required && !value) {
  //           errorData[key] = rule.message;
  //           return true;
  //         }
  //         if (rule.minLength && value.length < rule.minLength) {
  //           errorData[key] = rule.message;
  //           return true;
  //         }
  //         if (rule.pattern && value && !rule.pattern.test(value)) {
  //           errorData[key] = rule.message;
  //           return true;
  //         }
  //         if (rule.custom && !rule.custom(value, formData)) {
  //           errorData[key] = rule.message;
  //           return true;
  //         }
  //         return false;
  //       });
  //     });

  //     setErrors(errorData);
  //     return errorData;
  //   }

  function onchange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  }
  function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(formData, validationConfig, setErrors);
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      navigate("/admin/dashboard");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }
  return (
    <>
      <style>
        {`
            
           .form-control:hover, .form-control:active, .form-control:focus, .form-select:focus{
              border: 1px solid rgba(33,37,41,0.75)
            }
            
            `}
      </style>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 min-vw-100">
        <div className="col-12 col-md-6 col-lg-4 bg-light p-4 rounded shadow">
          <h2 className="mb-4 text-center">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
                name="name"
                onChange={onchange}
                value={formData.name}
                error={errors.name}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                onChange={onchange}
                value={formData.email}
                error={errors.email}

                // required
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onchange}
                value={formData.password}
                error={errors.password}
                // required
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                onChange={onchange}
                value={formData.confirmPassword}
                error={errors.confirmPassword}
                // required
              />

              {errors.confirmPassword && (
                <p className="text-danger">{errors.confirmPassword}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
          <p className="mt-3 text-center">
            <span className="me-2">Already have an account?</span>
            <Link to="/login" className="text-decoration-none">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
