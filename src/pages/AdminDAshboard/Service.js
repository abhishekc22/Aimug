import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme.min.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiPlus, BiPencil } from "react-icons/bi";

function Service() {
  const [service, setService] = useState([]);
  const [render, setRender] = useState(false);

  const basurl = "http://127.0.0.1:8000/";

  const axiosInstance = axios.create({
    baseURL: basurl,
  });

  const handleDelete = (id) => {
    axiosInstance
      .delete(`services/${id}`)
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
      .get(`services/`)
      .then((response) => {
        setService(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the job applications!",
          error
        );
      });
  }, [render]);
  return (
    <>
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
                      <Link to="/Service" className="nxl-link">
                        {" "}
                        service
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                <div className="content-sidebar-header">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary w-100"
                    id="add-notes"
                  >
                    <i className="feather-plus me-2"></i>
                    <span>
                      <Link to="/service_modal">service</Link>
                    </span>
                  </a>
                </div>
              </div>

              <div
                className="content-area"
                data-scrollbar-target="#psScrollbarInit"
              >
                <div className="content-area-body pb-0">
                  <div className="row note-has-grid" id="note-full-container">
                    {service.map((i) => (
                      <div
                        className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-important note-tasks"
                        key={i.id}
                      >
                        <div className="card card-body mb-4 stretch stretch-full">
                          <span className="side-stick"></span>
                          <h5 className="note-title text-truncate w-75 mb-1">
                            Title: {i.title}
                            <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                          </h5>
                          {i.image && (
                            <img
                              src={i.image}
                              alt={i.title}
                              className="img-fluid mb-2"
                            />
                          )}
                          <div className="note-content flex-grow-1">
                            <p className="text-muted note-inner-content">
                              <strong>Description:</strong> {i.description}
                            </p>
                            <p className="text-muted note-inner-content">
                              <strong>Content:</strong> {i.content}
                            </p>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-sm btn-outline-danger me-2"
                              onClick={() => handleDelete(i.id)}
                            >
                              <BiTrash /> Delete
                            </button>
                            {i.canAdd && (
                              <button className="btn btn-sm btn-outline-primary me-2">
                                <BiPlus /> Add
                              </button>
                            )}
                            <Link
                              to={`/edit-service/${i.id}`}
                              className="btn btn-sm btn-outline-secondary me-2"
                            >
                              <BiPencil /> Update
                            </Link>
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
    </>
  );
}

export default Service;
