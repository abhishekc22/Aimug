import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme.min.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiPlus, BiPencil } from "react-icons/bi";

function Admin_careeelist() {
  const [jobApplications, setJobApplications] = useState([]);
  const [render, setRender] = useState(false);

  const basurl = "http://127.0.0.1:8000/";

  const axiosInstance = axios.create({
    baseURL: basurl,
  });

  const handleDelete = (id) => {
    axiosInstance
      .delete(`jobadelete/${id}`)
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
      .get(`job-application_list/`)
      .then((response) => {
        setJobApplications(response.data);
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
                  <Link to="/Dashboard"><span className="nxl-mtext">Dashboards</span></Link>
                  
                  <span className="nxl-arrow">
                    <i className="feather-chevron-right"></i>
                  </span>
                </a>
                <ul className="nxl-submenu">
                  <li className="nxl-item">
                    <Link to="/carrirer_list" className="nxl-link">
                      {" "}
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
                    <Link to="/Add_job">Add Carrer</Link>
                  </span>
                </a>
              </div>
            </div>

            <div
              className="content-area"
              data-scrollbar-target="#psScrollbarInit"
            >
              <div className="content-area-header sticky-top">
                <div className="page-header-left d-flex align-items-center gap-2">
                  <a
                    href="javascript:void(0);"
                    className="app-sidebar-open-trigger me-2"
                  >
                    <i className="feather-align-left fs-20"></i>
                  </a>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-light-brand dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,18"
                    >
                      Project Notes
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          All Notes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Lead Notes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Client Notes
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item active"
                          href="javascript:void(0)"
                        >
                          Project Notes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Meeting Notes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Personal Notes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Customer Notes
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="avatar-text avatar-md"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,22"
                    >
                      <i className="feather-eye"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-eye me-3"></i>
                          <span>Read</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-eye-off me-3"></i>
                          <span>Unread</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-star me-3"></i>
                          <span>Starred</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-shield-off me-3"></i>
                          <span>Unstarred</span>
                        </a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-clock me-3"></i>
                          <span>Snooze</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-check-circle me-3"></i>
                          <span>Add Tasks</span>
                        </a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-archive me-3"></i>
                          <span>Archive</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-alert-octagon me-3"></i>
                          <span>Report Spam</span>
                        </a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="feather-trash-2 me-3"></i>
                          <span>Delete</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="d-flex"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,22"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <div
                        className="avatar-text avatar-md"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Tags"
                      >
                        <i className="feather-tag"></i>
                      </div>
                    </a>
                    <div className="dropdown-menu">
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Office"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Office"
                          >
                            Office
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Family"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Family"
                          >
                            Family
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Friend"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Friend"
                          >
                            Friend
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Marketplace"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Marketplace"
                          >
                            {" "}
                            Marketplace{" "}
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Development"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Development"
                          >
                            {" "}
                            Development{" "}
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-plus me-3"></i>
                        <span>Create Tag</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-tag me-3"></i>
                        <span>Manages Tag</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="d-flex"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,22"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <div
                        className="avatar-text avatar-md"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Labels"
                      >
                        <i className="feather-folder-plus"></i>
                      </div>
                    </a>
                    <div className="dropdown-menu">
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Updates"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Updates"
                          >
                            Updates
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Socials"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Socials"
                          >
                            Socials
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Primary"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Primary"
                          >
                            Primary
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Forums"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Forums"
                          >
                            Forums
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Promotions"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label c-pointer"
                            for="Promotions"
                          >
                            {" "}
                            Promotions{" "}
                          </label>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-plus me-3"></i>
                        <span>Create Label</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-folder-plus me-3"></i>
                        <span>Manages Label</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="page-header-right ms-auto">
                  <div className="hstack gap-2">
                    <div className="hstack">
                      <a
                        href="javascript:void(0)"
                        className="search-form-open-toggle"
                      >
                        <div
                          className="avatar-text avatar-md"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Search"
                        >
                          <i className="feather feather-search"></i>
                        </div>
                      </a>
                      <form className="search-form" style={{ display: "none" }}>
                        <div className="search-form-inner">
                          <a
                            href="javascript:void(0)"
                            className="search-form-close-toggle"
                          >
                            <div
                              className="avatar-text avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Search Close"
                            >
                              <i className="feather feather-arrow-left"></i>
                            </div>
                          </a>
                          <input
                            type="search"
                            className="py-3 px-0 border-0 w-100"
                            id="notesSearch"
                            placeholder="Search..."
                          />
                        </div>
                      </form>
                    </div>
                    <a href="javascript:void(0)" className="d-none d-sm-flex">
                      <div
                        className="avatar-text avatar-md"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Newest"
                      >
                        <i className="feather feather-chevron-left"></i>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="d-none d-sm-flex">
                      <div
                        className="avatar-text avatar-md"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Oldest"
                      >
                        <i className="feather feather-chevron-right"></i>
                      </div>
                    </a>
                    <div className="dropdown d-none d-sm-flex">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-light-brand btn-sm rounded-pill dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,23"
                      >
                        Newest
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Title
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Priority
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Category
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Time & Date
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Newest
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Oldest
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Ascending
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Descending
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown d-none d-sm-flex">
                      <a
                        href="javascript:void(0)"
                        className="d-flex"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,22"
                        data-bs-auto-close="outside"
                      >
                        <div
                          className="avatar-text avatar-md"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="More Options"
                        >
                          <i className="feather feather-more-vertical"></i>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-plus me-3"></i>
                          <span>Add to Group</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-user-plus me-3"></i>
                          <span>Add to Contact</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-eye-off me-3"></i>
                          <span>Make as Unread</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-sliders me-3"></i>
                          <span>Filter Messages</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-archive me-3"></i>
                          <span>Make as Archive</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-slash me-3"></i>
                          <span>Report Spam</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-sliders me-3"></i>
                          <span>Report phishing</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-download me-3"></i>
                          <span>Download Messages</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-bell-off me-3"></i>
                          <span>Mute Conversion</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-slash me-3"></i>
                          <span>Block Conversion</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather feather-trash-2 me-3"></i>
                          <span>Delete Conversion</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-area-body pb-0">
                <div className="row note-has-grid" id="note-full-container">
                  {jobApplications.map((job) => (
                    <div
                      className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-important note-tasks"
                      key={job.id}
                    >
                      <div className="card card-body mb-4 stretch stretch-full">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-1">
                          {job.position_name}
                          <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                        </h5>
                        <p className="fs-11 text-muted note-date">
                          {new Date(job.publish_date).toLocaleDateString()}
                        </p>
                        <div className="note-content flex-grow-1">
                          <p className="text-muted note-inner-content">
                            <strong>Description:</strong> {job.job_description}
                          </p>
                          <p className="text-muted note-inner-content">
                            <strong>Location:</strong> {job.location}
                          </p>
                          <p className="text-muted note-inner-content">
                            <strong>Responsibility:</strong>{" "}
                            {job.responsibility}
                          </p>
                          <p className="text-muted note-inner-content">
                            <strong>Qualifications:</strong>{" "}
                            {job.qualifications}
                          </p>
                          <p className="text-muted note-inner-content">
                            <strong>Job Mode:</strong> {job.job_mode}
                          </p>
                          <p className="text-muted note-inner-content">
                            <strong>Vacancy:</strong> {job.vacancy}
                          </p>
                          <p className="text-muted note-inner-content">
                            <strong>Salary:</strong> ${job.salary}
                          </p>
                        </div>

                        {/* Icons for delete, update, and add */}
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-sm btn-outline-danger me-2"
                            onClick={() => handleDelete(job.id)}
                          >
                            <BiTrash /> Delete
                          </button>
                          {/* Example: Show add icon only if applicable */}
                          {job.canAdd && (
                            <button className="btn btn-sm btn-outline-primary me-2">
                              <BiPlus /> Add
                            </button>
                          )}
                          <Link
                            to={`/edit-job/${job.id}`}
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
      <div
        className="modal fade"
        id="addnotesmodal"
        tabindex="-1"
        data-bs-keyboard="false"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Add Notes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="notes-box">
                <div className="notes-content">
                  <form action="javascript:void(0);" id="addnotesmodalTitle">
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div className="note-title">
                          <label className="form-label">Note Title</label>
                          <input
                            type="text"
                            id="note-has-title"
                            className="form-control"
                            minlength="25"
                            placeholder="Title"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="note-description">
                          <label className="form-label">Note Description</label>
                          <textarea
                            id="note-has-description"
                            className="form-control"
                            minlength="60"
                            placeholder="Description"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button id="btn-n-save" className="float-left btn btn-success">
                Save
              </button>
              <button className="btn btn-danger" data-dismiss="modal">
                Discard
              </button>
              <button
                id="btn-n-add"
                className="btn btn-success"
                disabled="disabled"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade-scale"
        id="searchModal"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-top modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header search-form py-0">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="feather-search fs-4 text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control search-input-field"
                  placeholder="Search..."
                />
                <span className="input-group-text">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div className="searching-for mb-5">
                <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                  I'm searching for...
                </h4>
                <div className="row g-1">
                  <div className="col-md-4 col-xl-2">
                    <a
                      href="javascript:void(0);"
                      className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill"
                    >
                      <i className="feather-compass"></i>
                      <span>Recent</span>
                    </a>
                  </div>
                  <div className="col-md-4 col-xl-2">
                    <a
                      href="javascript:void(0);"
                      className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill"
                    >
                      <i className="feather-command"></i>
                      <span>Command</span>
                    </a>
                  </div>
                  <div className="col-md-4 col-xl-2">
                    <a
                      href="javascript:void(0);"
                      className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill"
                    >
                      <i className="feather-users"></i>
                      <span>Peoples</span>
                    </a>
                  </div>
                  <div className="col-md-4 col-xl-2">
                    <a
                      href="javascript:void(0);"
                      className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill"
                    >
                      <i className="feather-file"></i>
                      <span>Files</span>
                    </a>
                  </div>
                  <div className="col-md-4 col-xl-2">
                    <a
                      href="javascript:void(0);"
                      className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill"
                    >
                      <i className="feather-video"></i>
                      <span>Medias</span>
                    </a>
                  </div>
                  <div className="col-md-4 col-xl-2">
                    <a
                      href="javascript:void(0);"
                      className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill"
                    >
                      <span>More</span>
                      <i className="feather-chevron-down"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="recent-result mb-5">
                <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                  Recnet{" "}
                  <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                    3
                  </span>
                </h4>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-airplay fs-5"></i>
                    <div className="fs-13 fw-semibold">
                      CRM dashboard redesign
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    /<i className="feather-command ms-1"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-file-plus fs-5"></i>
                    <div className="fs-13 fw-semibold">Create new eocument</div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    N /<i className="feather-command ms-1"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-user-plus fs-5"></i>
                    <div className="fs-13 fw-semibold">
                      Invite project colleagues
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    P /<i className="feather-command ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="command-result mb-5">
                <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                  Command{" "}
                  <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                    5
                  </span>
                </h4>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-user fs-5"></i>
                    <div className="fs-13 fw-semibold">My profile</div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    P /<i className="feather-command ms-1"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-users fs-5"></i>
                    <div className="fs-13 fw-semibold">Team profile</div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    T /<i className="feather-command ms-1"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-user-plus fs-5"></i>
                    <div className="fs-13 fw-semibold">Invite colleagues</div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    I /<i className="feather-command ms-1"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-briefcase fs-5"></i>
                    <div className="fs-13 fw-semibold">Create new project</div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    CP /<i className="feather-command ms-1"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-life-buoy fs-5"></i>
                    <div className="fs-13 fw-semibold">Support center</div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge border rounded text-dark"
                  >
                    SC /<i className="feather-command ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="file-result mb-4">
                <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                  Files{" "}
                  <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                    3
                  </span>
                </h4>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-folder-plus fs-5"></i>
                    <div className="fs-13 fw-semibold">
                      CRM Desing Project{" "}
                      <span className="fs-12 fw-normal text-muted">
                        (56.74 MB)
                      </span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" className="file-download">
                    <i className="feather-download"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-folder-plus fs-5"></i>
                    <div className="fs-13 fw-semibold">
                      Admin Dashboard Project{" "}
                      <span className="fs-12 fw-normal text-muted">
                        (46.83 MB)
                      </span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" className="file-download">
                    <i className="feather-download"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-start gap-3"
                  >
                    <i className="feather-folder-plus fs-5"></i>
                    <div className="fs-13 fw-semibold">
                      CRM Dashboard Project{" "}
                      <span className="fs-12 fw-normal text-muted">
                        (68.59 MB)
                      </span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" className="file-download">
                    <i className="feather-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade-scale"
        id="languageSelectModal"
        aria-hidden="true"
        aria-labelledby="languageSelectModalLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="languageSelectModalLabel">
                Select Language
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/sa.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Arabic </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/bd.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Bengali </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/ch.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Chinese </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/hr.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Croatian </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/dk.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Danish </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/nl.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Dutch </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select active">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/us.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>English </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/fi.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Filipino </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/fr.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>French </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/de.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>German </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/il.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Hebrew </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/in.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Hindi </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/id.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Indonesian </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/it.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Italian </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/jp.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Japanese </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/kr.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Korean </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/ir.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Persian </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/pt.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Portuguese </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/ru.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Russian </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/es.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Spanish </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/sv.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Swedish </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/tr.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Turkish </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/pk.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Urdo</span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-3 language_select">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="avatar-image avatar-sm">
                      <img
                        src="assets/vendors/img/flags/1x1/vi.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <span>Vietnamese</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-fixed"
        style={{ right: "5px", bottom: "5px", zIndex: 999999 }}
      >
        <div
          id="toast"
          className="toast bg-black hide"
          data-bs-delay="3000"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header px-3 bg-transparent d-flex align-items-center justify-content-between border-bottom border-light border-opacity-10">
            <div className="text-white mb-0 mr-auto">Downloading...</div>
            <a
              href="javascript:void(0)"
              className="ms-2 mb-1 close fw-normal"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              <span className="text-white">&times;</span>
            </a>
          </div>
          <div className="toast-body p-3 text-white">
            <h6 className="fs-13 text-white">Project.zip</h6>
            <span className="text-light fs-11">4.2mb of 5.5mb</span>
          </div>
          <div className="toast-footer p-3 pt-0 border-top border-light border-opacity-10">
            <div className="progress mt-3" style={{ height: "5px" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated w-75 bg-dark"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="theme-customizer">
        <div className="customizer-handle">
          <a
            href="javascript:void(0);"
            className="cutomizer-open-trigger bg-primary"
          >
            <i className="feather-settings"></i>
          </a>
        </div>
        <div className="customizer-sidebar-wrapper">
          <div className="customizer-sidebar-header px-4 ht-80 border-bottom d-flex align-items-center justify-content-between">
            <h5 className="mb-0">Theme Settings</h5>
            <a
              href="javascript:void(0);"
              className="cutomizer-close-trigger d-flex"
            >
              <i className="feather-x"></i>
            </a>
          </div>
          <div
            className="customizer-sidebar-body position-relative p-4"
            data-scrollbar-target="#psScrollbarInit"
          >
            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
              <label
                className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label"
                style={{ top: "-12px" }}
              >
                Navigation
              </label>

              <div
                className="row g-2 theme-options-items app-navigation"
                id="appNavigationList"
              >
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-navigation-light"
                    name="app-navigation"
                    value="1"
                    data-app-navigation="app-navigation-light"
                    checked
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-navigation-light"
                  >
                    Light
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-navigation-dark"
                    name="app-navigation"
                    value="2"
                    data-app-navigation="app-navigation-dark"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-navigation-dark"
                  >
                    Dark
                  </label>
                </div>
              </div>
            </div>

            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set mt-5">
              <label
                className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label"
                style={{ top: "-12px" }}
              >
                Header
              </label>

              <div
                className="row g-2 theme-options-items app-header"
                id="appHeaderList"
              >
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-header-light"
                    name="app-header"
                    value="1"
                    data-app-header="app-header-light"
                    checked
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-header-light"
                  >
                    Light
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-header-dark"
                    name="app-header"
                    value="2"
                    data-app-header="app-header-dark"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-header-dark"
                  >
                    Dark
                  </label>
                </div>
              </div>
            </div>

            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
              <label
                className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label"
                style={{ top: "-12px" }}
              >
                Skins
              </label>
              <div
                className="row g-2 theme-options-items app-skin"
                id="appSkinList"
              >
                <div className="col-6 text-center position-relative single-option light-button active">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-skin-light"
                    name="app-skin"
                    value="1"
                    data-app-skin="app-skin-light"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-skin-light"
                  >
                    Light
                  </label>
                </div>
                <div className="col-6 text-center position-relative single-option dark-button">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-skin-dark"
                    name="app-skin"
                    value="2"
                    data-app-skin="app-skin-dark"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-skin-dark"
                  >
                    Dark
                  </label>
                </div>
              </div>
            </div>

            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-0 border border-gray-2 theme-options-set">
              <label
                className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label"
                style={{ top: "-12px" }}
              >
                Typography
              </label>
              <div
                className="row g-2 theme-options-items font-family"
                id="fontFamilyList"
              >
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-lato"
                    name="font-family"
                    value="1"
                    data-font-family="app-font-family-lato"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-lato"
                  >
                    Lato
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-rubik"
                    name="font-family"
                    value="2"
                    data-font-family="app-font-family-rubik"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-rubik"
                  >
                    Rubik
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-inter"
                    name="font-family"
                    value="3"
                    data-font-family="app-font-family-inter"
                    checked
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-inter"
                  >
                    Inter
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-cinzel"
                    name="font-family"
                    value="4"
                    data-font-family="app-font-family-cinzel"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-cinzel"
                  >
                    Cinzel
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-nunito"
                    name="font-family"
                    value="6"
                    data-font-family="app-font-family-nunito"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-nunito"
                  >
                    Nunito
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-roboto"
                    name="font-family"
                    value="7"
                    data-font-family="app-font-family-roboto"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-roboto"
                  >
                    Roboto
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-ubuntu"
                    name="font-family"
                    value="8"
                    data-font-family="app-font-family-ubuntu"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-ubuntu"
                  >
                    Ubuntu
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-poppins"
                    name="font-family"
                    value="9"
                    data-font-family="app-font-family-poppins"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-poppins"
                  >
                    Poppins
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-raleway"
                    name="font-family"
                    value="10"
                    data-font-family="app-font-family-raleway"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-raleway"
                  >
                    Raleway
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-system-ui"
                    name="font-family"
                    value="11"
                    data-font-family="app-font-family-system-ui"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-system-ui"
                  >
                    System UI
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-noto-sans"
                    name="font-family"
                    value="12"
                    data-font-family="app-font-family-noto-sans"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-noto-sans"
                  >
                    Noto Sans
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-fira-sans"
                    name="font-family"
                    value="13"
                    data-font-family="app-font-family-fira-sans"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-fira-sans"
                  >
                    Fira Sans
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-work-sans"
                    name="font-family"
                    value="14"
                    data-font-family="app-font-family-work-sans"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-work-sans"
                  >
                    Work Sans
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-open-sans"
                    name="font-family"
                    value="15"
                    data-font-family="app-font-family-open-sans"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-open-sans"
                  >
                    Open Sans
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-maven-pro"
                    name="font-family"
                    value="16"
                    data-font-family="app-font-family-maven-pro"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-maven-pro"
                  >
                    Maven Pro
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-quicksand"
                    name="font-family"
                    value="17"
                    data-font-family="app-font-family-quicksand"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-quicksand"
                  >
                    Quicksand
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-montserrat"
                    name="font-family"
                    value="18"
                    data-font-family="app-font-family-montserrat"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-montserrat"
                  >
                    Montserrat
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-josefin-sans"
                    name="font-family"
                    value="19"
                    data-font-family="app-font-family-josefin-sans"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-josefin-sans"
                  >
                    Josefin Sans
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-ibm-plex-sans"
                    name="font-family"
                    value="20"
                    data-font-family="app-font-family-ibm-plex-sans"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-ibm-plex-sans"
                  >
                    IBM Plex Sans
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-source-sans-pro"
                    name="font-family"
                    value="5"
                    data-font-family="app-font-family-source-sans-pro"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-source-sans-pro"
                  >
                    Source Sans Pro
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-montserrat-alt"
                    name="font-family"
                    value="21"
                    data-font-family="app-font-family-montserrat-alt"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-montserrat-alt"
                  >
                    Montserrat Alt
                  </label>
                </div>
                <div className="col-6 text-center single-option">
                  <input
                    type="radio"
                    className="btn-check"
                    id="app-font-family-roboto-slab"
                    name="font-family"
                    value="22"
                    data-font-family="app-font-family-roboto-slab"
                  />
                  <label
                    className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                    for="app-font-family-roboto-slab"
                  >
                    Roboto Slab
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="customizer-sidebar-footer px-4 ht-60 border-top d-flex align-items-center gap-2">
            <div className="flex-fill w-50">
              <a
                href="javascript:void(0);"
                className="btn btn-danger"
                data-style="reset-all-common-style"
              >
                Reset
              </a>
            </div>
            <div className="flex-fill w-50">
              <a href="javascript:void(0);" className="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_careeelist;
