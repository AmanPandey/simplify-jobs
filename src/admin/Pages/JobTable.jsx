import { FaCheckCircle, FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import Button from "../Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
import AdminContext from "../Context/AdminContext";
import TableHeaderWithFilter from "../Components/TableHeaderWithFilter";
import JobRow from "../Components/JobRow";
import { getColumns } from "../Data/HeaderData";

const JobTable = () => {
  const { setEditJob } = useContext(AdminContext);
  const location = useLocation();
  const draft = location.pathname.includes("draft");
  const columns = getColumns(draft);
  const navigate = useNavigate();

  const jobs = draft
    ? [
        {
          id: 1,
          title: "Frontend Developer",
          company: "TechCorp",
          type: "Full-Time",
          salary: "$80,000",
          location: "Remote",
          createdAt: "12:15:34",
          updatedAt: "14:15:34",
        },
        {
          id: 2,
          title: "UI/UX Developer",
          company: "Puma",
          type: "Full-Time",
          salary: "$80,000",
          location: "Remote",
          createdAt: "12:15:34",
          updatedAt: "14:15:34",
        },
      ]
    : [
        {
          id: 1,
          title: "Frontend Developer",
          company: "TechCorp",
          type: "Full-Time",
          salary: "$80,000",
          status: "Active",
          applicantsCount: 2,
        },
        {
          id: 2,
          title: "Backend Developer",
          company: "Google",
          type: "Full-Time",
          salary: "$80,000",
          status: "Active",
          applicantsCount: 5,
        },
      ];

  return (
    <>
      <div className="responsive-table-wrapper">
        <table className="table table-striped table-bordered align-middle">
          <thead className="">
            <tr>
              {columns.map((col) => (
                <TableHeaderWithFilter
                  key={col.key}
                  label={col.label}
                  options={col.options}
                  style={{ verticalAlign: "top" }}
                />
              ))}
              <TableHeaderWithFilter
                label="Actions"
                style={{ verticalAlign: "top" }}
              />
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <JobRow
                key={job.id}
                job={job}
                columns={columns} // 👈 same columns used in <thead>
                draft={draft} // 👈 only needed for the Publish button
                onDelete={(id) => console.log("Delete job:", id)}
                onPublish={(id) => console.log("Publish job:", id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobTable;
