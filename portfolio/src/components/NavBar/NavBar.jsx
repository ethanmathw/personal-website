import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
