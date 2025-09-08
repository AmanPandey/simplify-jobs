import { FaCheckCircle, FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
import AdminContext from "../Context/AdminContext";
import TableHeaderWithFilter from "./TableHeaderWithFilter";
import TableRow from "./TableRow";
import { baseColumns } from "../Data/TableHeader";
import { jobs } from "../Data/JobsData";

const JobTable = ({ data = [], columns = [], onDelete, onPublish }) => {
  // console.log(data);

  return (
    <div className="responsive-table-wrapper">
      <table className="table table-striped table-bordered align-middle">
        <thead>
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
          {data.map((job) => (
            <TableRow
              key={job.id}
              row={job}
              columns={columns} // ✅ use the correct prop
              onDelete={(id) => console.log("Delete job:", id)}
              onEdit={(id, job) => console.log("Edit job:", id, job)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
