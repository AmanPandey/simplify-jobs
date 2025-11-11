import React from "react";

const CardStat = ({ title, value, icon: Icon, style }) => {
  return (
    <div className="card admin-card shadow-sm" style={style}>
      <div className="card-body rounded d-flex admin-card-body">
        <div
          className="icon d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "white" }}
        >
          {Icon && <Icon size={24} color="black" />}
        </div>
        <div className="card-data text-white">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text fs-2 fw-medium " style={{ fontSize: "18px" }}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardStat;
