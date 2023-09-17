import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              <Link type="button" className="btn btn-sm btn-light border border-black">
                Detail Product
              </Link>
            </span>
            <img className="rounded-circle" src="../images/Large.png">
            </img>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
