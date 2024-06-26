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
                    <span className="nxl-mtext">Dashboards</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <Link to="/carrirer_list" className="nxl-link">  carrer list</Link>                      
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="analytics.html">
                        Analytics
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-cast"></i>
                    </span>
                    <span className="nxl-mtext">Reports</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="reports-sales.html">
                        Sales Report
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="reports-leads.html">
                        Leads Report
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="reports-project.html">
                        Project Report
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="reports-timesheets.html">
                        Timesheets Report
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-send"></i>
                    </span>
                    <span className="nxl-mtext">Applications</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="apps-chat.html">
                        Chat
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="apps-email.html">
                        Email
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="apps-tasks.html">
                        Tasks
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="apps-notes.html">
                        Notes
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="apps-storage.html">
                        Storage
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="apps-calendar.html">
                        Calendar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-at-sign"></i>
                    </span>
                    <span className="nxl-mtext">Proposal</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="proposal.html">
                        Proposal
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="proposal-view.html">
                        Proposal View
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="proposal-edit.html">
                        Proposal Edit
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="proposal-create.html">
                        Proposal Create
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-dollar-sign"></i>
                    </span>
                    <span className="nxl-mtext">Payment</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="payment.html">
                        Payment
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="invoice-view.html">
                        Invoice View
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="invoice-create.html">
                        Invoice Create
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-users"></i>
                    </span>
                    <span className="nxl-mtext">Customers</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="customers.html">
                        Customers
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="customers-view.html">
                        Customers View
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="customers-create.html">
                        Customers Create
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-alert-circle"></i>
                    </span>
                    <span className="nxl-mtext">Leads</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="leads.html">
                        Leads
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="leads-view.html">
                        Leads View
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="leads-create.html">
                        Leads Create
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-briefcase"></i>
                    </span>
                    <span className="nxl-mtext">Projects</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="projects.html">
                        Projects
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="projects-view.html">
                        Projects View
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="projects-create.html">
                        Projects Create
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-layout"></i>
                    </span>
                    <span className="nxl-mtext">Widgets</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="widgets-lists.html">
                        Lists
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="widgets-tables.html">
                        Tables
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="widgets-charts.html">
                        Charts
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="widgets-statistics.html">
                        Statistics
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="widgets-miscellaneous.html">
                        Miscellaneous
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-settings"></i>
                    </span>
                    <span className="nxl-mtext">Settings</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-general.html">
                        General
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-seo.html">
                        SEO
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-tags.html">
                        Tags
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-email.html">
                        Email
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-tasks.html">
                        Tasks
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-leads.html">
                        Leads
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-support.html">
                        Support
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-finance.html">
                        Finance
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-gateways.html">
                        Gateways
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-customers.html">
                        Customers
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-localization.html">
                        Localization
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="settings-recaptcha.html">
                        reCAPTCHA
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a
                        className="nxl-link"
                        href="settings-miscellaneous.html"
                      >
                        Miscellaneous
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-power"></i>
                    </span>
                    <span className="nxl-mtext">Authentication</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item nxl-hasmenu">
                      <a href="javascript:void(0);" className="nxl-link">
                        <span className="nxl-mtext">Login</span>
                        <span className="nxl-arrow">
                          <i className="feather-chevron-right"></i>
                        </span>
                      </a>
                      <ul className="nxl-submenu">
                        <li className="nxl-item">
                          <a className="nxl-link" href="auth-login-cover.html">
                            Cover
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-login-minimal.html"
                          >
                            Minimal
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-login-creative.html"
                          >
                            Creative
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nxl-item nxl-hasmenu">
                      <a href="javascript:void(0);" className="nxl-link">
                        <span className="nxl-mtext">Register</span>
                        <span className="nxl-arrow">
                          <i className="feather-chevron-right"></i>
                        </span>
                      </a>
                      <ul className="nxl-submenu">
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-register-cover.html"
                          >
                            Cover
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-register-minimal.html"
                          >
                            Minimal
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-register-creative.html"
                          >
                            Creative
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nxl-item nxl-hasmenu">
                      <a href="javascript:void(0);" className="nxl-link">
                        <span className="nxl-mtext">Error-404</span>
                        <span className="nxl-arrow">
                          <i className="feather-chevron-right"></i>
                        </span>
                      </a>
                      <ul className="nxl-submenu">
                        <li className="nxl-item">
                          <a className="nxl-link" href="auth-404-cover.html">
                            Cover
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a className="nxl-link" href="auth-404-minimal.html">
                            Minimal
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a className="nxl-link" href="auth-404-creative.html">
                            Creative
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nxl-item nxl-hasmenu">
                      <a href="javascript:void(0);" className="nxl-link">
                        <span className="nxl-mtext">Reset Pass</span>
                        <span className="nxl-arrow">
                          <i className="feather-chevron-right"></i>
                        </span>
                      </a>
                      <ul className="nxl-submenu">
                        <li className="nxl-item">
                          <a className="nxl-link" href="auth-reset-cover.html">
                            Cover
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-reset-minimal.html"
                          >
                            Minimal
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-reset-creative.html"
                          >
                            Creative
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nxl-item nxl-hasmenu">
                      <a href="javascript:void(0);" className="nxl-link">
                        <span className="nxl-mtext">Verify OTP</span>
                        <span className="nxl-arrow">
                          <i className="feather-chevron-right"></i>
                        </span>
                      </a>
                      <ul className="nxl-submenu">
                        <li className="nxl-item">
                          <a className="nxl-link" href="auth-verify-cover.html">
                            Cover
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-verify-minimal.html"
                          >
                            Minimal
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-verify-creative.html"
                          >
                            Creative
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nxl-item nxl-hasmenu">
                      <a href="javascript:void(0);" className="nxl-link">
                        <span className="nxl-mtext">Maintenance</span>
                        <span className="nxl-arrow">
                          <i className="feather-chevron-right"></i>
                        </span>
                      </a>
                      <ul className="nxl-submenu">
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-maintenance-cover.html"
                          >
                            Cover
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-maintenance-minimal.html"
                          >
                            Minimal
                          </a>
                        </li>
                        <li className="nxl-item">
                          <a
                            className="nxl-link"
                            href="auth-maintenance-creative.html"
                          >
                            Creative
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nxl-item nxl-hasmenu">
                  <a href="javascript:void(0);" className="nxl-link">
                    <span className="nxl-micon">
                      <i className="feather-life-buoy"></i>
                    </span>
                    <span className="nxl-mtext">Help Center</span>
                    <span className="nxl-arrow">
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                  <ul className="nxl-submenu">
                    <li className="nxl-item">
                      <a
                        className="nxl-link"
                        href="https://themeforest.net/user/theme_ocean/"
                      >
                        Support
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href="help-knowledgebase.html">
                        KnowledgeBase
                      </a>
                    </li>
                    <li className="nxl-item">
                      <a className="nxl-link" href=".docs/documentations.html">
                        Documentations
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="card text-center">
                <div className="card-body">
                  <i className="feather-sunrise fs-4 text-dark"></i>
                  <h6 className="mt-4 text-dark fw-bolder">
                    Downloading Center
                  </h6>
                  <p className="fs-11 my-3 text-dark">
                    Duralux is a production ready CRM to get started up and
                    running easily.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary text-dark w-100"
                  >
                    Download Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
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
                <a
                  href="javascript:void(0);"
                  id="menu-expend-button"
                  style={{ display: "none" }}
                >
                  <i className="feather-arrow-right"></i>
                </a>
              </div>
              <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                <a href="javascript:void(0);" id="nxl-lavel-mega-menu-open">
                  <i className="feather-align-left"></i>
                </a>
              </div>
              <div className="nxl-drp-link nxl-lavel-mega-menu">
                <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                  <a href="javascript:void(0)" id="nxl-lavel-mega-menu-hide">
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
                                  href="https://bestwpware.com/cdn-cgi/l/email-protection#1d6a6f7c6d7e7279786f6e5d7a707c7471337e7270"
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
                                      className="img-fluid"
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
                                    href="https://bestwpware.com/cdn-cgi/l/email-protection#d4a3a6b5a4b7bbb0b1a6a794b3b9b5bdb8fab7bbb9"
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
                                        href="https://bestwpware.com/cdn-cgi/l/email-protection#5b2c293a2b38343f3e29281b3c363a323775383436"
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
                                  data-cfemail="9dfcf1f8e5b3f9f8f1f1fcddf2e8e9f1f2f2f6b3fef2f0"
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
                                  data-cfemail="5f382d3a3a31713c2a2b3a1f302a2b33303034713c3032"
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
                                  data-cfemail="dcb1bdb0bdb2b5b9f2bdb2aab9a59cb3a9a8b0b3b3b7f2bfb3b1"
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
                                  data-cfemail="5b303e352f3375332e353e1b342e2f3734343075383436"
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
                                  data-cfemail="422330212a2b276c212d2c2731022d37362e2d2d296c212d2f"
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
                    href="#"
                    onClick={(e) => e.preventDefault()}
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
                              data-cfemail="442528213c6a2021282825042b3130282b2b2f6a272b29"
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
          <footer className="footer">
            <p className="fs-11 text-muted fw-medium text-uppercase mb-0 copyright">
              <span>Copyright ©</span>
              <script
                data-cfasync="false"
                src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
              ></script>
              <script>document.write(new Date().getFullYear());</script>
            </p>
            <div className="d-flex align-items-center gap-4">
              <a
                href="javascript:void(0);"
                className="fs-11 fw-semibold text-uppercase"
              >
                Help
              </a>
              <a
                href="javascript:void(0);"
                className="fs-11 fw-semibold text-uppercase"
              >
                Terms
              </a>
              <a
                href="javascript:void(0);"
                className="fs-11 fw-semibold text-uppercase"
              >
                Privacy
              </a>
            </div>
          </footer>
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
                  href="#"
                  className="btn btn-danger"
                  data-style="reset-all-common-style"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add your onClick functionality here
                  }}
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
