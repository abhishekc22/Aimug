import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme.min.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash, BiPlus, BiPencil } from "react-icons/bi";

function Blogs_admin() {
  const [blog, setBlog] = useState([]);
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
      .get(`blogs/`)
      .then((response) => {
        setBlog(response.data);
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
                    <span className="nxl-mtext">Dashboards</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <Link to="/blogs_admin" className="nxl-link">
                        {" "}
                        blogs
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <header className="nxl-header">
          <div className="header-wrapper">
            <div className="header-left d-flex align-items-center gap-4">
              <a
                href="javascript:void(0);"
                className="nxl-head-mobile-toggler"
                id="mobile-collapse"
              >
                <div className="hamburger hamburger--arrowturn">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </a>

              <div className="nxl-navigation-toggle">
                <a href="javascript:void(0);" id="menu-mini-button">
                  <i className="feather-align-left"></i>
                </a>
                <a href="" id="menu-expend-button" style={{ display: "none" }}>
                  <i className="feather-arrow-right"></i>
                </a>
              </div>

              <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                <a href="" id="nxl-lavel-mega-menu-open">
                  <i className="feather-align-left"></i>
                </a>
              </div>

              <div className="nxl-drp-link nxl-lavel-mega-menu">
                <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                  <a href="" id="nxl-lavel-mega-menu-hide">
                    <i className="feather-arrow-left me-2"></i>
                    <span>Back</span>
                  </a>
                </div>
                <div className="nxl-lavel-mega-menu-wrapper d-flex gap-3">
                  <div className="dropdown nxl-h-item nxl-lavel-menu">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-md bg-primary text-white"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      <i className="feather-plus"></i>
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-send"></i>
                            <span>Applications</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a href="apps-chat.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Chat</span>
                          </a>
                          <a href="apps-email.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Email</span>
                          </a>
                          <a href="apps-tasks.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Tasks</span>
                          </a>
                          <a href="apps-notes.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Notes</span>
                          </a>
                          <a href="apps-storage.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Storage</span>
                          </a>
                          <a
                            href="apps-calendar.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Calendar</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-cast"></i>
                            <span>Reports</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="reports-sales.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Sales Report</span>
                          </a>
                          <a
                            href="reports-leads.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Leads Report</span>
                          </a>
                          <a
                            href="reports-project.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Project Report</span>
                          </a>
                          <a
                            href="reports-timesheets.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Timesheets Report</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-at-sign"></i>
                            <span>Proposal</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a href="proposal.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Proposal</span>
                          </a>
                          <a
                            href="proposal-view.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Proposal View</span>
                          </a>
                          <a
                            href="proposal-edit.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Proposal Edit</span>
                          </a>
                          <a
                            href="proposal-create.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Proposal Create</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-dollar-sign"></i>
                            <span>Payment</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a href="payment.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Payment</span>
                          </a>
                          <a href="invoice-view.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Invoice View</span>
                          </a>
                          <a
                            href="invoice-create.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Invoice Create</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-users"></i>
                            <span>Customers</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a href="customers.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Customers</span>
                          </a>
                          <a
                            href="customers-view.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Customers View</span>
                          </a>
                          <a
                            href="customers-create.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Customers Create</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-alert-circle"></i>
                            <span>Leads</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a href="leads.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Leads</span>
                          </a>
                          <a href="leads-view.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Leads View</span>
                          </a>
                          <a href="leads-create.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Leads Create</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-briefcase"></i>
                            <span>Projects</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a href="projects.html" className="dropdown-item">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Projects</span>
                          </a>
                          <a
                            href="projects-view.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Projects View</span>
                          </a>
                          <a
                            href="projects-create.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Projects Create</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-layout"></i>
                            <span>Widgets</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="widgets-lists.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Lists</span>
                          </a>
                          <a
                            href="widgets-tables.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Tables</span>
                          </a>
                          <a
                            href="widgets-charts.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Charts</span>
                          </a>
                          <a
                            href="widgets-statistics.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Statistics</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="feather-power"></i>
                            <span>Authentication</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0"></i>
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <div className="dropdown nxl-level-menu">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <span className="hstack">
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Login</span>
                              </span>
                              <i className="feather-chevron-right ms-auto me-0"></i>
                            </a>
                            <div className="dropdown-menu nxl-h-dropdown">
                              <a
                                href="auth-login-cover.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Cover</span>
                              </a>
                              <a
                                href="auth-login-minimal.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Minimal</span>
                              </a>
                              <a
                                href="auth-login-creative.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Creative</span>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown nxl-level-menu">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <span className="hstack">
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Register</span>
                              </span>
                              <i className="feather-chevron-right ms-auto me-0"></i>
                            </a>
                            <div className="dropdown-menu nxl-h-dropdown">
                              <a
                                href="auth-register-cover.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Cover</span>
                              </a>
                              <a
                                href="auth-register-minimal.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Minimal</span>
                              </a>
                              <a
                                href="auth-register-creative.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Creative</span>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown nxl-level-menu">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <span className="hstack">
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Error-404</span>
                              </span>
                              <i className="feather-chevron-right ms-auto me-0"></i>
                            </a>
                            <div className="dropdown-menu nxl-h-dropdown">
                              <a
                                href="auth-404-cover.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Cover</span>
                              </a>
                              <a
                                href="auth-404-minimal.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Minimal</span>
                              </a>
                              <a
                                href="auth-404-creative.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Creative</span>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown nxl-level-menu">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <span className="hstack">
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Reset Pass</span>
                              </span>
                              <i className="feather-chevron-right ms-auto me-0"></i>
                            </a>
                            <div className="dropdown-menu nxl-h-dropdown">
                              <a
                                href="auth-reset-cover.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Cover</span>
                              </a>
                              <a
                                href="auth-reset-minimal.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Minimal</span>
                              </a>
                              <a
                                href="auth-reset-creative.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Creative</span>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown nxl-level-menu">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <span className="hstack">
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Verify OTP</span>
                              </span>
                              <i className="feather-chevron-right ms-auto me-0"></i>
                            </a>
                            <div className="dropdown-menu nxl-h-dropdown">
                              <a
                                href="auth-verify-cover.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Cover</span>
                              </a>
                              <a
                                href="auth-verify-minimal.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Minimal</span>
                              </a>
                              <a
                                href="auth-verify-creative.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Creative</span>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown nxl-level-menu">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <span className="hstack">
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Maintenance</span>
                              </span>
                              <i className="feather-chevron-right ms-auto me-0"></i>
                            </a>
                            <div className="dropdown-menu nxl-h-dropdown">
                              <a
                                href="auth-maintenance-cover.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Cover</span>
                              </a>
                              <a
                                href="auth-maintenance-minimal.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Minimal</span>
                              </a>
                              <a
                                href="auth-maintenance-creative.html"
                                className="dropdown-item"
                              >
                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                <span>Creative</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-plus"></i>
                        <span>Add New Items</span>
                      </a>
                    </div>
                  </div>

                  <div className="dropdown nxl-h-item nxl-mega-menu">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-light-brand"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      {" "}
                      Mega Menu{" "}
                    </a>
                    <div
                      className="dropdown-menu nxl-h-dropdown"
                      id="mega-menu-dropdown"
                    >
                      <div className="d-lg-flex align-items-start">
                        <div
                          className="nav flex-column nxl-mega-menu-tabs"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <button
                            className="nav-link active nxl-mega-menu-sm"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-general"
                            type="button"
                            role="tab"
                          >
                            <span className="menu-icon">
                              <i className="feather-airplay"></i>
                            </span>
                            <span className="menu-title">General</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right"></i>
                            </span>
                          </button>
                          <button
                            className="nav-link nxl-mega-menu-md"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-applications"
                            type="button"
                            role="tab"
                          >
                            <span className="menu-icon">
                              <i className="feather-send"></i>
                            </span>
                            <span className="menu-title">Applications</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right"></i>
                            </span>
                          </button>
                          <button
                            className="nav-link nxl-mega-menu-lg"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-integrations"
                            type="button"
                            role="tab"
                          >
                            <span className="menu-icon">
                              <i className="feather-link-2"></i>
                            </span>
                            <span className="menu-title">Integrations</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right"></i>
                            </span>
                          </button>
                          <button
                            className="nav-link nxl-mega-menu-xl"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-components"
                            type="button"
                            role="tab"
                          >
                            <span className="menu-icon">
                              <i className="feather-layers"></i>
                            </span>
                            <span className="menu-title">Components</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right"></i>
                            </span>
                          </button>
                          <button
                            className="nav-link nxl-mega-menu-xxl"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-authentication"
                            type="button"
                            role="tab"
                          >
                            <span className="menu-icon">
                              <i className="feather-cpu"></i>
                            </span>
                            <span className="menu-title">Authentication</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right"></i>
                            </span>
                          </button>
                          <button
                            className="nav-link nxl-mega-menu-full"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-miscellaneous"
                            type="button"
                            role="tab"
                          >
                            <span className="menu-icon">
                              <i className="feather-bluetooth"></i>
                            </span>
                            <span className="menu-title">Miscellaneous</span>
                            <span className="menu-arrow">
                              <i className="feather-chevron-right"></i>
                            </span>
                          </button>
                        </div>

                        <div className="tab-content nxl-mega-menu-tabs-content">
                          <div
                            className="tab-pane fade show active"
                            id="v-pills-general"
                            role="tabpanel"
                          >
                            <div className="mb-4 rounded-3 border">
                              <img
                                src="assets/images/banner/mockup.png"
                                alt=""
                                className="img-fluid rounded-3"
                              />
                            </div>
                            <h6 className="fw-bolder">
                              Duralux - Admin Dashboard UiKit
                            </h6>
                            <p className="fs-12 fw-normal text-muted text-truncate-3-line">
                              Get started Duralux with Duralux up and running.
                              Duralux bootstrap template docs helps you to get
                              started with simple html codes.
                            </p>
                            <a
                              href="javascript:void(0);"
                              className="fs-13 fw-bold text-primary"
                            >
                              Get Started &rarr;
                            </a>
                          </div>

                          <div
                            className="tab-pane fade"
                            id="v-pills-applications"
                            role="tabpanel"
                          >
                            <div className="row g-4">
                              <div className="col-lg-6">
                                <h6 className="dropdown-item-title">
                                  Applications
                                </h6>
                                <a
                                  href="apps-chat.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                  <span>Chat</span>
                                </a>
                                <a
                                  href="apps-email.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                  <span>Email</span>
                                </a>
                                <a
                                  href="apps-tasks.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                  <span>Tasks</span>
                                </a>
                                <a
                                  href="apps-notes.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                  <span>Notes</span>
                                </a>
                                <a
                                  href="apps-storage.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                  <span>Storage</span>
                                </a>
                                <a
                                  href="apps-calendar.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                  <span>Calendar</span>
                                </a>
                              </div>
                              <div className="col-lg-6">
                                <div className="nxl-mega-menu-image">
                                  <img
                                    src="assets/images/general/full-avatar.png"
                                    alt=""
                                    className="img-fluid full-user-avtar"
                                  />
                                </div>
                              </div>
                            </div>
                            <hr className="border-top-dashed" />
                            <div className="d-lg-flex align-items-center justify-content-between">
                              <div>
                                <h6 className="menu-item-heading text-truncate-1-line">
                                  Need more application?
                                </h6>
                                <p className="fs-12 text-muted mb-0 text-truncate-3-line">
                                  We are ready to build custom applications.
                                </p>
                              </div>
                              <div className="mt-2 mt-lg-0">
                                <a
                                  href="https://bestwpware.com/cdn-cgi/l/email-protection#1c6b6e7d6c7f7378796e6f5c7b717d7570327f7371"
                                  className="fs-13 fw-bold text-primary"
                                >
                                  Contact Us &rarr;
                                </a>
                              </div>
                            </div>
                          </div>

                          <div
                            className="tab-pane fade"
                            id="v-pills-integrations"
                            role="tabpanel"
                          >
                            <div className="row g-lg-4 nxl-mega-menu-integrations">
                              <div className="col-lg-12 d-lg-flex align-items-center justify-content-between mb-4 mb-lg-0">
                                <div>
                                  <h6 className="fw-bolder text-dark">
                                    Integrations
                                  </h6>
                                  <p className="fs-12 text-muted mb-0">
                                    Connect amazing apps on your bucket.
                                  </p>
                                </div>
                                <div className="mt-2 mt-lg-0">
                                  <a
                                    href="javascript:void(0);"
                                    className="fs-13 text-primary"
                                  >
                                    Add New &rarr;
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/app-store.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">
                                    App Store
                                  </div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/spotify.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Spotify</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/figma.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Figma</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/shopify.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Shopify</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/paypal.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Paypal</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/gmail.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Gmail</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/dropbox.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Dropbox</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/google-drive.png"
                                      alt=""
                                      className="img-fluid0"
                                    />
                                  </div>
                                  <div className="menu-item-title">
                                    Google Drive
                                  </div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/github.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Github</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/gitlab.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Gitlab</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/facebook.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">
                                    Facebook
                                  </div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/pinterest.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">
                                    Pinterest
                                  </div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/instagram.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">
                                    Instagram
                                  </div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/twitter.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Twitter</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <div className="menu-item-icon">
                                    <img
                                      src="assets/images/brand/youtube.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="menu-item-title">Youtube</div>
                                  <div className="menu-item-arrow">
                                    <i className="feather-arrow-right"></i>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <hr className="border-top-dashed" />
                            <p className="fs-13 text-muted mb-0">
                              Need help? Contact our{" "}
                              <a
                                href="javascript:void(0);"
                                className="fst-italic"
                              >
                                support center
                              </a>
                            </p>
                          </div>

                          <div
                            className="tab-pane fade"
                            id="v-pills-components"
                            role="tabpanel"
                          >
                            <div className="row g-4 align-items-center">
                              <div className="col-xl-8">
                                <div className="row g-4">
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-item-title">
                                      Navigation
                                    </h6>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      CRM
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Analytics
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Sales
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Leads
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Projects
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Timesheets
                                    </a>
                                  </div>
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-item-title">
                                      Pages
                                    </h6>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Leads{" "}
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Payments
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Projects
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Proposals
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Customers
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Documentations
                                    </a>
                                  </div>
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-item-title">
                                      Authentication
                                    </h6>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Login
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Regiser
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Error-404
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Reset Pass
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Verify OTP
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Maintenance
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4">
                                <div className="nxl-mega-menu-image">
                                  <img
                                    src="assets/images/banner/1.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="mt-4">
                                  <a
                                    href="https://bestwpware.com/cdn-cgi/l/email-protection#ceb9bcafbeada1aaabbcbd8ea9a3afa7a2e0ada1a3"
                                    className="fs-13 fw-bold"
                                  >
                                    View all resources on Duralux &rarr;
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="tab-pane fade"
                            id="v-pills-authentication"
                            role="tabpanel"
                          >
                            <div className="row g-4 align-items-center nxl-mega-menu-authentication">
                              <div className="col-xl-8">
                                <div className="row g-4">
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-item-title">
                                      Cover
                                    </h6>
                                    <a
                                      href="auth-login-cover.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Login</span>
                                    </a>
                                    <a
                                      href="auth-register-cover.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Register</span>
                                    </a>
                                    <a
                                      href="auth-404-cover.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Error-404</span>
                                    </a>
                                    <a
                                      href="auth-reset-cover.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Reset Pass</span>
                                    </a>
                                    <a
                                      href="auth-verify-cover.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Verify OTP</span>
                                    </a>
                                    <a
                                      href="auth-maintenance-cover.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Maintenance</span>
                                    </a>
                                  </div>
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-item-title">
                                      Minimal
                                    </h6>
                                    <a
                                      href="auth-login-minimal.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Login</span>
                                    </a>
                                    <a
                                      href="auth-register-minimal.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Register</span>
                                    </a>
                                    <a
                                      href="auth-404-minimal.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Error-404</span>
                                    </a>
                                    <a
                                      href="auth-reset-minimal.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Reset Pass</span>
                                    </a>
                                    <a
                                      href="auth-verify-minimal.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Verify OTP</span>
                                    </a>
                                    <a
                                      href="auth-maintenance-minimal.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Maintenance</span>
                                    </a>
                                  </div>
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-item-title">
                                      Creative
                                    </h6>
                                    <a
                                      href="auth-login-creative.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Login</span>
                                    </a>
                                    <a
                                      href="auth-register-creative.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Register</span>
                                    </a>
                                    <a
                                      href="auth-404-creative.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Error-404</span>
                                    </a>
                                    <a
                                      href="auth-reset-creative.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Reset Pass</span>
                                    </a>
                                    <a
                                      href="auth-verify-creative.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Verify OTP</span>
                                    </a>
                                    <a
                                      href="auth-maintenance-creative.html"
                                      className="dropdown-item"
                                    >
                                      <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                      <span>Maintenance</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4">
                                <div
                                  id="carouselResourcesCaptions"
                                  className="carousel slide"
                                  data-bs-ride="carousel"
                                >
                                  <div className="carousel-indicators">
                                    <button
                                      type="button"
                                      data-bs-target="#carouselResourcesCaptions"
                                      data-bs-slide-to="0"
                                      className="active"
                                      aria-current="true"
                                    ></button>
                                    <button
                                      type="button"
                                      data-bs-target="#carouselResourcesCaptions"
                                      data-bs-slide-to="1"
                                    ></button>
                                    <button
                                      type="button"
                                      data-bs-target="#carouselResourcesCaptions"
                                      data-bs-slide-to="2"
                                    ></button>
                                    <button
                                      type="button"
                                      data-bs-target="#carouselResourcesCaptions"
                                      data-bs-slide-to="3"
                                    ></button>
                                    <button
                                      type="button"
                                      data-bs-target="#carouselResourcesCaptions"
                                      data-bs-slide-to="4"
                                    ></button>
                                    <button
                                      type="button"
                                      data-bs-target="#carouselResourcesCaptions"
                                      data-bs-slide-to="5"
                                    ></button>
                                  </div>
                                  <div className="carousel-inner rounded-3">
                                    <div className="carousel-item active">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/6.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Shopify eCommerce Store
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder
                                          content for the first slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/5.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          iOS Apps Development
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder
                                          content for the second slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/4.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Figma Dashboard Design
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder
                                          content for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/3.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          React Dashboard Design
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder
                                          content for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/2.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Standup Team Meeting
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder
                                          content for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/1.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Zoom Team Meeting
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder
                                          content for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselResourcesCaptions"
                                    data-bs-slide="prev"
                                  >
                                    <span
                                      className="carousel-control-prev-icon"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                      Previous
                                    </span>
                                  </button>
                                  <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselResourcesCaptions"
                                    data-bs-slide="next"
                                  >
                                    <span
                                      className="carousel-control-next-icon"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                      Next
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="tab-pane fade nxl-mega-menu-miscellaneous"
                            id="v-pills-miscellaneous"
                            role="tabpanel"
                          >
                            <ul
                              className="nav nav-tabs flex-column flex-lg-row nxl-mega-menu-miscellaneous-tabs"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link active"
                                  data-bs-toggle="tab"
                                  data-bs-target="#v-pills-projects"
                                  type="button"
                                  role="tab"
                                >
                                  <span className="menu-icon">
                                    <i className="feather-cast"></i>
                                  </span>
                                  <span className="menu-title">Projects</span>
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  data-bs-target="#v-pills-services"
                                  type="button"
                                  role="tab"
                                >
                                  <span className="menu-icon">
                                    <i className="feather-check-square"></i>
                                  </span>
                                  <span className="menu-title">Services</span>
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  data-bs-target="#v-pills-features"
                                  type="button"
                                  role="tab"
                                >
                                  <span className="menu-icon">
                                    <i className="feather-airplay"></i>
                                  </span>
                                  <span className="menu-title">Features</span>
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  data-bs-target="#v-pills-blogs"
                                  type="button"
                                  role="tab"
                                >
                                  <span className="menu-icon">
                                    <i className="feather-bold"></i>
                                  </span>
                                  <span className="menu-title">Blogs</span>
                                </button>
                              </li>
                            </ul>
                            <div className="tab-content nxl-mega-menu-miscellaneous-content">
                              <div
                                className="tab-pane fade active show"
                                id="v-pills-projects"
                                role="tabpanel"
                              >
                                <div className="row g-4">
                                  <div className="col-xxl-2 d-lg-none d-xxl-block">
                                    <h6 className="dropdown-item-title">
                                      Categories
                                    </h6>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Support
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Services
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Applicatios
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      eCommerce
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Development
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Miscellaneous
                                    </a>
                                  </div>
                                  <div className="col-xxl-10">
                                    <div className="row g-4">
                                      <div className="col-xl-6">
                                        <div className="d-lg-flex align-items-center gap-3">
                                          <div className="wd-150 rounded-3">
                                            <img
                                              src="assets/images/banner/1.jpg"
                                              alt=""
                                              className="img-fluid rounded-3"
                                            />
                                          </div>
                                          <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Shopify eCommerce Store
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit. Sint
                                              nam ullam iure eum sed rerum
                                              libero quis doloremque maiores
                                              veritatis?
                                            </p>
                                            <div className="hstack gap-2 mt-3">
                                              <div className="avatar-image avatar-sm">
                                                <img
                                                  src="assets/images/avatar/1.png"
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <a
                                                href="javascript:void(0);"
                                                className="fs-12"
                                              >
                                                Alexandra Della
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-6">
                                        <div className="d-lg-flex align-items-center gap-3">
                                          <div className="wd-150 rounded-3">
                                            <img
                                              src="assets/images/banner/2.jpg"
                                              alt=""
                                              className="img-fluid rounded-3"
                                            />
                                          </div>
                                          <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                iOS Apps Development
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit. Sint
                                              nam ullam iure eum sed rerum
                                              libero quis doloremque maiores
                                              veritatis?
                                            </p>
                                            <div className="hstack gap-2 mt-3">
                                              <div className="avatar-image avatar-sm">
                                                <img
                                                  src="assets/images/avatar/2.png"
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <a
                                                href="javascript:void(0);"
                                                className="fs-12"
                                              >
                                                Green Cute
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-6">
                                        <div className="d-lg-flex align-items-center gap-3">
                                          <div className="wd-150 rounded-3">
                                            <img
                                              src="assets/images/banner/3.jpg"
                                              alt=""
                                              className="img-fluid rounded-3"
                                            />
                                          </div>
                                          <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Figma Dashboard Design
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit. Sint
                                              nam ullam iure eum sed rerum
                                              libero quis doloremque maiores
                                              veritatis?
                                            </p>
                                            <div className="hstack gap-2 mt-3">
                                              <div className="avatar-image avatar-sm">
                                                <img
                                                  src="assets/images/avatar/3.png"
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <a
                                                href="javascript:void(0);"
                                                className="fs-12"
                                              >
                                                Malanie Hanvey
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-6">
                                        <div className="d-lg-flex align-items-center gap-3">
                                          <div className="wd-150 rounded-3">
                                            <img
                                              src="assets/images/banner/4.jpg"
                                              alt=""
                                              className="img-fluid rounded-3"
                                            />
                                          </div>
                                          <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                React Dashboard Design
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit. Sint
                                              nam ullam iure eum sed rerum
                                              libero quis doloremque maiores
                                              veritatis?
                                            </p>
                                            <div className="hstack gap-2 mt-3">
                                              <div className="avatar-image avatar-sm">
                                                <img
                                                  src="assets/images/avatar/4.png"
                                                  alt=""
                                                  className="img-fluid"
                                                />
                                              </div>
                                              <a
                                                href="javascript:void(0);"
                                                className="fs-12"
                                              >
                                                Kenneth Hune
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-services"
                                role="tabpanel"
                              >
                                <div className="row g-4 nxl-mega-menu-miscellaneous-services">
                                  <div className="col-xl-8">
                                    <div className="row g-4">
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg rounded bg-primary text-white">
                                            <i className="feather-bar-chart-2 mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Analytics Services
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg rounded bg-danger text-white">
                                            <i className="feather-feather mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Content Writing
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg rounded bg-warning text-white">
                                            <i className="feather-bell mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                SEO (Search Engine Optimization)
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg rounded bg-success text-white">
                                            <i className="feather-shield mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Security Services
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg rounded bg-teal text-white">
                                            <i className="feather-shopping-cart mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                eCommerce Services
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg rounded bg-dark text-white">
                                            <i className="feather-life-buoy mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Support Services
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-12">
                                        <div className="p-3 bg-soft-dark text-dark rounded d-lg-flex align-items-center justify-content-between">
                                          <div className="fs-13">
                                            <i className="feather-star me-2"></i>
                                            <span>
                                              View all services on Duralux.
                                            </span>
                                          </div>
                                          <div className="mt-2 mt-lg-0">
                                            <a
                                              href="javascript:void(0);"
                                              className="fs-13 text-primary"
                                            >
                                              Learn More &rarr;
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <div
                                      id="carouselServicesCaptions"
                                      className="carousel slide"
                                      data-bs-ride="carousel"
                                    >
                                      <div className="carousel-indicators">
                                        <button
                                          type="button"
                                          data-bs-target="#carouselServicesCaptions"
                                          data-bs-slide-to="0"
                                          className="active"
                                          aria-current="true"
                                        ></button>
                                        <button
                                          type="button"
                                          data-bs-target="#carouselServicesCaptions"
                                          data-bs-slide-to="1"
                                        ></button>
                                        <button
                                          type="button"
                                          data-bs-target="#carouselServicesCaptions"
                                          data-bs-slide-to="2"
                                        ></button>
                                        <button
                                          type="button"
                                          data-bs-target="#carouselServicesCaptions"
                                          data-bs-slide-to="3"
                                        ></button>
                                        <button
                                          type="button"
                                          data-bs-target="#carouselServicesCaptions"
                                          data-bs-slide-to="4"
                                        ></button>
                                        <button
                                          type="button"
                                          data-bs-target="#carouselServicesCaptions"
                                          data-bs-slide-to="5"
                                        ></button>
                                      </div>
                                      <div className="carousel-inner rounded-3">
                                        <div className="carousel-item active">
                                          <div className="nxl-mega-menu-image">
                                            <img
                                              src="assets/images/banner/6.jpg"
                                              alt=""
                                              className="img-fluid d-block w-100"
                                            />
                                          </div>
                                          <div className="carousel-caption">
                                            <h5 className="carousel-caption-title text-truncate-1-line">
                                              Shopify eCommerce Store
                                            </h5>
                                            <p className="carousel-caption-desc">
                                              Some representative placeholder
                                              content for the first slide.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="carousel-item">
                                          <div className="nxl-mega-menu-image">
                                            <img
                                              src="assets/images/banner/5.jpg"
                                              alt=""
                                              className="img-fluid d-block w-100"
                                            />
                                          </div>
                                          <div className="carousel-caption">
                                            <h5 className="carousel-caption-title text-truncate-1-line">
                                              iOS Apps Development
                                            </h5>
                                            <p className="carousel-caption-desc">
                                              Some representative placeholder
                                              content for the second slide.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="carousel-item">
                                          <div className="nxl-mega-menu-image">
                                            <img
                                              src="assets/images/banner/4.jpg"
                                              alt=""
                                              className="img-fluid d-block w-100"
                                            />
                                          </div>
                                          <div className="carousel-caption">
                                            <h5 className="carousel-caption-title text-truncate-1-line">
                                              Figma Dashboard Design
                                            </h5>
                                            <p className="carousel-caption-desc">
                                              Some representative placeholder
                                              content for the third slide.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="carousel-item">
                                          <div className="nxl-mega-menu-image">
                                            <img
                                              src="assets/images/banner/3.jpg"
                                              alt=""
                                              className="img-fluid d-block w-100"
                                            />
                                          </div>
                                          <div className="carousel-caption">
                                            <h5 className="carousel-caption-title text-truncate-1-line">
                                              React Dashboard Design
                                            </h5>
                                            <p className="carousel-caption-desc">
                                              Some representative placeholder
                                              content for the third slide.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="carousel-item">
                                          <div className="nxl-mega-menu-image">
                                            <img
                                              src="assets/images/banner/2.jpg"
                                              alt=""
                                              className="img-fluid d-block w-100"
                                            />
                                          </div>
                                          <div className="carousel-caption">
                                            <h5 className="carousel-caption-title text-truncate-1-line">
                                              Standup Team Meeting
                                            </h5>
                                            <p className="carousel-caption-desc">
                                              Some representative placeholder
                                              content for the third slide.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="carousel-item">
                                          <div className="nxl-mega-menu-image">
                                            <img
                                              src="assets/images/banner/1.jpg"
                                              alt=""
                                              className="img-fluid d-block w-100"
                                            />
                                          </div>
                                          <div className="carousel-caption">
                                            <h5 className="carousel-caption-title text-truncate-1-line">
                                              Zoom Team Meeting
                                            </h5>
                                            <p className="carousel-caption-desc">
                                              Some representative placeholder
                                              content for the third slide.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselServicesCaptions"
                                        data-bs-slide="prev"
                                      >
                                        <span
                                          className="carousel-control-prev-icon"
                                          aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                          Previous
                                        </span>
                                      </button>
                                      <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselServicesCaptions"
                                        data-bs-slide="next"
                                      >
                                        <span
                                          className="carousel-control-next-icon"
                                          aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                          Next
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-features"
                                role="tabpanel"
                              >
                                <div className="row g-4 nxl-mega-menu-miscellaneous-features">
                                  <div className="col-xl-8">
                                    <div className="row g-4">
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg bg-soft-primary text-primary border-soft-primary rounded">
                                            <i className="feather-bell mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Notifications
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg bg-soft-danger text-danger border-soft-danger rounded">
                                            <i className="feather-bar-chart-2 mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Analytics
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg bg-soft-success text-success border-soft-success rounded">
                                            <i className="feather-link-2 mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Ingetrations
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg bg-soft-indigo text-indigo border-soft-indigo rounded">
                                            <i className="feather-book mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Documentations
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg bg-soft-warning text-warning border-soft-warning rounded">
                                            <i className="feather-shield mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Security
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="d-flex align-items-start gap-3">
                                          <div className="avatar-text avatar-lg bg-soft-teal text-teal border-soft-teal rounded">
                                            <i className="feather-life-buoy mx-auto"></i>
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Support
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit Unde
                                              numquam rem dignissimos. elit Unde
                                              numquam rem dignissimos.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-3 offset-xxl-1 col-xl-4">
                                    <div className="nxl-mega-menu-image">
                                      <img
                                        src="assets/images/banner/1.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="mt-4">
                                      <a
                                        href="https://bestwpware.com/cdn-cgi/l/email-protection#1d6a6f7c6d7e7279786f6e5d7a707c7471337e7270"
                                        className="fs-13 fw-bold"
                                      >
                                        View all features on Duralux &rarr;
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-blogs"
                                role="tabpanel"
                              >
                                <div className="row g-4">
                                  <div className="col-xxl-2 d-lg-none d-xxl-block">
                                    <h6 className="dropdown-item-title">
                                      Categories
                                    </h6>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Support
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Services
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Applicatios
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      eCommerce
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Development
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      Miscellaneous
                                    </a>
                                  </div>
                                  <div className="col-xxl-10">
                                    <div className="row g-4">
                                      <div className="col-xxl-4 col-lg-6">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="wd-100 rounded-3">
                                            <img
                                              src="assets/images/banner/1.jpg"
                                              alt=""
                                              className="img-fluid rounded-3 border border-3"
                                            />
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Lorem ipsum dolor sit
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum, dolor sit amet
                                              consectetur adipisicing elit. Eius
                                              dolor quo commodi nisi animi error
                                              minus quia aliquam.
                                            </p>
                                            <span className="fs-11 text-gray-500">
                                              26 March, 2023
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxl-4 col-lg-6">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="wd-100 rounded-3">
                                            <img
                                              src="assets/images/banner/2.jpg"
                                              alt=""
                                              className="img-fluid rounded-3 border border-3"
                                            />
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Lorem ipsum dolor sit
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum, dolor sit amet
                                              consectetur adipisicing elit. Eius
                                              dolor quo commodi nisi animi error
                                              minus quia aliquam.
                                            </p>
                                            <span className="fs-11 text-gray-500">
                                              26 March, 2023
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxl-4 col-lg-6">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="wd-100 rounded-3">
                                            <img
                                              src="assets/images/banner/3.jpg"
                                              alt=""
                                              className="img-fluid rounded-3 border border-3"
                                            />
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Lorem ipsum dolor sit
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum, dolor sit amet
                                              consectetur adipisicing elit. Eius
                                              dolor quo commodi nisi animi error
                                              minus quia aliquam.
                                            </p>
                                            <span className="fs-11 text-gray-500">
                                              26 March, 2023
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxl-4 col-lg-6">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="wd-100 rounded-3">
                                            <img
                                              src="assets/images/banner/4.jpg"
                                              alt=""
                                              className="img-fluid rounded-3 border border-3"
                                            />
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Lorem ipsum dolor sit
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum, dolor sit amet
                                              consectetur adipisicing elit. Eius
                                              dolor quo commodi nisi animi error
                                              minus quia aliquam.
                                            </p>
                                            <span className="fs-11 text-gray-500">
                                              26 March, 2023
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxl-4 col-lg-6">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="wd-100 rounded-3">
                                            <img
                                              src="assets/images/banner/5.jpg"
                                              alt=""
                                              className="img-fluid rounded-3 border border-3"
                                            />
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Lorem ipsum dolor sit
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum, dolor sit amet
                                              consectetur adipisicing elit. Eius
                                              dolor quo commodi nisi animi error
                                              minus quia aliquam.
                                            </p>
                                            <span className="fs-11 text-gray-500">
                                              26 March, 2023
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxl-4 col-lg-6">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="wd-100 rounded-3">
                                            <img
                                              src="assets/images/banner/6.jpg"
                                              alt=""
                                              className="img-fluid rounded-3 border border-3"
                                            />
                                          </div>
                                          <div>
                                            <a href="javascript:void(0);">
                                              <h6 className="menu-item-heading text-truncate-1-line">
                                                Lorem ipsum dolor sit
                                              </h6>
                                            </a>
                                            <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                              Lorem ipsum, dolor sit amet
                                              consectetur adipisicing elit. Eius
                                              dolor quo commodi nisi animi error
                                              minus quia aliquam.
                                            </p>
                                            <span className="fs-11 text-gray-500">
                                              26 March, 2023
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-12">
                                        <div className="p-3 bg-soft-dark text-dark rounded d-flex align-items-center justify-content-between gap-4">
                                          <div className="fs-13 text-truncate-1-line">
                                            <i className="feather-star me-2"></i>
                                            <strong>
                                              Version 2.3.2 is out!
                                            </strong>
                                            <span>
                                              Learn more about our news and
                                              schedule reporting.
                                            </span>
                                          </div>
                                          <div className="wd-100 text-end">
                                            <a
                                              href="javascript:void(0);"
                                              className="fs-13 text-primary"
                                            >
                                              Learn More &rarr;
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-right ms-auto">
              <div className="d-flex align-items-center">
                <div className="dropdown nxl-h-item nxl-header-search">
                  <a
                    href="javascript:void(0);"
                    className="nxl-head-link me-0"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="feather-search"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-search-dropdown">
                    <div className="input-group search-form">
                      <span className="input-group-text">
                        <i className="feather-search fs-6 text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control search-input-field"
                        placeholder="Search...."
                      />
                      <span className="input-group-text">
                        <button type="button" className="btn-close"></button>
                      </span>
                    </div>
                    <div className="dropdown-divider mt-0"></div>
                    <div className="search-items-wrapper">
                      <div className="searching-for px-4 py-2">
                        <p className="fs-11 fw-medium text-muted">
                          I'm searching for...
                        </p>
                        <div className="d-flex flex-wrap gap-1">
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Projects
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Leads
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Contacts
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Inbox
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Invoices
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Tasks
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Customers
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Notes
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Affiliate
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Storage
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                          >
                            Calendar
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="recent-result px-4 py-2">
                        <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                          Recnet{" "}
                          <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                            3
                          </span>
                        </h4>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-text rounded">
                              <i className="feather-airplay"></i>
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                CRM dashboard redesign
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                Home / project / crm
                              </p>
                            </div>
                          </div>
                          <div>
                            <a
                              href="javascript:void(0);"
                              className="badge border rounded text-dark"
                            >
                              /<i className="feather-command ms-1 fs-10"></i>
                            </a>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-text rounded">
                              <i className="feather-file-plus"></i>
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Create new document
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                Home / tasks / docs
                              </p>
                            </div>
                          </div>
                          <div>
                            <a
                              href="javascript:void(0);"
                              className="badge border rounded text-dark"
                            >
                              N /<i className="feather-command ms-1 fs-10"></i>
                            </a>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-text rounded">
                              <i className="feather-user-plus"></i>
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Invite project colleagues
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                Home / project / invite
                              </p>
                            </div>
                          </div>
                          <div>
                            <a
                              href="javascript:void(0);"
                              className="badge border rounded text-dark"
                            >
                              P /<i className="feather-command ms-1 fs-10"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-divider my-3"></div>
                      <div className="users-result px-4 py-2">
                        <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                          Users{" "}
                          <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                            5
                          </span>
                        </h4>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image rounded">
                              <img
                                src="assets/images/avatar/1.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Alexandra Della
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                <a
                                  href="https://bestwpware.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="caaba6afb2e4aeafa6a6ab8aa5bfbea6a5a5a1e4a9a5a7"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-chevron-right"></i>
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image rounded">
                              <img
                                src="assets/images/avatar/2.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Green Cute
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                <a
                                  href="https://bestwpware.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="0e697c6b6b60206d7b7a6b4e617b7a62616165206d6163"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-chevron-right"></i>
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image rounded">
                              <img
                                src="assets/images/avatar/3.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Malanie Hanvey
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                <a
                                  href="https://bestwpware.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="d9b4b8b5b8b7b0bcf7b8b7afbca099b6acadb5b6b6b2f7bab6b4"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-chevron-right"></i>
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image rounded">
                              <img
                                src="assets/images/avatar/4.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Kenneth Hune
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                <a
                                  href="https://bestwpware.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="88e3ede6fce0a6e0fde6edc8e7fdfce4e7e7e3a6ebe7e5"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-chevron-right"></i>
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-0">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image rounded">
                              <img
                                src="assets/images/avatar/5.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Archie Cantones
                              </a>
                              <p className="fs-11 text-muted mb-0">
                                <a
                                  href="https://bestwpware.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="f49586979c9d91da979b9a9187b49b8180989b9b9fda979b99"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-divider my-3"></div>
                      <div className="file-result px-4 py-2">
                        <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                          Files{" "}
                          <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                            3
                          </span>
                        </h4>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image bg-gray-200 rounded">
                              <img
                                src="assets/images/file-icons/css.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Project Style CSS
                              </a>
                              <p className="fs-11 text-muted mb-0">05.74 MB</p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-download"></i>
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image bg-gray-200 rounded">
                              <img
                                src="assets/images/file-icons/zip.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Dashboard Project Zip
                              </a>
                              <p className="fs-11 text-muted mb-0">46.83 MB</p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-download"></i>
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-0">
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-image bg-gray-200 rounded">
                              <img
                                src="assets/images/file-icons/pdf.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div>
                              <a
                                href="javascript:void(0);"
                                className="font-body fw-bold d-block mb-1"
                              >
                                Project Document PDF
                              </a>
                              <p className="fs-11 text-muted mb-0">12.85 MB</p>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="avatar-text avatar-md"
                          >
                            <i className="feather-download"></i>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-divider mt-3 mb-0"></div>
                      <a
                        href="javascript:void(0);"
                        className="p-3 fs-10 fw-bold text-uppercase text-center d-block"
                      >
                        Loar More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown nxl-h-item nxl-header-language d-none d-sm-flex">
                  <a
                    href="javascript:void(0);"
                    className="nxl-head-link me-0 nxl-language-link"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <img
                      src="assets/vendors/img/flags/4x3/us.svg"
                      alt=""
                      className="img-fluid wd-20"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-language-dropdown">
                    <div className="dropdown-divider mt-0"></div>
                    <div className="language-items-wrapper">
                      <div className="select-language px-4 py-2 hstack justify-content-between gap-4">
                        <div className="lh-lg">
                          <h6 className="mb-0">Select Language</h6>
                          <p className="fs-11 text-muted mb-0">
                            12 languages avaiable!
                          </p>
                        </div>
                        <a
                          href="javascript:void(0);"
                          className="avatar-text avatar-md"
                          data-bs-toggle="tooltip"
                          title="Add Language"
                        >
                          <i className="feather-plus"></i>
                        </a>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="row px-4 pt-3">
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Arabic</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Bengali</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Chinese</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Dutch</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select active">
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
                            <span>English</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>French</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>German</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Hindi</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Russian</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Spanish</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                            <span>Turkish</span>
                          </a>
                        </div>
                        <div className="col-sm-4 col-6 language_select">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nxl-h-item d-none d-sm-flex">
                  <div className="full-screen-switcher">
                    <a
                      href="javascript:void(0);"
                      className="nxl-head-link me-0"
                      onclick="$('body').fullScreenHelper('toggle');"
                    >
                      <i className="feather-maximize maximize"></i>
                      <i className="feather-minimize minimize"></i>
                    </a>
                  </div>
                </div>
                <div className="nxl-h-item dark-light-theme">
                  <a
                    href="javascript:void(0);"
                    className="nxl-head-link me-0 dark-button"
                  >
                    <i className="feather-moon"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="nxl-head-link me-0 light-button"
                    style={{ display: "none" }}
                  >
                    <i className="feather-sun"></i>
                  </a>
                </div>
                <div className="dropdown nxl-h-item">
                  <a
                    href="javascript:void(0);"
                    className="nxl-head-link me-0"
                    data-bs-toggle="dropdown"
                    role="button"
                    data-bs-auto-close="outside"
                  >
                    <i className="feather-clock"></i>
                    <span className="badge bg-success nxl-h-badge">2</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-timesheets-menu">
                    <div className="d-flex justify-content-between align-items-center timesheets-head">
                      <h6 className="fw-bold text-dark mb-0">Timesheets</h6>
                      <a
                        href="javascript:void(0);"
                        className="fs-11 text-success text-end ms-auto"
                        data-bs-toggle="tooltip"
                        title="Upcomming Timers"
                      >
                        <i className="feather-clock"></i>
                        <span>3 Upcomming</span>
                      </a>
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-column timesheets-body">
                      <i className="feather-clock fs-1 mb-4"></i>
                      <p className="text-muted">No started timers found yes!</p>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm btn-primary"
                      >
                        Started Timer
                      </a>
                    </div>
                    <div className="text-center timesheets-footer">
                      <a
                        href="javascript:void(0);"
                        className="fs-13 fw-semibold text-dark"
                      >
                        Alls Timesheets
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown nxl-h-item">
                  <a
                    className="nxl-head-link me-3"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    data-bs-auto-close="outside"
                  >
                    <i className="feather-bell"></i>
                    <span className="badge bg-danger nxl-h-badge">3</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-notifications-menu">
                    <div className="d-flex justify-content-between align-items-center notifications-head">
                      <h6 className="fw-bold text-dark mb-0">Notifications</h6>
                      <a
                        href="javascript:void(0);"
                        className="fs-11 text-success text-end ms-auto"
                        data-bs-toggle="tooltip"
                        title="Make as Read"
                      >
                        <i className="feather-check"></i>
                        <span>Make as Read</span>
                      </a>
                    </div>
                    <div className="notifications-item">
                      <img
                        src="assets/images/avatar/2.png"
                        alt=""
                        className="rounded me-3 border"
                      />
                      <div className="notifications-desc">
                        <a
                          href="javascript:void(0);"
                          className="font-body text-truncate-2-line"
                        >
                          {" "}
                          <span className="fw-semibold text-dark">
                            Malanie Hanvey
                          </span>{" "}
                          We should talk about that at lunch!
                        </a>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="notifications-date text-muted border-bottom border-bottom-dashed">
                            2 minutes ago
                          </div>
                          <div className="d-flex align-items-center float-end gap-2">
                            <a
                              href="javascript:void(0);"
                              className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                              data-bs-toggle="tooltip"
                              title="Make as Read"
                            ></a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger"
                              data-bs-toggle="tooltip"
                              title="Remove"
                            >
                              <i className="feather-x fs-12"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="notifications-item">
                      <img
                        src="assets/images/avatar/3.png"
                        alt=""
                        className="rounded me-3 border"
                      />
                      <div className="notifications-desc">
                        <a
                          href="javascript:void(0);"
                          className="font-body text-truncate-2-line"
                        >
                          {" "}
                          <span className="fw-semibold text-dark">
                            Valentine Maton
                          </span>{" "}
                          You can download the latest invoices now.
                        </a>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="notifications-date text-muted border-bottom border-bottom-dashed">
                            36 minutes ago
                          </div>
                          <div className="d-flex align-items-center float-end gap-2">
                            <a
                              href="javascript:void(0);"
                              className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                              data-bs-toggle="tooltip"
                              title="Make as Read"
                            ></a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger"
                              data-bs-toggle="tooltip"
                              title="Remove"
                            >
                              <i className="feather-x fs-12"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="notifications-item">
                      <img
                        src="assets/images/avatar/4.png"
                        alt=""
                        className="rounded me-3 border"
                      />
                      <div className="notifications-desc">
                        <a
                          href="javascript:void(0);"
                          className="font-body text-truncate-2-line"
                        >
                          {" "}
                          <span className="fw-semibold text-dark">
                            Archie Cantones
                          </span>{" "}
                          Don't forget to pickup Jeremy after school!
                        </a>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="notifications-date text-muted border-bottom border-bottom-dashed">
                            53 minutes ago
                          </div>
                          <div className="d-flex align-items-center float-end gap-2">
                            <a
                              href="javascript:void(0);"
                              className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                              data-bs-toggle="tooltip"
                              title="Make as Read"
                            ></a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger"
                              data-bs-toggle="tooltip"
                              title="Remove"
                            >
                              <i className="feather-x fs-12"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center notifications-footer">
                      <a
                        href="javascript:void(0);"
                        className="fs-13 fw-semibold text-dark"
                      >
                        Alls Notifications
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown nxl-h-item">
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                    role="button"
                    data-bs-auto-close="outside"
                  >
                    <img
                      src="assets/images/avatar/1.png"
                      alt="user-image"
                      className="img-fluid user-avtar me-0"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                    <div className="dropdown-header">
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/avatar/1.png"
                          alt="user-image"
                          className="img-fluid user-avtar"
                        />
                        <div>
                          <h6 className="text-dark mb-0">
                            Alexandra Della{" "}
                            <span className="badge bg-soft-success text-success ms-1">
                              PRO
                            </span>
                          </h6>
                          <span className="fs-12 fw-medium text-muted">
                            <a
                              href="https://bestwpware.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="ceafa2abb6e0aaaba2a2af8ea1bbbaa2a1a1a5e0ada1a3"
                            >
                              [email&#160;protected]
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item"
                        data-bs-toggle="dropdown"
                      >
                        <span className="hstack">
                          <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                          <span>Active</span>
                        </span>
                        <i className="feather-chevron-right ms-auto me-0"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-warning rounded-circle me-2"></i>
                            <span>Always</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                            <span>Active</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-danger rounded-circle me-2"></i>
                            <span>Bussy</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-info rounded-circle me-2"></i>
                            <span>Inactive</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-dark rounded-circle me-2"></i>
                            <span>Disabled</span>
                          </span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-primary rounded-circle me-2"></i>
                            <span>Cutomization</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item"
                        data-bs-toggle="dropdown"
                      >
                        <span className="hstack">
                          <i className="feather-dollar-sign me-2"></i>
                          <span>Subscriptions</span>
                        </span>
                        <i className="feather-chevron-right ms-auto me-0"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Plan</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Billings</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Referrals</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Payments</span>
                          </span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Statements</span>
                          </span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                            <span>Subscriptions</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="feather-user"></i>
                      <span>Profile Details</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="feather-activity"></i>
                      <span>Activity Feed</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="feather-dollar-sign"></i>
                      <span>Billing Details</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="feather-bell"></i>
                      <span>Notifications</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="feather-settings"></i>
                      <span>Account Settings</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="auth-login-minimal.html" className="dropdown-item">
                      <i className="feather-log-out"></i>
                      <span>Logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      <Link to="/blog_modal">Add blog</Link>
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
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            All Notes
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Lead Notes
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
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
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Meeting Notes
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Personal Notes
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
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
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-eye me-3"></i>
                            <span>Read</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-eye-off me-3"></i>
                            <span>Unread</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-star me-3"></i>
                            <span>Starred</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-shield-off me-3"></i>
                            <span>Unstarred</span>
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-clock me-3"></i>
                            <span>Snooze</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-check-circle me-3"></i>
                            <span>Add Tasks</span>
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-archive me-3"></i>
                            <span>Archive</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            <i className="feather-alert-octagon me-3"></i>
                            <span>Report Spam</span>
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
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
                        <form
                          className="search-form"
                          style={{ display: "none" }}
                        >
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
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-plus me-3"></i>
                            <span>Add to Group</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-user-plus me-3"></i>
                            <span>Add to Contact</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-eye-off me-3"></i>
                            <span>Make as Unread</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-sliders me-3"></i>
                            <span>Filter Messages</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-archive me-3"></i>
                            <span>Make as Archive</span>
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-slash me-3"></i>
                            <span>Report Spam</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-sliders me-3"></i>
                            <span>Report phishing</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-download me-3"></i>
                            <span>Download Messages</span>
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-bell-off me-3"></i>
                            <span>Mute Conversion</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="feather feather-slash me-3"></i>
                            <span>Block Conversion</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
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
                    {blog.map((i) => (
                      <div
                        className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-important note-tasks"
                        key={i.id}
                      >
                        <div className="card card-body mb-4 stretch stretch-full">
                          <span className="side-stick"></span>
                          <h5 className="note-title text-truncate w-75 mb-1">
                            {i.title}
                            <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                          </h5>
                          <p className="fs-11 text-muted note-date">
                            {i.description}
                          </p>
                          <div className="note-content flex-grow-1">
                            <p className="text-muted note-inner-content">
                              <strong>Autor:</strong> {i.author}
                            </p>

                            <p className="text-muted note-inner-content">
                              <strong>created_at:</strong> {i.created_at}
                            </p>
                          </div>

                          {/* Icons for delete, update, and add */}
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-sm btn-outline-danger me-2"
                              onClick={() => handleDelete(i.id)}
                            >
                              <BiTrash /> Delete
                            </button>
                            Example: Show add icon only if applicable
                            {i.canAdd && (
                              <button className="btn btn-sm btn-outline-primary me-2">
                                <BiPlus /> Add
                              </button>
                            )}
                            <Link
                              to={`/edit-job/${i.id}`}
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
                            <label className="form-label">
                              Note Description
                            </label>
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
                      <div className="fs-13 fw-semibold">
                        Create new eocument
                      </div>
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
                      <div className="fs-13 fw-semibold">
                        Create new project
                      </div>
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
    </>
  );
}

export default Blogs_admin;
