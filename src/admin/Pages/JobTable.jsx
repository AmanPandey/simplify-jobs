import { FaCheckCircle, FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import Button from "../Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
import AdminContext from "../Context/AdminContext";

const JobTable = () => {
  const { setEditJob } = useContext(AdminContext);
  const location = useLocation();
  const draft = location.pathname.includes("draft");
  console.log(draft);

  const navigate = useNavigate();
  return (
    <>
      <div className="responsive-table-wrapper">
        <table className="table table-striped table-bordered align-middle">
          <thead className="">
            <tr className="">
              <th>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ height: "100px" }}
                >
                  <strong className="mb-1">Job Position</strong>
                  <select className="form-select form-select-sm mt-auto">
                    <option value="">All</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                  </select>
                </div>
              </th>
              <th>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ height: "100px" }}
                >
                  <strong className="mb-1">Company</strong>
                  <select className="form-select form-select-sm mt-auto">
                    <option value="">All</option>
                    <option value="Frontend">Google</option>
                    <option value="Backend">Amazon</option>
                  </select>
                </div>
              </th>
              <th>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ height: "100px" }}
                >
                  <strong className="mb-1">Job Type</strong>
                  <select className="form-select form-select-sm mt-auto">
                    <option value="">All</option>
                    <option value="Frontend">Part Time</option>
                    <option value="Backend">Full Time</option>
                  </select>
                </div>
              </th>
              <th>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ height: "100px" }}
                >
                  <strong className="mb-1">Salary</strong>
                  <select className="form-select form-select-sm mt-auto">
                    <option value="">All</option>
                    <option value="Frontend">$10000+</option>
                    <option value="Backend">$15000+</option>
                  </select>
                </div>
              </th>
              <th>
                {draft ? (
                  <div
                    className="d-flex flex-column align-items-start"
                    style={{ height: "100px" }}
                  >
                    <strong className="mb-1">Location</strong>
                    <select className="form-select form-select-sm mt-auto">
                      <option value="">All</option>
                      <option value="Frontend">Remote</option>
                      <option value="Backend">Hybrid</option>
                      <option value="Backend">On-Site</option>
                    </select>
                  </div>
                ) : (
                  <div
                    className="d-flex flex-column align-items-start"
                    style={{ height: "100px" }}
                  >
                    <strong className="mb-1">Status</strong>
                    <select className="form-select form-select-sm mt-auto">
                      <option value="">All</option>
                      <option value="Frontend">Active</option>
                      <option value="Backend">Closed</option>
                    </select>
                  </div>
                )}
              </th>
              {draft && (
                <th style={{ verticalAlign: "top" }}>
                  {" "}
                  <strong>Create At</strong>
                </th>
              )}
              {draft && (
                <th style={{ verticalAlign: "top" }}>
                  {" "}
                  <strong>Last Update</strong>
                </th>
              )}
              {!draft && (
                <th style={{ verticalAlign: "top" }}>
                  {" "}
                  <strong>Application</strong>
                </th>
              )}
              <th style={{ verticalAlign: "top" }}>
                {" "}
                <strong>Action</strong>{" "}
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Sample Row */}
            <tr>
              <td>Frontend Developer</td>
              <td>TechCorp</td>
              <td>Full-Time</td>
              <td>$80,000</td>
              <td>Remote</td>
              {draft && <td>12:15:34</td>}
              {draft && <td>14:15:34</td>}
              {!draft && <td>2</td>}

              <td>
                <div className="d-flex gap-2">
                  <Button
                    className="btn btn-warning btn-sm mr-2"
                    title="Edit"
                    onClick={() => {
                      setEditJob(true);
                      navigate("/admin/edit");
                    }}
                  >
                    <FaEdit />
                  </Button>
                  <Button className="btn btn-danger btn-sm mr-2" title="Delete">
                    <FaTrash />
                  </Button>
                  {draft && (
                    <Button
                      className="btn btn-success btn-sm mr-2"
                      title="Publish"
                    >
                      <FaCheck />
                    </Button>
                  )}
                </div>
              </td>
            </tr>

            {/* Add more rows here dynamically if needed */}
            <tr>
              <td>Frontend Developer</td>
              <td>TechCorp</td>
              <td>Full-Time</td>
              <td>$80,000</td>
              <td>On-Site</td>
              {draft && <td>12:15:34</td>}
              {draft && <td>14:15:34</td>}
              {!draft && <td>2</td>}

              <td>
                <div className="d-flex gap-2">
                  <Button
                    className="btn btn-warning btn-sm mr-2"
                    title="Edit"
                    onClick={() => {
                      setEditJob(true);
                      navigate("/admin/addjob");
                    }}
                  >
                    <FaEdit />
                  </Button>
                  <Button className="btn btn-danger btn-sm mr-2" title="Delete">
                    <FaTrash />
                  </Button>
                  {draft && (
                    <Button
                      className="btn btn-success btn-sm mr-2"
                      title="Publish"
                    >
                      <FaCheck />
                    </Button>
                  )}
                </div>
              </td>
            </tr>

            {/* 3re */}
            <tr>
              <td>Frontend Developer</td>
              <td>TechCorp</td>
              <td>Full-Time</td>
              <td>$80,000</td>
              <td>Hybrid</td>
              {draft && <td>12:15:34</td>}
              {draft && <td>14:15:34</td>}
              {!draft && <td>2</td>}

              <td>
                <div className="d-flex gap-2">
                  <Button className="btn btn-warning btn-sm mr-2" title="Edit">
                    <FaEdit />
                  </Button>
                  <Button className="btn btn-danger btn-sm mr-2" title="Delete">
                    <FaTrash />
                  </Button>
                  {draft && (
                    <Button
                      className="btn btn-success btn-sm mr-2"
                      title="Publish"
                    >
                      <FaCheck />
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobTable;
