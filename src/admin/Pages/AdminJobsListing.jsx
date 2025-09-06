import React, { useContext } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import JobTable from "./JobTable";
import { useNavigate } from "react-router-dom";
import AdminContext from "../Context/AdminContext";
import { jobs } from "../Data/JobsData";
import { baseColumns } from "../Data/HeaderData";

const AdminJobsListing = () => {
  const { setEditJob, draft } = useContext(AdminContext);

  const navigate = useNavigate();
  function handleChange() {}
  return (
    <>
      <div className="rounded shadow px-3 pt-3 pb-5 bg-white ">
        {/* Header row with title and Add button */}

        {/* Search row aligned right */}
        <div className="row mb-4 d-flex justify-content-between">
          <div className="col-md-6  d-flex ">
            <h3 className="mb-0 fw-bold">Jobs</h3>
          </div>
          <div className="col-md-6  text-lg-end  mt-2 mt-lg-0 d-flex justify-content-end">
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
            <JobTable
              setEditJob={setEditJob}
              draft={draft}
              data={jobs}
              columns={baseColumns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminJobsListing;
