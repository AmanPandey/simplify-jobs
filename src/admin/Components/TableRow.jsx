import React from "react";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const TableRow = ({ row, columns, onDelete, onEdit }) => {
  const navigate = useNavigate();

  return (
    <tr>
      {/* Render dynamic cells */}
      {/* {columns.map((col) => (
        <td key={col.key}>{row[col.key]}</td>
      ))} */}
      {columns.map((col) => {
        let value = row[col.key];
        // console.log(value);

        // Apply valueMap if available
        if (col.valueMap && value !== undefined) {
          value = col.valueMap[value];
        }

        return <td key={col.key}>{value !== undefined ? value : "-"}</td>;
      })}

      {/* Actions */}
      <td>
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            id={`dropdown-${row.id || row.employerId}`}
            className="btn-sm border-0 bg-transparent shadow-none"
          >
            <FaEllipsisV />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {onEdit && (
              <Dropdown.Item
                onClick={() => onEdit(row.id || row.employerId, row)}
              >
                <FaEdit className="me-2" /> Edit
              </Dropdown.Item>
            )}
            {onDelete && (
              <Dropdown.Item onClick={() => onDelete(row.id || row.employerId)}>
                <FaTrash className="me-2 text-danger m-0" /> Delete
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

export default TableRow;
