import React, { useContext } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import JobTable from "./JobTable";
import { useNavigate } from "react-router-dom";
import AdminContext from "../Context/AdminContext";

const JobListing = () => {
  const { setEditJob, draft } = useContext(AdminContext);

  const navigate = useNavigate();
  function handleChange() {}
  return (
    <>
      <div className="rounded shadow px-3 pt-3 pb-5 ">
        {/* Header row with title and Add button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-0 fw-bold">Jobs</h3>
        </div>

        {/* Search row aligned right */}
        <div className="row mb-4 d-flex justify-content-between">
          <div className="col-lg-6  d-flex col-6">
            <Input
              type="search"
              id="search"
              name="search"
              onChange={handleChange}
              placeholder="Enter job title"
              className="form-control me-2"
            />
            <Button className="btn-search">Search</Button>
          </div>
          <div className="col-lg-6  text-lg-end  mt-2 mt-lg-0  ">
            <Button
              className="add-job"
              onClick={() => navigate("/admin/addjob")}
            >
              Add New Job
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <JobTable setEditJob={setEditJob} draft={draft} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
