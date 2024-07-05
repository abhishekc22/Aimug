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
                    <span className="nxl-item font-bold">Aimug</span>
                    <span className="nxl-item">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-item">
                    <li className="nxl-item">
                      <Link to="/Dashboard" className="nxl-link">
                        carrer Dashboards
                      </Link>
                      <Link to="/carrirer_list" className="nxl-link">
                        carrer list
                      </Link>
                    </li>
                    <li className="nxl-item">
                      <li className="nxl-item">
                        <Link to="/Service" className="nxl-link">
                          service
                        </Link>
                      </li>
                      <li className="nxl-item">
                        <Link to="/Login_userlist" className="nxl-link">
                          Login_userlist
                        </Link>
                      </li>
                      <li className="nxl-item">
                        <Link to="/Enquiry_list" className="nxl-link">
                          Enquired user list
                        </Link>
                      </li>
                    </li>

                    <li className="nxl-item">
                      <Link to="/blogs_admin" className="nxl-link">
                        {" "}
                        blog
                      </Link>
                    </li>
                  </ul>
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
                    <Link to="/" classNameNam="nxl-link">
                      {" "}
                      Logout
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="nxl-container">
          <div className="nxl-content">
            <div className="page-header">
              <div className="page-header-left d-flex align-items-center">
                <div className="page-header-title">
                  <h5 className="m-b-10">Dashboard</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">Dashboard</li>
                </ul>
              </div>
              <div className="page-header-right ms-auto">
                <div className="page-header-right-items">
                  <div className="d-flex d-md-none">
                    <a
                      href="javascript:void(0)"
                      className="page-header-right-close-toggle"
                    >
                      <i className="feather-arrow-left me-2"></i>
                      <span>Back</span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                    <div
                      id="reportrange"
                      className="reportrange-picker d-flex align-items-center"
                    >
                      <span className="reportrange-picker-field"></span>
                    </div>
                    <div className="dropdown filter-dropdown">
                      <a
                        className="btn btn-md btn-light-brand"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0, 10"
                        data-bs-auto-close="outside"
                      >
                        <i className="feather-filter me-2"></i>
                        <span>Filter</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="Role"
                              checked="checked"
                            />
                            <label
                              className="custom-control-label c-pointer"
                              for="Role"
                            >
                              Role
                            </label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="Team"
                              checked="checked"
                            />
                            <label
                              className="custom-control-label c-pointer"
                              for="Team"
                            >
                              Team
                            </label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="Email"
                              checked="checked"
                            />
                            <label
                              className="custom-control-label c-pointer"
                              for="Email"
                            >
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="Member"
                              checked="checked"
                            />
                            <label
                              className="custom-control-label c-pointer"
                              for="Member"
                            >
                              Member
                            </label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="Recommendation"
                              checked="checked"
                            />
                            <label
                              className="custom-control-label c-pointer"
                              for="Recommendation"
                            >
                              Recommendation
                            </label>
                          </div>
                        </div>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather-plus me-3"></i>
                          <span>Create New</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather-filter me-3"></i>
                          <span>Manage Filter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-md-none d-flex align-items-center">
                  <a
                    href="javascript:void(0)"
                    className="page-header-right-open-toggle"
                  >
                    <i className="feather-align-right fs-20"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="main-content">
              <div className="row">
                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-dollar-sign"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark">
                              <span className="counter">45</span>/
                              <span className="counter">76</span>
                            </div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">
                              Invoices Awaiting Payment
                            </h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);" className="">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="fs-12 fw-medium text-muted text-truncate-1-line"
                          >
                            Invoices Awaiting{" "}
                          </a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">$5,569</span>
                            <span className="fs-11 text-muted">(56%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "56%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-cast"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark">
                              <span className="counter">48</span>/
                              <span className="counter">86</span>
                            </div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">
                              Converted Leads
                            </h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);" className="">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="fs-12 fw-medium text-muted text-truncate-1-line"
                          >
                            Converted Leads{" "}
                          </a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">
                              52 Completed
                            </span>
                            <span className="fs-11 text-muted">(63%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "63%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-briefcase"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark">
                              <span className="counter">16</span>/
                              <span className="counter">20</span>
                            </div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">
                              Projects In Progress
                            </h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);" className="">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="fs-12 fw-medium text-muted text-truncate-1-line"
                          >
                            Projects In Progress{" "}
                          </a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">
                              16 Completed
                            </span>
                            <span className="fs-11 text-muted">(78%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "78%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-activity"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark">
                              <span className="counter">46.59</span>%
                            </div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">
                              Conversion Rate
                            </h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);" className="">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="fs-12 fw-medium text-muted text-truncate-1-line"
                          >
                            {" "}
                            Conversion Rate{" "}
                          </a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">$2,254</span>
                            <span className="fs-11 text-muted">(46%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "46%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-8">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Payment Record</h5>
                      <div className="card-header-action">
                        <div className="card-header-btn">
                          <div data-bs-toggle="tooltip" title="Delete">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-danger"
                              data-bs-toggle="remove"
                            >
                              {" "}
                            </a>
                          </div>
                          <div data-bs-toggle="tooltip" title="Refresh">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-warning"
                              data-bs-toggle="refresh"
                            >
                              {" "}
                            </a>
                          </div>
                          <div
                            data-bs-toggle="tooltip"
                            title="Maximize/Minimize"
                          >
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-success"
                              data-bs-toggle="expand"
                            >
                              {" "}
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-sm"
                            data-bs-toggle="dropdown"
                            data-bs-offset="25, 25"
                          >
                            <div data-bs-toggle="tooltip" title="Options">
                              <i className="feather-more-vertical"></i>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-at-sign"></i>New
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-calendar"></i>Event
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-bell"></i>Snoozed
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-trash-2"></i>Deleted
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-settings"></i>Settings
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-life-buoy"></i>Tips & Tricks
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body custom-card-action p-0">
                      <div id="payment-records-chart"></div>
                    </div>
                    <div className="card-footer">
                      <div className="row g-4">
                        <div className="col-lg-3">
                          <div className="p-3 border border-dashed rounded">
                            <div className="fs-12 text-muted mb-1">
                              Awaiting
                            </div>
                            <h6 className="fw-bold text-dark">$5,486</h6>
                            <div className="progress mt-2 ht-3">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "81%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="p-3 border border-dashed rounded">
                            <div className="fs-12 text-muted mb-1">
                              Completed
                            </div>
                            <h6 className="fw-bold text-dark">$9,275</h6>
                            <div className="progress mt-2 ht-3">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "82%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="p-3 border border-dashed rounded">
                            <div className="fs-12 text-muted mb-1">
                              Rejected
                            </div>
                            <h6 className="fw-bold text-dark">$3,868</h6>
                            <div className="progress mt-2 ht-3">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "68%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="p-3 border border-dashed rounded">
                            <div className="fs-12 text-muted mb-1">Revenue</div>
                            <h6 className="fw-bold text-dark">$50,668</h6>
                            <div className="progress mt-2 ht-3">
                              <div
                                className="progress-bar bg-dark"
                                role="progressbar"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div className="card stretch stretch-full overflow-hidden">
                    <div className="bg-primary text-white">
                      <div className="p-4">
                        <span className="badge bg-light text-primary text-dark float-end">
                          12%
                        </span>
                        <div className="text-start">
                          <h4 className="text-reset">30,569</h4>
                          <p className="text-reset m-0">Total Sales</p>
                        </div>
                      </div>
                      <div id="total-sales-color-graph"></div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="hstack gap-3">
                          <div className="avatar-image avatar-lg p-2 rounded">
                            <img
                              className="img-fluid"
                              src="assets/images/brand/shopify.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <a href="javascript:void(0);" className="d-block">
                              Shopify eCommerce Store
                            </a>
                            <span className="fs-12 text-muted">
                              Development
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="fw-bold text-dark">$1200</div>
                          <div className="fs-12 text-end">6 Projects</div>
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="hstack gap-3">
                          <div className="avatar-image avatar-lg p-2 rounded">
                            <img
                              className="img-fluid"
                              src="assets/images/brand/app-store.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <a href="javascript:void(0);" className="d-block">
                              iOS Apps Development
                            </a>
                            <span className="fs-12 text-muted">
                              Development
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="fw-bold text-dark">$1450</div>
                          <div className="fs-12 text-end">3 Projects</div>
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="hstack gap-3">
                          <div className="avatar-image avatar-lg p-2 rounded">
                            <img
                              className="img-fluid"
                              src="assets/images/brand/figma.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <a href="javascript:void(0);" className="d-block">
                              Figma Dashboard Design
                            </a>
                            <span className="fs-12 text-muted">
                              UI/UX Design
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="fw-bold text-dark">$1250</div>
                          <div className="fs-12 text-end">5 Projects</div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="javascript:void(0);"
                      className="card-footer fs-11 fw-bold text-uppercase text-center py-4"
                    >
                      Full Details
                    </a>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card mb-4 stretch stretch-full">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="avatar-text">
                          <i className="feather feather-star"></i>
                        </div>
                        <div>
                          <div className="fw-semibold text-dark">
                            Tasks Completed
                          </div>
                          <div className="fs-12 text-muted">
                            22/35 completed
                          </div>
                        </div>
                      </div>
                      <div className="fs-4 fw-bold text-dark">22/35</div>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-between gap-4">
                      <div id="task-completed-area-chart"></div>
                      <div className="fs-12 text-muted text-nowrap">
                        <span className="fw-semibold text-primary">
                          28% more
                        </span>
                        <br />
                        <span>from last week</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card mb-4 stretch stretch-full">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="avatar-text">
                          <i className="feather feather-file-text"></i>
                        </div>
                        <div>
                          <div className="fw-semibold text-dark">New Tasks</div>
                          <div className="fs-12 text-muted">0/20 tasks</div>
                        </div>
                      </div>
                      <div className="fs-4 fw-bold text-dark">5/20</div>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-between gap-4">
                      <div id="new-tasks-area-chart"></div>
                      <div className="fs-12 text-muted text-nowrap">
                        <span className="fw-semibold text-success">
                          34% more
                        </span>
                        <br />
                        <span>from last week</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card mb-4 stretch stretch-full">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="avatar-text">
                          <i className="feather feather-airplay"></i>
                        </div>
                        <div>
                          <div className="fw-semibold text-dark">
                            Project Done
                          </div>
                          <div className="fs-12 text-muted">20/30 project</div>
                        </div>
                      </div>
                      <div className="fs-4 fw-bold text-dark">20/30</div>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-between gap-4">
                      <div id="project-done-area-chart"></div>
                      <div className="fs-12 text-muted text-nowrap">
                        <span className="fw-semibold text-danger">
                          42% more
                        </span>
                        <br />
                        <span>from last week</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Leads Overview</h5>
                      <div className="card-header-action">
                        <div className="card-header-btn">
                          <div data-bs-toggle="tooltip" title="Delete">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-danger"
                              data-bs-toggle="remove"
                            >
                              {" "}
                            </a>
                          </div>
                          <div data-bs-toggle="tooltip" title="Refresh">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-warning"
                              data-bs-toggle="refresh"
                            >
                              {" "}
                            </a>
                          </div>
                          <div
                            data-bs-toggle="tooltip"
                            title="Maximize/Minimize"
                          >
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-success"
                              data-bs-toggle="expand"
                            >
                              {" "}
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-sm"
                            data-bs-toggle="dropdown"
                            data-bs-offset="25, 25"
                          >
                            <div data-bs-toggle="tooltip" title="Options">
                              <i className="feather-more-vertical"></i>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-at-sign"></i>New
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-calendar"></i>Event
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-bell"></i>Snoozed
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-trash-2"></i>Deleted
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-settings"></i>Settings
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-life-buoy"></i>Tips & Tricks
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body custom-card-action">
                      <div id="leads-overview-donut"></div>
                      <div className="row g-2">
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#3454d1" }}
                            ></span>

                            <span>
                              New
                              <span className="fs-10 text-muted ms-1">
                                (20K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#0d519e" }}
                            ></span>
                            <span>
                              Contacted
                              <span className="fs-10 text-muted ms-1">
                                (15K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#1976d2" }}
                            ></span>
                            <span>
                              Qualified
                              <span className="fs-10 text-muted ms-1">
                                (10K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#1e88e5" }}
                            ></span>
                            <span>
                              Working
                              <span className="fs-10 text-muted ms-1">
                                (18K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#2196f3" }}
                            ></span>
                            <span>
                              Customer
                              <span className="fs-10 text-muted ms-1">
                                (10K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#42a5f5" }}
                            ></span>
                            <span>
                              Proposal
                              <span className="fs-10 text-muted ms-1">
                                (15K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#64b5f6" }}
                            ></span>
                            <span>
                              Leads
                              <span className="fs-10 text-muted ms-1">
                                (16K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#90caf9" }}
                            ></span>
                            <span>
                              Progress
                              <span className="fs-10 text-muted ms-1">
                                (14K)
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-4">
                          <a
                            href="javascript:void(0);"
                            className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                          >
                            <span
                              className="wd-7 ht-7 rounded-circle d-inline-block"
                              style={{ backgroundColor: "#aad6fa" }}
                            ></span>
                            <span>
                              Others
                              <span className="fs-10 text-muted ms-1">
                                (10K)
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-8">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Latest Leads</h5>
                      <div className="card-header-action">
                        <div className="card-header-btn">
                          <div data-bs-toggle="tooltip" title="Delete">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-danger"
                              data-bs-toggle="remove"
                            >
                              {" "}
                            </a>
                          </div>
                          <div data-bs-toggle="tooltip" title="Refresh">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-warning"
                              data-bs-toggle="refresh"
                            >
                              {" "}
                            </a>
                          </div>
                          <div
                            data-bs-toggle="tooltip"
                            title="Maximize/Minimize"
                          >
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-success"
                              data-bs-toggle="expand"
                            >
                              {" "}
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-sm"
                            data-bs-toggle="dropdown"
                            data-bs-offset="25, 25"
                          >
                            <div data-bs-toggle="tooltip" title="Options">
                              <i className="feather-more-vertical"></i>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-at-sign"></i>New
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-calendar"></i>Event
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-bell"></i>Snoozed
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-trash-2"></i>Deleted
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-settings"></i>Settings
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-life-buoy"></i>Tips & Tricks
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body custom-card-action p-0">
                      <div className="table-responsive">
                        <table className="table table-hover mb-0">
                          <thead>
                            <tr className="border-b">
                              <th scope="row">Users</th>
                              <th>Proposal</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th className="text-end">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="avatar-image">
                                    <img
                                      src="assets/images/avatar/2.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <a href="javascript:void(0);">
                                    <span className="d-block">
                                      Archie Cantones
                                    </span>
                                    <span className="fs-12 d-block fw-normal text-muted">
                                      <span
                                        className="__cf_email__"
                                        data-cfemail="4d2c3f2e242863392223283e0d2a202c2421632e2220"
                                      >
                                        [email&#160;protected]
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-gray-200 text-dark">
                                  Sent
                                </span>
                              </td>
                              <td>11/06/2023 10:53</td>
                              <td>
                                <span className="badge bg-soft-success text-success">
                                  Completed
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="javascript:void(0);">
                                  <i className="feather-more-vertical"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="avatar-image">
                                    <img
                                      src="assets/images/avatar/3.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <a href="javascript:void(0);">
                                    <span className="d-block">
                                      Holmes Cherryman
                                    </span>
                                    <span className="fs-12 d-block fw-normal text-muted">
                                      <span
                                        className="__cf_email__"
                                        data-cfemail="e0878f8c8d93ce8388818ea0878d81898cce838f8d"
                                      >
                                        [email&#160;protected]
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-gray-200 text-dark">
                                  New
                                </span>
                              </td>
                              <td>11/06/2023 10:53</td>
                              <td>
                                <span className="badge bg-soft-primary text-primary">
                                  In Progress{" "}
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="javascript:void(0);">
                                  <i className="feather-more-vertical"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="avatar-image">
                                    <img
                                      src="assets/images/avatar/4.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <a href="javascript:void(0);">
                                    <span className="d-block">
                                      Malanie Hanvey
                                    </span>
                                    <span className="fs-12 d-block fw-normal text-muted">
                                      <span
                                        className="__cf_email__"
                                        data-cfemail="2b474a45424e05455d4e52456b4c464a424705484446"
                                      >
                                        [email&#160;protected]
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-gray-200 text-dark">
                                  Sent
                                </span>
                              </td>
                              <td>11/06/2023 10:53</td>
                              <td>
                                <span className="badge bg-soft-success text-success">
                                  Completed
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="javascript:void(0);">
                                  <i className="feather-more-vertical"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="avatar-image">
                                    <img
                                      src="assets/images/avatar/5.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <a href="javascript:void(0);">
                                    <span className="d-block">
                                      Kenneth Hune
                                    </span>
                                    <span className="fs-12 d-block fw-normal text-muted">
                                      <span
                                        className="__cf_email__"
                                        data-cfemail="2b45454e5f43055e454e6b4c464a424705484446"
                                      >
                                        [email&#160;protected]
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-gray-200 text-dark">
                                  Returning
                                </span>
                              </td>
                              <td>11/06/2023 10:53</td>
                              <td>
                                <span className="badge bg-soft-warning text-warning">
                                  Not Interested
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="javascript:void(0);">
                                  <i className="feather-more-vertical"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="avatar-image">
                                    <img
                                      src="assets/images/avatar/6.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <a href="javascript:void(0);">
                                    <span className="d-block">
                                      Valentine Maton
                                    </span>
                                    <span className="fs-12 d-block fw-normal text-muted">
                                      <span
                                        className="__cf_email__"
                                        data-cfemail="1978757c7770777c37786d7677597e74787075377a7674"
                                      >
                                        [email&#160;protected]
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-gray-200 text-dark">
                                  Sent
                                </span>
                              </td>
                              <td>11/06/2023 10:53</td>
                              <td>
                                <span className="badge bg-soft-success text-success">
                                  Completed
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="javascript:void(0);">
                                  <i className="feather-more-vertical"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="card-footer">
                      <ul className="list-unstyled d-flex align-items-center gap-2 mb-0 pagination-common-style">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="bi bi-arrow-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="active">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">2</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="bi bi-dot"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">8</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">9</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Upcoming Schedule</h5>
                      <div className="card-header-action">
                        <div className="card-header-btn">
                          <div data-bs-toggle="tooltip" title="Delete">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-danger"
                              data-bs-toggle="remove"
                            >
                              {" "}
                            </a>
                          </div>
                          <div data-bs-toggle="tooltip" title="Refresh">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-warning"
                              data-bs-toggle="refresh"
                            >
                              {" "}
                            </a>
                          </div>
                          <div
                            data-bs-toggle="tooltip"
                            title="Maximize/Minimize"
                          >
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-success"
                              data-bs-toggle="expand"
                            >
                              {" "}
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-sm"
                            data-bs-toggle="dropdown"
                            data-bs-offset="25, 25"
                          >
                            <div data-bs-toggle="tooltip" title="Options">
                              <i className="feather-more-vertical"></i>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-at-sign"></i>New
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-calendar"></i>Event
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-bell"></i>Snoozed
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-trash-2"></i>Deleted
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-settings"></i>Settings
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-life-buoy"></i>Tips & Tricks
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="p-3 border border-dashed rounded-3 mb-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <div className="wd-50 ht-50 bg-soft-primary text-primary lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                              <span className="fs-18 fw-bold mb-1 d-block">
                                20
                              </span>
                              <span className="fs-10 fw-semibold text-uppercase d-block">
                                Dec
                              </span>
                            </div>
                            <div className="text-dark">
                              <a
                                href="javascript:void(0);"
                                className="fw-bold mb-2 text-truncate-1-line"
                              >
                                React Dashboard Design
                              </a>
                              <span className="fs-11 fw-normal text-muted text-truncate-1-line">
                                11:30am - 12:30pm
                              </span>
                            </div>
                          </div>
                          <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Janette Dalton"
                            >
                              <img
                                src="assets/images/avatar/2.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Michael Ksen"
                            >
                              <img
                                src="assets/images/avatar/3.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Socrates Itumay"
                            >
                              <img
                                src="assets/images/avatar/4.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Marianne Audrey"
                            >
                              <img
                                src="assets/images/avatar/6.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-text avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Explorer More"
                            >
                              <i className="feather-more-horizontal"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border border-dashed rounded-3 mb-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <div className="wd-50 ht-50 bg-soft-warning text-warning lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                              <span className="fs-18 fw-bold mb-1 d-block">
                                30
                              </span>
                              <span className="fs-10 fw-semibold text-uppercase d-block">
                                Dec
                              </span>
                            </div>
                            <div className="text-dark">
                              <a
                                href="javascript:void(0);"
                                className="fw-bold mb-2 text-truncate-1-line"
                              >
                                Admin Design Concept
                              </a>
                              <span className="fs-11 fw-normal text-muted text-truncate-1-line">
                                10:00am - 12:00pm
                              </span>
                            </div>
                          </div>
                          <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Janette Dalton"
                            >
                              <img
                                src="assets/images/avatar/2.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Michael Ksen"
                            >
                              <img
                                src="assets/images/avatar/3.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Marianne Audrey"
                            >
                              <img
                                src="assets/images/avatar/5.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Marianne Audrey"
                            >
                              <img
                                src="assets/images/avatar/6.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-text avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Explorer More"
                            >
                              <i className="feather-more-horizontal"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border border-dashed rounded-3 mb-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <div className="wd-50 ht-50 bg-soft-success text-success lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                              <span className="fs-18 fw-bold mb-1 d-block">
                                17
                              </span>
                              <span className="fs-10 fw-semibold text-uppercase d-block">
                                Dec
                              </span>
                            </div>
                            <div className="text-dark">
                              <a
                                href="javascript:void(0);"
                                className="fw-bold mb-2 text-truncate-1-line"
                              >
                                Standup Team Meeting
                              </a>
                              <span className="fs-11 fw-normal text-muted text-truncate-1-line">
                                8:00am - 9:00am
                              </span>
                            </div>
                          </div>
                          <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Janette Dalton"
                            >
                              <img
                                src="assets/images/avatar/2.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Michael Ksen"
                            >
                              <img
                                src="assets/images/avatar/3.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Socrates Itumay"
                            >
                              <img
                                src="assets/images/avatar/4.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Marianne Audrey"
                            >
                              <img
                                src="assets/images/avatar/5.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-text avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Explorer More"
                            >
                              <i className="feather-more-horizontal"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border border-dashed rounded-3 mb-2">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <div className="wd-50 ht-50 bg-soft-danger text-danger lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                              <span className="fs-18 fw-bold mb-1 d-block">
                                25
                              </span>
                              <span className="fs-10 fw-semibold text-uppercase d-block">
                                Dec
                              </span>
                            </div>
                            <div className="text-dark">
                              <a
                                href="javascript:void(0);"
                                className="fw-bold mb-2 text-truncate-1-line"
                              >
                                Zoom Team Meeting
                              </a>
                              <span className="fs-11 fw-normal text-muted text-truncate-1-line">
                                03:30pm - 05:30pm
                              </span>
                            </div>
                          </div>
                          <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Janette Dalton"
                            >
                              <img
                                src="assets/images/avatar/2.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Socrates Itumay"
                            >
                              <img
                                src="assets/images/avatar/4.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Marianne Audrey"
                            >
                              <img
                                src="assets/images/avatar/5.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-image avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Marianne Audrey"
                            >
                              <img
                                src="assets/images/avatar/6.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="avatar-text avatar-md"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Explorer More"
                            >
                              <i className="feather-more-horizontal"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="javascript:void(0);"
                      className="card-footer fs-11 fw-bold text-uppercase text-center py-4"
                    >
                      Upcomming Schedule
                    </a>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Project Status</h5>
                      <div className="card-header-action">
                        <div className="card-header-btn">
                          <div data-bs-toggle="tooltip" title="Delete">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-danger"
                              data-bs-toggle="remove"
                            >
                              {" "}
                            </a>
                          </div>
                          <div data-bs-toggle="tooltip" title="Refresh">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-warning"
                              data-bs-toggle="refresh"
                            >
                              {" "}
                            </a>
                          </div>
                          <div
                            data-bs-toggle="tooltip"
                            title="Maximize/Minimize"
                          >
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-success"
                              data-bs-toggle="expand"
                            >
                              {" "}
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-sm"
                            data-bs-toggle="dropdown"
                            data-bs-offset="25, 25"
                          >
                            <div data-bs-toggle="tooltip" title="Options">
                              <i className="feather-more-vertical"></i>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-at-sign"></i>New
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-calendar"></i>Event
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-bell"></i>Snoozed
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-trash-2"></i>Deleted
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-settings"></i>Settings
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-life-buoy"></i>Tips & Tricks
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body custom-card-action">
                      <div className="mb-3">
                        <div className="mb-4 pb-1 d-flex">
                          <div className="d-flex w-50 align-items-center me-3">
                            <img
                              src="assets/images/brand/app-store.png"
                              alt="laravel-logo"
                              className="me-3"
                              width="35"
                            />
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="text-truncate-1-line"
                              >
                                Apps Development
                              </a>
                              <div className="fs-11 text-muted">
                                Applications
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-grow-1 align-items-center">
                            <div className="progress w-100 me-3 ht-5">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "54%" }}
                                aria-valuenow="54"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="text-muted">54%</span>
                          </div>
                        </div>
                        <hr className="border-dashed my-3" />
                        <div className="mb-4 pb-1 d-flex">
                          <div className="d-flex w-50 align-items-center me-3">
                            <img
                              src="assets/images/brand/figma.png"
                              alt="figma-logo"
                              className="me-3"
                              width="35"
                            />
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="text-truncate-1-line"
                              >
                                Dashboard Design
                              </a>
                              <div className="fs-11 text-muted">App UI Kit</div>
                            </div>
                          </div>
                          <div className="d-flex flex-grow-1 align-items-center">
                            <div className="progress w-100 me-3 ht-5">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "86%" }}
                                aria-valuenow="86"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="text-muted">86%</span>
                          </div>
                        </div>
                        <hr className="border-dashed my-3" />
                        <div className="mb-4 pb-1 d-flex">
                          <div className="d-flex w-50 align-items-center me-3">
                            <img
                              src="assets/images/brand/facebook.png"
                              alt="vue-logo"
                              className="me-3"
                              width="35"
                            />
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="text-truncate-1-line"
                              >
                                Facebook Marketing
                              </a>
                              <div className="fs-11 text-muted">Marketing</div>
                            </div>
                          </div>
                          <div className="d-flex flex-grow-1 align-items-center">
                            <div className="progress w-100 me-3 ht-5">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="text-muted">90%</span>
                          </div>
                        </div>
                        <hr className="border-dashed my-3" />
                        <div className="mb-4 pb-1 d-flex">
                          <div className="d-flex w-50 align-items-center me-3">
                            <img
                              src="assets/images/brand/github.png"
                              alt="react-logo"
                              className="me-3"
                              width="35"
                            />
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="text-truncate-1-line"
                              >
                                React Dashboard Github
                              </a>
                              <div className="fs-11 text-muted">Dashboard</div>
                            </div>
                          </div>
                          <div className="d-flex flex-grow-1 align-items-center">
                            <div className="progress w-100 me-3 ht-5">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "37%" }}
                                aria-valuenow="37"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="text-muted">37%</span>
                          </div>
                        </div>
                        <hr className="border-dashed my-3" />
                        <div className="d-flex">
                          <div className="d-flex w-50 align-items-center me-3">
                            <img
                              src="assets/images/brand/paypal.png"
                              alt="sketch-logo"
                              className="me-3"
                              width="35"
                            />
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="text-truncate-1-line"
                              >
                                Paypal Payment Gateway
                              </a>
                              <div className="fs-11 text-muted">Payment</div>
                            </div>
                          </div>
                          <div className="d-flex flex-grow-1 align-items-center">
                            <div className="progress w-100 me-3 ht-5">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "29%" }}
                                aria-valuenow="29"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="text-muted">29%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="javascript:void(0);"
                      className="card-footer fs-11 fw-bold text-uppercase text-center"
                    >
                      Upcomming Projects
                    </a>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Team Progress</h5>
                      <div className="card-header-action">
                        <div className="card-header-btn">
                          <div data-bs-toggle="tooltip" title="Delete">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-danger"
                              data-bs-toggle="remove"
                            >
                              {" "}
                            </a>
                          </div>
                          <div data-bs-toggle="tooltip" title="Refresh">
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-warning"
                              data-bs-toggle="refresh"
                            >
                              {" "}
                            </a>
                          </div>
                          <div
                            data-bs-toggle="tooltip"
                            title="Maximize/Minimize"
                          >
                            <a
                              href="javascript:void(0);"
                              className="avatar-text avatar-xs bg-success"
                              data-bs-toggle="expand"
                            >
                              {" "}
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-sm"
                            data-bs-toggle="dropdown"
                            data-bs-offset="25, 25"
                          >
                            <div data-bs-toggle="tooltip" title="Options">
                              <i className="feather-more-vertical"></i>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-at-sign"></i>New
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-calendar"></i>Event
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-bell"></i>Snoozed
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-trash-2"></i>Deleted
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-settings"></i>Settings
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <i className="feather-life-buoy"></i>Tips & Tricks
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body custom-card-action">
                      <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                        <div className="hstack gap-3">
                          <div className="avatar-image">
                            <img
                              src="assets/images/avatar/1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <a href="javascript:void(0);">Alexandra Della</a>
                            <div className="fs-11 text-muted">
                              Frontend Developer
                            </div>
                          </div>
                        </div>
                        <div className="team-progress-1"></div>
                      </div>
                      <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                        <div className="hstack gap-3">
                          <div className="avatar-image">
                            <img
                              src="assets/images/avatar/2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <a href="javascript:void(0);">Archie Cantones</a>
                            <div className="fs-11 text-muted">
                              UI/UX Designer
                            </div>
                          </div>
                        </div>
                        <div className="team-progress-2"></div>
                      </div>
                      <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                        <div className="hstack gap-3">
                          <div className="avatar-image">
                            <img
                              src="assets/images/avatar/3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <a href="javascript:void(0);">Malanie Hanvey</a>
                            <div className="fs-11 text-muted">
                              Backend Developer
                            </div>
                          </div>
                        </div>
                        <div className="team-progress-3"></div>
                      </div>
                      <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-2">
                        <div className="hstack gap-3">
                          <div className="avatar-image">
                            <img
                              src="assets/images/avatar/4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <a href="javascript:void(0);">Kenneth Hune</a>
                            <div className="fs-11 text-muted">
                              Digital Marketer
                            </div>
                          </div>
                        </div>
                        <div className="team-progress-4"></div>
                      </div>
                    </div>
                    <a
                      href="javascript:void(0);"
                      className="card-footer fs-11 fw-bold text-uppercase text-center"
                    >
                      Update 30 Min Ago
                    </a>
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
    </div>
  );
}

export default Dashboard;
