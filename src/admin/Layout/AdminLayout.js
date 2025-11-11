import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "../assets/admin.css";

const AdminLayout = () => {
  return (
    <>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="d-flex flex-column flex-grow-1">
          <Header />
          <main className=" d-flex flex-column flex-grow-1 dynamic-margin p-2 admin-main ">
            <Outlet />
            {/* <Check /> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
