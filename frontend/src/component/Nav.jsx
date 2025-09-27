import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation(); // to detect active route

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img
              src="https://compdi.github.io/BFSI_OPEN_DATA/Logo.png"
              className="img-fluid rounded"
              width="100px"
              alt="Logo"
            />
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/ensurance"
                  className={`nav-link ${location.pathname === '/ensurance' ? 'active-link' : ''}`}
                >
                  All Insurance
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`}
                >
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/services"
                  className={`nav-link ${location.pathname === '/services' ? 'active-link' : ''}`}
                >
                  Services
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`}
                >
                  Contact Us
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/aboutData"
                  className={`nav-link ${location.pathname === '/aboutData' ? 'active-link' : ''}`}
                >
                  Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
