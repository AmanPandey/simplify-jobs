import React from "react";
import CardStat from "../Components/CardStat";
import {
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaUserTie,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Dashboard = ({ value }) => {
  // console.log(value);

  return (
    <div className="dashboard rounded shadow-lg px-3 pt-3 pb-5 bg-white">
      <div className="">
        <div className="">
          <h4 className="mb-0 fw-bold mb-5">Admin Dashboard</h4>
          {/* <button className="btn btn-primary">Add New</button> */}
        </div>

        <div className="row g-4 mt-0">
          <div className="col-lg-4 mb-4">
            <CardStat title="Users" value="1,240" icon={FaUser} />
          </div>
          <div className="col-lg-4 mb-4">
            <CardStat title="Job Posted" value="320" icon={FaBriefcase} />
          </div>
          <div className="col-lg-4 mb-4">
            <CardStat title="Applications" value="4,512" icon={FaFileAlt} />
          </div>
          <div className="col-lg-4 mb-4">
            <CardStat title="All recruiters" value="250" icon={FaUserTie} />
          </div>{" "}
          <div className="col-lg-4 mb-4">
            <CardStat title="Active jobs" value="225" icon={FaCheckCircle} />
          </div>
          <div className="col-lg-4 mb-4">
            <CardStat title="Closed jobs" value="25" icon={FaTimesCircle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
