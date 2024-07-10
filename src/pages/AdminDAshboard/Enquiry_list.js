import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme.min.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiPlus, BiPencil } from "react-icons/bi";


function Enquiry_list() {
  const [enquiry, setEnquiry] = useState([]);
  const [render, setRender] = useState(false);
  const basurl = "http://127.0.0.1:8000/";
  const navigate=useNavigate()
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
      .get(`creating_enquiry/`)
      .then((response) => {
        setEnquiry(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the job applications!",
          error
        );
      });
  }, [render]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <nav className="nxl-navigation">
          <div className="navbar-wrapper">
            <div className="m-header">
              <a href="index.html" className="b-brand">
                <h3>Innvoyx Tech</h3>
              </a>
            </div>
            <div className="navbar-content">
              <ul className="nxl-navbar">
                <li className="nxl-item nxl-caption">
                  <label>Navigation</label>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <Link to="/Dashboard  " className="nxl-link">
                    <span className="nxl-micon">
                      <i className="fas fa-comments"></i>
                    </span>

                    <span className="nxl-mtext">Dashboard</span>
                  </Link>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <Link to="/carrirer_list" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="fas fa-handshake"></i>
                    </span>
                    <span className="nxl-mtext"> carrer list</span>
                  </Link>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <Link to="/Service" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="fas fa-graduation-cap"></i>
                    </span>
                    <span className="nxl-mtext">service</span>
                  </Link>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <Link to="/Login_userlist" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="fas fa-clipboard-list"></i>
                    </span>
                    <span className="nxl-mtext">Login userlist</span>
                  </Link>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <Link to="/Enquiry_list" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="fas fa-comments"></i>
                    </span>
                    <span className="nxl-mtext"> Enquired user list</span>
                  </Link>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <Link to="/blogs_admin" className="nxl-link">
                    {" "}
                    <span className="nxl-micon">
                      <i className="fas fa-file-image"></i>
                    </span>
                    <span className="nxl-mtext">blog</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="nxl-header">
          <div className="header-wrapper">
            <div className="header-left d-flex align-items-center gap-4"></div>

            <div className="header-right ms-auto">
              <div className="d-flex align-items-center">
                <div className="dropdown nxl-h-item nxl-header-search">
                  <li className="nxl-item">
                    <Link to="/" classNameNam="nxl-link" onClick={handleLogout}>
                      {" "}
                      Logout
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="nxl-container apps-container apps-notes">
          <div className="nxl-content without-header nxl-full-content">
            <div className="main-content d-flex">
              <div
                className="content-area"
                data-scrollbar-target="#psScrollbarInit"
              >
                <div className="content-area-body pb-0">
                  <div className="row note-has-grid" id="note-full-container">
                    {enquiry.map((i) => (
                      <div
                        className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-important note-tasks"
                        key={i.id}
                      >
                        <div className="card card-body mb-4 stretch stretch-full">
                          <span className="side-stick"></span>
                          <h5 className="note-title text-truncate w-75 mb-1">
                            username: {i.username}
                            <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                          </h5>

                          <div className="note-content flex-grow-1">
                            <p className="text-muted note-inner-content mt-4">
                              <strong>email:</strong> {i.email}
                            </p>
                            <p className="text-muted note-inner-content">
                              <strong>phonenumber:</strong> {i.phonenumber}
                            </p>
                            <p className="text-muted note-inner-content">
                              <strong>message:</strong> {i.message}
                            </p>
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

export default Enquiry_list;
