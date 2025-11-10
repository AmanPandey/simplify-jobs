import React, { useCallback, useContext, useState } from "react";
import AdminContext from "../Context/AdminContext";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";
import { validate } from "../Utils/Validate";
import { loginUser } from "../Utils/authService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Notification from "../Components/Notification";

const AuthUser = React.memo(() => {
  const {
    isSignUpMode,
    setIsSignUpMode,
    errors,
    setErrors,
    formData,
    setFormData,
    setIsAuthentication,
    login,
    setNotif,
    notif,
  } = useContext(AdminContext);
  // console.log(isSignUpMode);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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

  const handleNotifClose = useCallback(() => {
    if (notif.message) {
      setNotif({ message: "", type: "", id: null });
    }
  }, [setNotif]);

  function onchange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevError) => ({ ...prevError, [name]: "" }));
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

      if (!res.success) {
        setErrors((prevError) => ({ ...prevError, general: res.message }));

        return;
      }
      setErrors({});

      //  On success
      login(res.token);

      navigate("/admin/dashboard");
      setFormData({ email: "", password: "" });
    } catch (err) {
      const errorMsg = err.message || "Something went wrong!";
      setErrors((prevError) => ({ ...prevError, general: errorMsg }));
    }
  }

  return (
    <div
      className={`auth-container ${
        Object.keys(errors).length > 0 ? "error" : ""
      } `}
    >
      {notif.message && (
        <Notification
          key={notif.id}
          message={notif.message}
          type={notif.type}
          onClose={handleNotifClose}
        />
      )}

      <div className="forms-container">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <h2 className="title">Welcome !</h2>
          <div className="input-wrapper">
            <div className="input-field">
              <i className="fas fa-user"></i>

              <Input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange={onchange}
                value={formData.email}
                error={errors.email}
              />
            </div>
          </div>
          {errors.email && <p className="text-danger">{errors.email}</p>}

          <div className="input-wrapper">
            <div className="input-field" style={{ position: "relative" }}>
              <i className="fas fa-lock"></i>

              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={onchange}
                placeholder="Password"
                errors={errors.password}
              />

              {/* Eye Icon */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {errors.password && <p className="text-danger">{errors.password}</p>}
          <div>
            {errors.general && <p className="text-danger">{errors.general}</p>}
          </div>

          <input
            type="submit"
            value="Sign In"
            className="btn solid admin-login-btn"
          />
        </form>
      </div>
    </div>
  );
});

export default AuthUser;
