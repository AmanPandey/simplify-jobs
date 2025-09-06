import React, { useContext, useEffect, useState } from "react";
import Input from "./admin/Components/Input";
import { createEmployer } from "./admin/Utils/authService";
import { validate } from "./admin/Utils/Validate";
import AdminContext from "./admin/Context/AdminContext";

export const AddEmployer = () => {
  const { errors, setErrors, token } = useContext(AdminContext);
  // console.log(token);

  const [empFormData, setEmpFormData] = useState({
    name: "",
    email: "",
    company_size: "",
    status: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEmpFormData((prev) => ({ ...prev, [name]: value }));
  }

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
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(
      empFormData,
      {
        name: validationConfig.name,
        email: validationConfig.email,
      },
      setErrors
    );

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const res = await createEmployer(
        {
          name: empFormData.name,
          email: empFormData.email,
          company_size: empFormData.company_size,
          status: empFormData.status,
        },
        token
      );

      if (res.ok) {
        alert("user created succssfully");
        console.log(res);

        setEmpFormData({
          name: "",
          email: "",
          company_size: "",
          status: "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="rounded shadow px-3 pt-3 pb-5 bg-white">
      <div className="row mb-4 d-flex justify-content-between">
        <div className="col-md-6 d-flex">
          <h3 className="mb-0 fw-bold">Add Employer</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* Name */}
          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Name</label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required={true}
              value={empFormData.name}
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Email</label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required={true}
              value={empFormData.email}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          {/* Company Size */}
          <div className="col-md-6">
            <label className="form-label fw-semibold d-block">
              Company Size
            </label>
            <select
              className="form-select mb-4"
              name="company_size"
              onChange={handleChange}
              value={empFormData.company_size}
              required
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
          </div>

          {/* Status */}
          <div className="col-md-6">
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
            <div className="form-check form-check-inline">
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
              className="btn btn-primary px-4"
              style={{ fontWeight: "600" }}
            >
              Save Employer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
