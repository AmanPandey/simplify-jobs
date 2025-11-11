import React, { useContext, useMemo, useRef, useState } from "react";
import Input from "../Components/Input";
import AdminContext from "../Context/AdminContext";
import JoditEditor from "jodit-react";

const AddNewJob = () => {
  const { editJob } = useContext(AdminContext);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // Allows editing
      placeholder: "Job Description...",
      height: 400, // Set the editor height (in pixels)
    }),
    []
  );
  return (
    <>
      <form className="container  rounded  shadow px-3 pt-3 pb-5">
        {/* Job Info Section */}
        <h4 className="mb-3 fw-bold">Edit Job </h4>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Job Title</label>
            <Input
              type="text"
              className="form-control"
              placeholder="Frontend Developer"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Company Name</label>
            <Input
              type="text"
              className="form-control"
              placeholder="Tech Corp"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Job Type</label>
            <select className="form-select">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Remote</option>
              <option>Contract</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Category/Department</label>
            <select className="form-select">
              <option>IT</option>
              <option>HR</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Job Location</label>
            <Input
              type="text"
              className="form-control"
              placeholder="Bangalore / Remote"
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Salary Range</label>
            <Input
              type="text"
              className="form-control"
              placeholder="₹4,00,000 - ₹6,00,000"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Experience Required</label>
            <select className="form-select">
              <option>0-1 years</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option>5+ years</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Number of Openings</label>
            <Input type="number" className="form-control" min="1" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Application Deadline</label>
            <Input type="date" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Posted Date</label>
            <Input type="date" className="form-control" />
          </div>
        </div>

        {/* Job Details Section */}
        <h4 className="mt-5 mb-3 fw-bold"> Job Details</h4>
        <div className="mb-3">
          <label className="form-label">Job Description</label>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
          {/* You can replace this textarea with <ReactQuill /> */}
        </div>

        <div className="mb-3">
          <label className="form-label">Required Skills</label>
          <Input
            type="text"
            className="form-control"
            placeholder="e.g., React, Node.js, Git"
          />
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Education Requirement</label>
            <Input
              type="text"
              className="form-control"
              placeholder="B.Tech, MCA"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Work Mode</label>
            <select className="form-select">
              <option>Onsite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Employment Type</label>
            <select className="form-select">
              <option>Permanent</option>
              <option>Contract</option>
              <option>Freelance</option>
            </select>
          </div>
        </div>

        {/* Contact & Application Section */}
        <h4 className="mt-5 mb-3 fw-bold"> Contact & Application</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Contact Email</label>
            <Input
              type="email"
              className="form-control"
              placeholder="hr@example.com"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Application Link (Optional)</label>
            <Input
              type="url"
              className="form-control"
              placeholder="https://apply.job.com"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Job Status</label>
            <select className="form-select">
              <option>Active</option>
              <option>Inactive</option>
              <option>Draft</option>
            </select>
          </div>
          {/* <div className="col-md-4 d-flex align-items-end">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="visibility"
              />
              <label className="form-check-label" htmlFor="visibility">
                Public Posting
              </label>
            </div>
          </div> */}
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          {editJob ? "Save Job" : " Post Job"}
        </button>
      </form>
    </>
  );
};

export default AddNewJob;
