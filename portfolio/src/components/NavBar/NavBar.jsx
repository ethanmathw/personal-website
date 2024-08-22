import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="/" className={styles.a}>Home</a></li>
        <li><a href="/" className={styles.a}>About</a></li>
        <li><a href="/" className={styles.a}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
