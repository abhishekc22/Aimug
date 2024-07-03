import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme.min.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div body>
        <nav className="nxl-navigation">
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
                    <span className="nxl-item">Dashboards</span>
                    <span className="nxl-item">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-item">
                    <li className="nxl-item">
                      <Link to="/carrirer_list" className="nxl-link">
                        {" "}
                        carrer list
                      </Link>
                    </li>
                    <li className="nxl-item">
                      <li className="nxl-item">
                        <Link to="/Service" className="nxl-link">
                          service
                        </Link>
                      </li>
                    </li>

                    <li className="nxl-item">
                      <Link to="/blogs_admin" className="nxl-link">
                        {" "}
                        blog
                      </Link>
                    </li>
                    <li className="nxl-item">
                      <Link to="/" className="nxl-link">
                        {" "}
                       Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
