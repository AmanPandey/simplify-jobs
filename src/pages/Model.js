// Model.js
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Model({ isOpen, onClose }) {
  const [modelFormStep, setModelFormStep] = useState(1);
  const [showModelPassword, setShowModelPassword] = useState(false);
  const [showModelConfirmPassword, setShowModelConfirmPassword] =
    useState(false);

  const [modelFormData, setModelFormData] = useState({
    email: "",
    otp: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const totalSteps = 4;

  const handleChange = (e) => {
    setModelFormData({ ...modelFormData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setModelFormStep((prev) => prev + 1);
  const handleBack = () => setModelFormStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modelFormData.password !== modelFormData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Final submitted data:", modelFormData);
    setModelFormData({
      email: "",
      otp: "",
      name: "",
      password: "",
      confirmPassword: "",
    });
    setModelFormStep(1);
    onClose(); // close after submit
  };

  const progress = (modelFormStep / totalSteps) * 100;

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" modal-box bg-white  rounded-2xl shadow-lg w-96 relative d-flex flex-row row">
        <div className=" mb-4 model-image col-md-6">
          <img src="model-image.png" alt="" className="img-fluid" />
        </div>
        <div className="w-100 col-md-6 model-close container relative">
          <button
            onClick={onClose}
            className="modal-close  text-gray-600 hover:text-black"
          >
            ✖
          </button>
          {/* Progress Bar */}

          <div className="mb-6">
            <div className="progress-container">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {/* Step {modelFormStep} of {totalSteps} */}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {modelFormStep === 1 && (
              <div>
                <label className="block mb-2 text-black">Enter Email</label>
                <input
                  type="email"
                  name="email"
                  value={modelFormData.email}
                  onChange={handleChange}
                  className="w-100 border p-2 rounded form-control"
                  placeholder=" Email"
                  required
                />
              </div>
            )}

            {modelFormStep === 2 && (
              <div>
                <label className="block mb-2">Enter OTP</label>
                <input
                  type="text"
                  name="otp"
                  value={modelFormData.otp}
                  onChange={handleChange}
                  className="w-full border p-2 rounded form-control"
                  required
                  placeholder="Enter OTP"
                />
              </div>
            )}

            {modelFormStep === 3 && (
              <div>
                <label className="block mb-2">Enter Name</label>
                <input
                  type="text"
                  name="name"
                  value={modelFormData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded form-control"
                  required
                  placeholder=" Name"
                />
              </div>
            )}

            {modelFormStep === 4 && (
              <div>
                {/* Password */}
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group rounded">
                    <input
                      type={showModelPassword ? "text" : "password"}
                      name="password"
                      value={modelFormData.password}
                      onChange={handleChange}
                      className="form-control"
                      required
                      minLength={6}
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text bg-white"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowModelPassword(!showModelPassword)}
                      >
                        {showModelPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="input-group rounded">
                    <input
                      type={showModelConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={modelFormData.confirmPassword}
                      onChange={handleChange}
                      className="form-control"
                      required
                      minLength={6}
                      placeholder="Confirm Password"
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text bg-white"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setShowModelConfirmPassword(!showModelConfirmPassword)
                        }
                      >
                        {showModelConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-4 ">
              {modelFormStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-1 ml-1  rounded model-btn"
                >
                  Back
                </button>
              )}

              {modelFormStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-1 ml-1  text-white rounded model-btn"
                  disabled={
                    (modelFormStep === 1 && !modelFormData.email) ||
                    (modelFormStep === 2 && !modelFormData.otp) ||
                    (modelFormStep === 3 && !modelFormData.name)
                  }
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-1 ml-1 text-white rounded model-btn"
                  disabled={
                    !modelFormData.password ||
                    !modelFormData.confirmPassword ||
                    modelFormData.password.length < 6
                  }
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
