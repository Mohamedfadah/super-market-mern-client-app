import "./navbar.css";
import logo from "../../assests/img/img.png";
import { NavLink } from "react-router-dom";
import React from "react";
import useToken from "../../utils/hooks/useToken";

const Navbar = () => {
  const { token } = useToken();
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-light customize-navbar justify-content-between"
      id="navbar"
    >
      <div className="container">
        <NavLink to="home" className="navbar-brand">
          <img src={logo} width="70" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About
              </NavLink>
            </li>
            {token && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="auth d-flex align-items-center">
          {!token ? (
            <>
              <NavLink to="/login" className="link btn-login">
                Login
              </NavLink>
              <NavLink to="/signup" className="link btn-signup">
                Signup
              </NavLink>
            </>
          ) : (
            <a
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              className="link btn-logout"
            >
              Logout
            </a>
          )}
          <div className="animate-icon">
            <i className="fa fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
