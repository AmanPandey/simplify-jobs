import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { validate } from "../Utils/Validate";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginValidationConfig = {
    email: [
      { required: true, message: "Email is required" },
      {
        pattern: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        message: "Invalid email format",
      },
    ],
    password: [
      { required: true, message: "Password is required" },
      { minLength: 6, message: "Password must be at least 6 characters" },
    ],
  };

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(formData, loginValidationConfig, setErrors);
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      navigate("/admin/dashboard");
      setFormData({
        email: "",
        password: "",
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
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card p-4 rounded shadow"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                errors={errors.email}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                errors={errors.password}
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>

            {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div> */}

            <Button type="submit" className="btn btn-primary w-100">
              Login
            </Button>
          </form>

          <div className="text-center mt-3">
            {/* <Link to="#">Forgot password?</Link> */}
            <br />
            <span>Don't have an account?</span>
            <Link to="/signup"> Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
