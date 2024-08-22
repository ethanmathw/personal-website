import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectList}>
        <div className={styles.projectItem}>
          <h2>Project One</h2>
          <p>
            A web application built with React and Node.js that allows users to manage their tasks efficiently.
          </p>
        </div>

        <div className={styles.projectItem}>
          <h2>Project Two</h2>
          <p>
            A mobile app developed using React Native, designed to help users track their fitness goals.
          </p>
        </div>

        <div className={styles.projectItem}>
          <h2>Project Three</h2>
          <p>
            A data visualization tool that uses D3.js to create interactive charts and graphs from user data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
