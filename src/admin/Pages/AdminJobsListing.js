import React, { useContext } from "react";
import Button from "../Components/Button";
import styles from "../assets/admin.module.css";

import { useNavigate } from "react-router-dom";
import AdminContext from "../Context/AdminContext";

const AdminJobsListing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container rounded shadow px-3 pt-3 pb-5 bg-white "
        style={{
          minHeight: "85vh",
        }}
      >
        {/* Header row with title and Add button */}

        {/* Search row aligned right */}
        <div className="row mb-4 d-flex justify-content-between">
          <div className="col-md-6  d-flex ">
            <h3 className="mb-0 fw-bold">Jobs</h3>
          </div>
          <div className="col-md-6  text-lg-end  mt-2 mt-lg-0 d-flex justify-content-end">
            <Button
              className={`${styles.global_btn} `}
              onClick={() => navigate("/admin/addjob")}
            >
              Add New Job
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive rounded shadow-sm">
            <table className="table table-striped align-middle mb-0">
              <thead className="table-light">
                {/* ===== Header Row ===== */}
                <tr>
                  <th scope="col">Position</th>
                  <th scope="col">Company</th>
                  <th scope="col">Job Type</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Location</th>
                  <th scope="col">Status</th>
                  <th scope="col">Applications</th>
                  <th scope="col">Actions</th>
                </tr>

                {/* ===== Filter Row ===== */}
                {/* <tr>
                  <th>
                    <select className="form-select form-select-sm">
                      <option value="">All</option>
                      <option>Frontend</option>
                      <option>Backend</option>
                    </select>
                  </th>
                  <th>
                    <select className="form-select form-select-sm">
                      <option value="">All</option>
                      <option>Google</option>
                      <option>Amazon</option>
                    </select>
                  </th>
                  <th>
                    <select className="form-select form-select-sm">
                      <option value="">All</option>
                      <option>Part Time</option>
                      <option>Full Time</option>
                    </select>
                  </th>
                  <th>
                    <select className="form-select form-select-sm">
                      <option value="">All</option>
                      <option>$10000+</option>
                      <option>$15000+</option>
                    </select>
                  </th>
                  <th>
                    <select className="form-select form-select-sm">
                      <option value="">All</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                      <option>On-Site</option>
                    </select>
                  </th>
                  <th>
                    <select className="form-select form-select-sm">
                      <option value="">All</option>
                      <option>Active</option>
                      <option>Closed</option>
                      <option>Draft</option>
                    </select>
                  </th>
                
                </tr> */}
              </thead>

              {/* ===== Table Body ===== */}
              {/* <tbody>
                {jobs && jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <tr key={index}>
                      <td>{job.title}</td>
                      <td>{job.company}</td>
                      <td>{job.type}</td>
                      <td>{job.salary}</td>
                      <td>{job.location}</td>
                      <td>{job.status}</td>
                      <td>{job.applicantsCount}</td>
                      <td>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            variant="light"
                            className="btn-sm border-0 bg-transparent shadow-none"
                          >
                            <FaEllipsisV />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <FaEdit className="me-2" /> Edit
                            </Dropdown.Item>

                            <Dropdown.Item>
                              <FaTrash className="me-2 text-danger m-0" />{" "}
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-3">
                      No jobs found
                    </td>
                  </tr>
                )}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminJobsListing;
