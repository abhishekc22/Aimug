import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/theme.min.css";
import { Link } from "react-router-dom";

function Trial() {
  return (
    <>
      <div className="nxl-navigation">
        <div className="navbar-wrapper">
          <div className="m-header">
            <a href="index.html" className="b-brand">
              <img
                src="assets/images/logo-full.png"
                alt=""
                className="logo logo-lg"
              />
              <img
                src="assets/images/logo-abbr.png"
                alt=""
                className="logo logo-sm"
              />
            </a>
          </div>

          <div className="navbar-content">
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>Navigation</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <a href="javascript:void(0);" className="nxl-link">
                  <span className="nxl-micon">
                    <i className="feather-airplay"></i>
                  </span>
                  <Link to="/Dashboard">
                    <span className="nxl-mtext">Dashboards</span>
                  </Link>
                  <span className="nxl-arrow">
                    <i className="feather-chevron-right"></i>
                  </span>
                </a>
                <ul className="nxl-submenu">
                  <li className="nxl-item">
                    <Link to="/carrirer_list" className="nxl-link">
                      carrer list
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="nxl-header">
        <div className="header-wrapper"></div>
      </header>
      <div className="container" style={{ paddingTop: '6rem' }}>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="username" placeholder="Enter your username" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Trial;
