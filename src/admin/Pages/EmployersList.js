import React, { useContext, useEffect, useState } from "react";
import { useFetcher, useNavigate } from "react-router-dom";
import AdminContext from "../Context/AdminContext";
import JobTable from "./JobTable";
import Button from "../Components/Button";
import { employerColumns } from "../Data/HeaderData";
import { EmployerData } from "../Data/EmployerData";
import { getEmployers } from "../Utils/authService";
import axios from "axios";

export const EmployersList = () => {
  const [empData, setEmpData] = useState(null);
  const { token } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="rounded shadow px-3 pt-3 pb-5 bg-white ">
        {/* Header row with title and Add button */}

        {/* Search row aligned right */}
        <div className="row mb-4 d-flex justify-content-between">
          <div className="col-md-6  d-flex ">
            <h3 className="mb-0 fw-bold">Employers</h3>
          </div>
          <div className="col-md-6  text-lg-end  mt-2 mt-lg-0 d-flex justify-content-end">
            <Button
              className="add-job"
              onClick={() => navigate("/admin/add-employer")}
            >
              Add Employer
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <JobTable data={EmployerData} columns={employerColumns} />
          </div>
        </div>
      </div>
    </>
  );
};
