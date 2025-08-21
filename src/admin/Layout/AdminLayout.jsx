import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { useState } from "react";
import Check from "../Components/Check";
import "../assets/admin.css";

const AdminLayout = ({ setDraft }) => {
  return (
    <>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="d-flex flex-column flex-grow-1">
          <Header />
          <main className=" d-flex flex-column flex-grow-1 dynamic-margin p-2 ">
            <Outlet />
            {/* <Check /> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
