import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header
      className="  position-fixed w-100"
      style={{
        height: "70px",
        zIndex: 1050,
        top: 0,
        left: 0,
        backgroundColor: "rgb(63 77 103)",
      }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div
            className="d-flex justify-content-between align-items-center h-100"
            style={{ paddingLeft: "16px" }}
          >
            <h1
              className="h4 mb-0  ms-2 fw-bold text-white "
              style={{ fontSize: "32px" }}
            >
              SimplifyJob
            </h1>
            {/* <Button className="btn btn-primary">Log Out</Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
