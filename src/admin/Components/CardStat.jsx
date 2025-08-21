import React from "react";

const CardStat = ({ title, value, icon: Icon }) => {
  return (
    <div className="card  admin-card shadow-sm">
      <div className="card-body  rounded d-flex admin-card-body">
        <div className="icon d-flex justify-content-center align-items-center">
          {Icon && <Icon size={24} color="white" />}
        </div>
        <div className="card-data">
          <h6 className="card-title fw-bold">{title}</h6>
          <p className="card-text fs-8 fw-medium text-secondary">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStat;
