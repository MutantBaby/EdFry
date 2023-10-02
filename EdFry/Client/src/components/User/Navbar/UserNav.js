import React, { useState } from "react";
import "./UserNav.css";
import { Logo } from "components/Navbar2/Logo";
import { NavLink } from "react-router-dom";
import logos from "../../../assets/svgs/COO.jpg";
import { Hamburger } from "components/Navbar2/Hamburger";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSignOutAlt,
//   faBars,
//   faBell,
//   faCog,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
const UserNav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleLogout = () => {};
  return (
    <nav className="tachernavbar">
      <div className="logoxs">
        <Logo />
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
      </div>
      <div className={`nav-elements  ${showNavbar && "active"}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active-link">
              <i className="fa fa-home"></i> Browse
            </NavLink>
          </li>
          <li>
            <NavLink to="/immigration" activeClassName="active-link">
              <i className="fa fa-calendar"></i> Upcoming
            </NavLink>
          </li>
          <li>
            <NavLink to="/admission" activeClassName="active-link">
              <i className="fa fa-book"></i> Booked
            </NavLink>
          </li>
          <li>
            <NavLink to="/activities" activeClassName="active-link">
              <i className="fa fa-bicycle"></i> Activities
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" activeClassName="active-link">
              <i className="fa fa-sticky-note"></i> Notes
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <i className="fa fa-bell"></i>
        <i className="fas fa-sliders-h"></i>
        <i className="fas fa-user-circle"></i>
        {/* <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faUser} /> */}
        <div className="profile-dropdown">
          <img src={logos} alt="Profile" />
          <ul className="dropdown-content">
            <li onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Logout
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default UserNav;
