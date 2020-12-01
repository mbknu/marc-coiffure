import React from "react";

import "./navbar.css";

/**
 * Primary UI component for user interaction
 */
const NavBar = ({ backgroundColor, fontSize }) => {
  return (
    <div
      style={backgroundColor && { backgroundColor }}
      className="navbar-wrapper"
    >
      <a style={{ fontSize }} to="/">
        <h1 className="logo">CdM</h1>
      </a>
      <a className="navbar-link" to="/prestations">
        Préstations
      </a>
      <a className="navbar-link" to="/rdv">
        Rendez-vous
      </a>
      <a className="navbar-link" to="/shop">
        Shop
      </a>
      <a className="navbar-link" to="/contacts">
        Contacts
      </a>
    </div>
  );
};

export default NavBar;
