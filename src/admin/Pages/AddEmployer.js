import React, { useContext, useEffect, useState } from "react";
import Input from "../Components/Input";
import styles from "../assets/admin.module.css";

import { validate } from "../Utils/Validate";
import AdminContext from "../Context/AdminContext";
import Notification from "../Components/Notification";
import { addEmployer } from "../Utils/employersLogic";

import { useNavigate } from "react-router-dom";

const AddEmployer = () => {
  const { errors, setErrors, token, setNotif, notif } =
    useContext(AdminContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [empFormData, setEmpFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    company_size: "",
    industry: "",
    company_location: "",
    company_website: "",
    contact_number: "",
    description: "",
    status: "active",
  });

  // clear notification msg

  useEffect(() => {
    if (notif?.message) {
      setNotif({ id: null, message: "", type: "" });
    }
  }, []);

  // handle form input
  function handleChange(e) {
    const { name, value } = e.target;
    setEmpFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevError) => ({ ...prevError, [name]: "" }));
  }

  // validate input
  const validationConfig = {
    name: [
      { required: true, message: "Please enter your name." },
      { minLength: 3, message: "Name should be at least 3 characters." },
    ],
    email: [
      { required: true, message: "Please enter your email." },
      {
        pattern: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        message: "Please enter a valid email address",
      },
    ],
    company_name: [
      { required: true, message: "Please enter your company name" },
    ],
    company_size: [{ required: true, message: "Please select company size." }],
    industry: [{ required: true, message: "Please enter industry type." }],
    company_location: [
      { required: true, message: "Please enter your company location." },
    ],
  };

  // form submit
  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(
      empFormData,
      {
        name: validationConfig.name,
        email: validationConfig.email,
        company_name: validationConfig.company_name,
        company_size: validationConfig.company_size,
        industry: validationConfig.industry,
        company_location: validationConfig.company_location,
      },
      setErrors
    );

    if (Object.keys(errors).length > 0) {
      return;
    }
    try {
      setLoading(true);
      const res = await addEmployer(empFormData, token);
      if (!res.success) {
        setNotif({ id: Date.now(), message: res.message, type: "error" });
        return;
      }

      setNotif({ id: Date.now(), message: res.message, type: "success" });
      setEmpFormData({
        name: "",
        email: "",
        company_name: "",
        company_size: "",
        industry: "",
        company_location: "",
        company_website: "",
        contact_number: "",
        description: "",
        status: "active",
      });

      setTimeout(() => {
        navigate("/admin/employers");
      }, 4000);
    } catch (error) {
      console.log(error.message);
      const errorMsg = error.message;
      setNotif({
        id: Date.now(),
        message: errorMsg || "Something went wrong.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {notif.message && (
        <Notification
          key={notif.id}
          message={notif.message}
          type={notif.type}
        />
      )}
      <div className="container rounded shadow px-3 pt-3 pb-5 bg-white ">
        <div className="row mb-4 d-flex justify-content-between">
          <div className="col-md-6 d-flex">
            <h3 className="mb-0 fw-bold">Add Employer</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Name */}
            <div className="col-md-6 mb-md-4 mb-2 ">
              <label className="form-label fw-semibold">Name*</label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                // required={true}
                value={empFormData.name}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="col-md-6 mb-md-4 mb-2">
              <label className="form-label fw-semibold">Email*</label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                // required={true}
                value={empFormData.email}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            {/* Company Name */}
            <div className="col-md-6 mb-md-4 mb-2">
              <label className="form-label fw-semibold">Company Name*</label>
              <Input
                type="text"
                name="company_name"
                placeholder="Company Name"
                value={empFormData.company_name}
                onChange={handleChange}
                // required={true}
              />
              {errors.company_name && (
                <p className="text-danger">{errors.company_name}</p>
              )}
            </div>
            {/* Company Size */}
            <div className="col-md-6 mb-md-4 mb-2">
              <label className="form-label fw-semibold d-block">
                Company Size*
              </label>
              <select
                className="form-select  w-100"
                name="company_size"
                onChange={handleChange}
                value={empFormData.company_size}
                // required
                style={{
                  padding: "6px",
                  width: "200px",
                  border: "1px solid #ccc",
                  outline: "none",
                  borderRadius: "4px",
                }}
              >
                <option value="">Select Size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
              {errors.company_size && (
                <p className="text-danger">{errors.company_size}</p>
              )}
            </div>

            {/* Industry */}
            <div className="col-md-6 mb-md-4 mb-2">
              <label className="form-label fw-semibold">Industry*</label>
              <Input
                type="text"
                name="industry"
                placeholder="e.g. IT, Finance, Healthcare"
                value={empFormData.industry}
                onChange={handleChange}
                // required={true}
              />
              {errors.industry && (
                <p className="text-danger">{errors.industry}</p>
              )}
            </div>

            {/* Company Location */}
            <div className="col-md-6 mb-md-4 mb-2">
              <label className="form-label fw-semibold">
                Company Location*
              </label>
              <Input
                type="text"
                name="company_location"
                placeholder="City, Country"
                value={empFormData.company_location}
                onChange={handleChange}
                // required={true}
              />
              {errors.company_location && (
                <p className="text-danger">{errors.company_location}</p>
              )}
            </div>

            {/* Contact Number */}
            <div className="col-md-6 mb-md-4 mb-2">
              <label className="form-label fw-semibold">Contact Number</label>
              <Input
                type="text"
                name="contact_number"
                placeholder="+1 234 567 890"
                value={empFormData.contact_number}
                onChange={handleChange}
              />
            </div>

            {/* Company Website */}
            <div className="col-md-6 mb-md-4 mb-2">
              <label className="form-label fw-semibold">Company Website</label>
              <Input
                type="text"
                name="company_website"
                placeholder="https://example.com"
                value={empFormData.company_website}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className="col-12 mb-md-4 mb-2">
              <label className="form-label fw-semibold">
                Company Description
              </label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                placeholder="Brief company overview..."
                value={empFormData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Status */}
            <div className="col-md-6 ">
              <label className="form-label fw-semibold d-block">Status</label>
              <div className="form-check form-check-inline">
                <Input
                  type="radio"
                  name="status"
                  id="statusActive"
                  value="active"
                  onChange={handleChange}
                  required={true}
                  checked={empFormData.status === "active"}
                />
                <label className="form-check-label" htmlFor="statusActive">
                  Active
                </label>
              </div>
              <div className="form-check form-check-inline mb-4">
                <Input
                  type="radio"
                  name="status"
                  id="statusInactive"
                  value="inactive"
                  onChange={handleChange}
                  required={true}
                  checked={empFormData.status === "inactive"}
                />
                <label className="form-check-label" htmlFor="statusInactive">
                  Inactive
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="col-12 text-end">
              <button
                type="submit"
                className={`${styles.global_btn} btn px-4`}
                style={{
                  fontWeight: "600",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
                disabled={loading}
              >
                Save Employer
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployer;
