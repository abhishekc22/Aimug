import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme.min.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiPlus, BiPencil } from "react-icons/bi";

function Login_userlist() {
  const [userlist, setUserlist] = useState([]);
  const [render, setRender] = useState(false);

  const basurl = "http://127.0.0.1:8000/";
  const axiosInstance = axios.create({
    baseURL: basurl,
  });

  const handleDelete = (id) => {
    axiosInstance
      .delete(`user_delete/${id}`)
      .then((response) => {
        console.log(response.status, "56666666666666666666666666666");
        if (response.status === 204) {
          if (render === false) {
            setRender(true);
          } else {
            setRender(false);
          }
          console.log("Job deleted successfully");
        }
        console.log("Job deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
  };
  useEffect(() => {
    axiosInstance
      .get(`userslist/`)
      .then((response) => {
        setUserlist(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the job applications!",
          error
        );
      });
  }, [render]);

  return (
    <div>
      <div>
        <div nav className="nxl-navigation">
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
                    <Link to="/Dashboard" className="nxl-link">
                      {" "}
                      <span className="nxl-mtext">Dashboards</span>
                    </Link>

                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <Link to="/Login_userlist" className="nxl-link">
                        {" "}
                        Login_userlis
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
        <main className="nxl-container apps-container apps-notes">
          <div className="nxl-content without-header nxl-full-content">
            <div className="main-content d-flex">
              <div
                className="content-sidebar content-sidebar-md h-full"
                data-scrollbar-target="#psScrollbarInit"
              >
                <div className="content-sidebar-header bg-white sticky-top hstack justify-content-between">
                  <h4 className="fw-bolder mb-0">Notes</h4>
                  <a
                    href="javascript:void(0);"
                    className="app-sidebar-close-trigger d-flex"
                  >
                    <i className="feather-x"></i>
                  </a>
                </div>
                <div className="content-sidebar-header"></div>
              </div>

              <div
                className="content-area"
                data-scrollbar-target="#psScrollbarInit"
              >
                <div className="content-area-body pb-0">
                  <div className="row note-has-grid" id="note-full-container">
                    {userlist.map((i) => (
                      <div
                        className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-important note-tasks"
                        key={i.id}
                      >
                        <div className="card card-body mb-4 stretch stretch-full">
                          <span className="side-stick"></span>
                          <h5 className="note-title text-truncate w-75 mb-1">
                            usernam: {i.username}
                            <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                          </h5>
                          <div className="note-content flex-grow-1">
                            <p className="text-muted note-inner-content">
                              <strong>email:</strong> {i.email}
                            </p>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-sm btn-outline-danger me-2"
                              onClick={() => handleDelete(i.id)}
                            >
                              <BiTrash /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="theme-customizer">
          <div className="customizer-handle">
            <a
              href="javascript:void(0);"
              className="cutomizer-open-trigger bg-primary"
            >
              <i className="feather-settings"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_userlist;
