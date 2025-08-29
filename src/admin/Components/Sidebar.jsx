import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminContext from "../Context/AdminContext";

import {
  FaBars,
  FaTachometerAlt,
  FaBriefcase,
  FaUsers,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const { showSidebar, setShowSidebar, setDraft, setIsAuthentication } =
    useContext(AdminContext);

  const navigate = useNavigate();

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      {/* Toggle button (visible on small screens) */}
      <button
        className="btn  d-lg-none m-3 position-fixed admin-toggler-btn "
        onClick={toggleSidebar}
        style={{ top: "0px", right: "0px", zIndex: 1051 }}
      >
        {showSidebar ? <FaTimes color="white" /> : <FaBars color="white" />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white position-fixed top-0 start-0 vh-100 p-3 shadow d-md-block sidebar ${
          showSidebar ? "" : "hidden"
        }`}
      >
        <ul className="nav nav-pills flex-column admin-nav">
          <li className="nav-item">
            <NavLink
              to="/admin/dashboard"
              onClick={() => setShowSidebar(false)}
              className={({ isActive }) =>
                `nav-link fw-semibold ${
                  isActive ? "text-white bg-active" : "text-dark"
                }`
              }
            >
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/jobslisting"
              onClick={() => setShowSidebar(false)}
              className={({ isActive }) =>
                `nav-link fw-semibold ${
                  isActive ? "text-white bg-active" : "text-dark"
                }`
              }
            >
              <FaBriefcase className="mr-2" />
              Job Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/addjob"
              onClick={() => setShowSidebar(false)}
              className={({ isActive }) =>
                `nav-link fw-semibold ${
                  isActive ? "text-white bg-active" : "text-dark"
                }`
              }
            >
              <FaBriefcase className="mr-2" />
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/draft"
              onClick={() => {
                setShowSidebar(false);
                setDraft(true);
              }}
              className={({ isActive }) =>
                `nav-link fw-semibold ${
                  isActive ? "text-white bg-active" : "text-dark"
                }`
              }
            >
              <FaUsers className="mr-2" />
              Draft
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/login"
              end
              className={({ isActive }) =>
                `nav-link fw-semibold ${
                  isActive ? "text-white bg-active" : "text-dark"
                }`
              }
              onClick={() => {
                localStorage.removeItem("token");
                setShowSidebar(false);
              }}
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
