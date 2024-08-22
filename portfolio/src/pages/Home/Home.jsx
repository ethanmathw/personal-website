import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      
      <section className={styles.content}>
        <h2>About Us</h2>
        <p>
          We are a leading company in our industry, committed to providing quality services and products to our customers. Our goal is to exceed your expectations in every aspect.
        </p>

        <h2>Our Services</h2>
        <p>
          We offer a wide range of services to meet your needs, including consulting, product development, and customer support. Explore our services page to learn more.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have any questions? Feel free to reach out to us through our contact page. We're here to help!
        </p>
      </section>
    </div>
  );
}

export default Home;
