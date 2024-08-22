import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any questions or concerns!</p>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;  // This line ensures the component is exported as default
