import React, { useContext, useState } from "react";
import AdminContext from "../Context/AdminContext";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { validate } from "../Utils/Validate";

const AuthUser = () => {
  const {
    isSignUpMode,
    setIsSignUpMode,
    errors,
    setErrors,
    formData,
    setFormData,
  } = useContext(AdminContext);
  console.log(isSignUpMode);

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

  function onchange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dynamicValidateConfig = isSignUpMode
      ? validationConfig
      : {
          email: validationConfig.email,
          password: validationConfig.password,
        };
    const errors = validate(formData, dynamicValidateConfig, setErrors);
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      console.log("form Submitted");

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
    <div
      className={`auth-container ${isSignUpMode ? "sign-up-mode" : ""} ${
        Object.keys(errors).length > 0 ? "error" : ""
      } `}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-wrapper">
              <div className="input-field">
                <i className="fas fa-user"></i>

                <Input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={onchange}
                  value={formData.email}
                  error={errors.email}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="input-wrapper">
              <div className="input-field">
                <i className="fas fa-lock"></i>
                {/* <input type="password" placeholder="Password" /> */}
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={onchange}
                  placeholder="Password"
                  errors={errors.password}
                />
              </div>
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>

            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-wrapper">
              <div className="input-field">
                <i className="fas fa-user"></i>

                <Input
                  type="text"
                  id="name"
                  placeholder="Username"
                  name="name"
                  onChange={onchange}
                  value={formData.name}
                  error={errors.name}
                />
              </div>
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="input-wrapper">
              <div className="input-field">
                <i className="fas fa-envelope"></i>

                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={onchange}
                  value={formData.email}
                  error={errors.email}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="input-wrapper">
              <div className="input-field">
                <i className="fas fa-lock"></i>

                <Input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={onchange}
                  value={formData.password}
                  error={errors.password}
                  placeholder="Password"
                />
              </div>
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>

            <div className="input-wrapper">
              <div className="input-field">
                <i className="fas fa-lock"></i>

                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={onchange}
                  value={formData.confirmPassword}
                  error={errors.confirmPassword}
                  placeholder="Confirm Password"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-danger">{errors.confirmPassword}</p>
              )}
            </div>

            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Admin ?</h3>
            <p>
              Register now to access the SimplifyJob admin panel. Manage job
              postings, review applicants, and control your recruitment process
              efficiently.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => {
                setErrors({});
                setIsSignUpMode(true);
              }}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already an Admin ?</h3>
            <p>
              Log in to your dashboard and continue managing jobs, reviewing
              candidates, and keeping your hiring process streamlined with
              SimplifyJob.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => {
                setErrors({});
                setIsSignUpMode(false);
              }}
            >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthUser;
