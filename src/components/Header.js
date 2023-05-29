import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#sidebar" href="#">
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>

          {/* SEARCH FORM */}
          <form className="d-flex ms-auto">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </form>

          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                <i className="far fa-comments" />
                <span className="badge bg-danger navbar-badge">3</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li>
                  {/* Message Start */}
                  <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" />
                      <div className="flex-grow-1">
                        <h3 className="dropdown-item-title">
                          Brad Diesel
                          <span className="float-end text-sm text-danger"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock me-1" />4 Hours Ago</p>
                      </div>
                    </div>
                  </a>
                  {/* Message End */}
                </li>
                <li>
                  {/* ...other messages... */}
                </li>
                <li>
                  <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                </li>
              </ul>
            </li>

            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                <i className="far fa-bell" />
                <span className="badge bg-warning navbar-badge">15</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li>
                  {/* Notification Start */}
                  <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <i className="fas fa-envelope me-2" />
                      <div className="flex-grow-1">
                        <span className="dropdown-item-title">4 new messages</span>
                        <span className="float-end text-muted text-sm">3 mins</span>
                      </div>
                    </div>
                  </a>
                  {/* Notification End */}
                </li>
                <li>
                  {/* ...other notifications... */}
                </li>
                <li>
                  <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </li>
              </ul>
            </li>

            {/* User Profile */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                <img src="dist/img/user2-160x160.jpg" alt="User Avatar" className="user-avatar img-circle" />
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li>
                  {/* User Profile */}
                  <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <img src="dist/img/user2-160x160.jpg" alt="User Avatar" className="user-avatar img-circle me-3" />
                      <div className="flex-grow-1">
                        <h3 className="dropdown-item-title">
                          John Doe
                          <span className="float-end text-sm text-muted">Online</span>
                        </h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </a>
                  {/* User Profile End */}
                </li>
                <li>
                  {/* ...other profile options... */}
                </li>
                <li>
                  <a href="#" className="dropdown-item dropdown-footer">Logout</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" role="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
