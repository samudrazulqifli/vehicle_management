import React from "react";
import { Link } from "react-router-dom";
import AdminList from "../../components/AdminList";


const Vehicle = () => {
  return (
    <>
      <div className="container border-bottom border-black py-3">
        <div className="row g-0">
          <div className="col-5 col-md-2 border-right">
            <div className="text-center mb-4">Still Progress</div>
            <div className="card me-2">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Toyota</li>
                <li className="list-group-item">Mitsubishi</li>
                <li className="list-group-item">Vespa</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-10">
            <div className="d-flex justify-content-end align-items-center">
              <Link className="btn btn-light border border-black mb-1">Add New Vehicle</Link>
            </div>
            <AdminList></AdminList>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
