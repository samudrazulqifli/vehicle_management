import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BorrowedVehicle } from "../../components";
const dashboard = () => {
  return (
    <>
    <h3 className="text-center mb-3">Dashboard</h3>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light"><BorrowedVehicle></BorrowedVehicle></div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light"><BorrowedVehicle></BorrowedVehicle></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
