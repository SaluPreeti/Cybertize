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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                      {/* <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" /> */}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
                {/* <img src="dist/img/user2-160x160.jpg" alt="User Avatar" className="user-avatar img-circle" /> */}
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
