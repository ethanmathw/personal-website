import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <h1>My Experience</h1>
      <p>Here is an overview of my professional experience:</p>

      <div className={styles.job}>
        <h2>Software Engineer at TechCorp</h2>
        <p>January 2020 - Present</p>
        <p>
          At TechCorp, I work on developing scalable web applications using React and Node.js. My role involves both frontend and backend development, with a focus on delivering high-quality user experiences.
        </p>
      </div>

      <div className={styles.job}>
        <h2>Frontend Developer at WebDesigns Inc.</h2>
        <p>June 2017 - December 2019</p>
        <p>
          I specialized in building responsive and accessible websites using HTML, CSS, and JavaScript. I collaborated closely with designers to create intuitive and engaging user interfaces.
        </p>
      </div>

      <div className={styles.job}>
        <h2>Intern at Startup Innovations</h2>
        <p>May 2016 - August 2016</p>
        <p>
          As an intern, I gained hands-on experience in web development and software engineering. I contributed to several projects, learning best practices in coding and team collaboration.
        </p>
      </div>
    </div>
  );
}

export default Experience;
