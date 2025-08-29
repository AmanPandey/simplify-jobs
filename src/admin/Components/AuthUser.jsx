import React, { useContext, useState } from "react";
import AdminContext from "../Context/AdminContext";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { validate } from "../Utils/Validate";
import { registerUser, loginUser } from "../Utils/authService";

const AuthUser = () => {
  const {
    isSignUpMode,
    setIsSignUpMode,
    errors,
    setErrors,
    formData,
    setFormData,
    setIsAuthentication,
    login,
  } = useContext(AdminContext);
  // console.log(isSignUpMode);

  const navigate = useNavigate();

  const validationConfig = {
    name: [
      { required: true, message: "Please enter your name" },
      { minLength: 3, message: "Name should be at least 3 characters" },
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
  };

  function onchange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(
      formData,
      {
        email: validationConfig.email,
        password: validationConfig.password,
      },
      setErrors
    );

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const res = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      // console.log(res);

      if (res.token) {
        // Save token instead of a boolean
        // localStorage.setItem("token", res.token);
        login(res.token);

        navigate("/admin/dashboard");

        // reset form
        setFormData({ email: "", password: "" });
        setErrors({}); // clear previous errors
      } else {
        setErrors((prev) => ({
          ...prev,
          general: res.error || "Login failed",
        }));
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Try again.");
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
              {errors && <p className="text-danger">{errors.general}</p>}
            </div>

            <input type="submit" value="Login" className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Welcome Back</h3>
            <p>
              Log in to your dashboard and continue managing jobs, reviewing
              candidates, and keeping your hiring process streamlined with
              SimplifyJob.
            </p>
            {/* <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => {
                setErrors({});
                setIsSignUpMode(true);
              }}
            >
              Sign up
            </button>  */}
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        {/* <div className="panel right-panel">
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
        </div> */}
      </div>
    </div>
  );
};

export default AuthUser;
