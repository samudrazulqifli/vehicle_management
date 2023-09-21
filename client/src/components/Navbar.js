import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { getCurrentDate } from "../helpers/today";

const Navbar = () => {
  let [isChange, setisChange] = useState(true);

  useEffect(() => {}, []);

  const handlerChanged = () => {
    setisChange(!isChange);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar bg-body-tertiary mb-2 border-bottom border-dark">
          <div className="container-fluid position-relative">
            <span className="navbar-brand mb-0 h1">
              <Link
                type="button"
                className="btn btn-sm btn-light border border-black"
                to={isChange ? "/vehicle" : "/"}
                onClick={handlerChanged}
              >
                {isChange ? "Detail Vehicle" : "Home"}
              </Link>
            </span>
            <div className="btn btn-sm btn-light border border-black" style={{ marginLeft: "auto", marginRight: "2rem" }}>
                {getCurrentDate()}
            </div>
            <div style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className={`border-left`}>
              <FontAwesomeIcon
                className="px-2"
                icon={faUserTie}
                style={{ color: "#000000" }}
              />
              Admin
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
