import React from "react";
const Header = () => {
  return (
    <header
      className="  position-fixed w-100"
      style={{
        height: "70px",
        zIndex: 1040,
        top: 0,
        left: 0,
        backgroundColor: "#d6e6ff",
      }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div
            className="d-flex justify-content-between align-items-center h-100"
            style={{ paddingLeft: "16px" }}
          >
            <h1
              className="h4 mb-0  ms-2 fw-bold text-black "
              style={{ fontSize: "32px" }}
            >
              SimplifyJob
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
