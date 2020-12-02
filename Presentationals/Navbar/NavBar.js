import React from "react";

import styles from "./navbar.module.css";

const NavBar = ({ backgroundColor, fontSize, color }) => {
  return (
    <div
      style={backgroundColor && { backgroundColor, color }}
      className={styles.wrapper}
    >
      <a style={{ fontSize }} to="/">
        <h1 className={styles.logo}>CdM</h1>
      </a>
      <a className={styles.link} to="/prestations">
        Préstations
      </a>
      <a className={styles.link} to="/rdv">
        Rendez-vous
      </a>
      <a className={styles.link} to="/shop">
        Shop
      </a>
      <a className={styles.link} to="/contacts">
        Contacts
      </a>
    </div>
  );
};

export default NavBar;
