import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nabvar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/About">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar