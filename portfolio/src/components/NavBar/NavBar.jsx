import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><text>Home</text></li>
        <li></li>
        <li><text>Experience</text></li>
        <li><text>Projects</text></li>
        <li><text>Contact</text></li>
      </ul>
    </nav>
  );
}

export default NavBar;
