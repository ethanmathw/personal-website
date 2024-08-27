import React from 'react';
import styles from './Contact.module.css';
import github from '../../assets/github.png';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.jpg'


function Contact() {
  return (
    // <h2> Contact Me </h2>
    <div className={styles.contactContainer}>
      <div className = {styles.contacts}>
        <div className={styles.socialMediaContainer}>
            <img src={github} alt="Github" className={styles.socialMediaIcon} />
            <a href = "github.com/ethanmathw" className={styles.handleBubble}>
              github.com/ethanmathw
            </a>
        </div>
        <div className={styles.socialMediaContainer}>
            <img src={linkedin} alt="Email" className={styles.socialMediaIcon} />
            <a href = "https://www.linkedin.com/in/ethanmathw3278/" className={styles.handleBubble}>
                linkedin.com/ethanmathw
            </a>
        </div>
        <div className={styles.socialMediaContainer}>
          <img src={email} alt="Email" className={styles.socialMediaIcon} />
            <a href = "mailto:ethantm2@illinois.edu" className={styles.handleBubble}>
                ethantm2@illinois.edu
            </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;  // This line ensures the component is exported as default
