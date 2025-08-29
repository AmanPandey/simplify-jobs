import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import { getColumns } from "../Data/HeaderData";

const JobRow = ({ job, onDelete, onPublish }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const draft = location.pathname.includes("draft");
  const columns = getColumns(draft);

  return (
    <tr>
      {columns.map((col) => (
        <td key={col.key}>{job[col.key]}</td>
      ))}

      {/* Actions */}
      <td>
        <div className="d-flex gap-2">
          <Button
            className="btn btn-warning btn-sm mr-2"
            title="Edit"
            onClick={() => navigate("/admin/edit")}
          >
            <FaEdit />
          </Button>

          <Button
            className="btn btn-danger btn-sm mr-2"
            title="Delete"
            onClick={() => onDelete(job.id)}
          >
            <FaTrash />
          </Button>

          {draft && (
            <Button
              className="btn btn-success btn-sm mr-2"
              title="Publish"
              onClick={() => onPublish(job.id)}
            >
              <FaCheck />
            </Button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default JobRow;
