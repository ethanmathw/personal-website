import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectList}>
        <div className={styles.projectItem}>
          <a href = "https://github.com/ethanmathw/GAIA-Personal-Idea-Evaluator">GAIA Personal Idea Evaluator</a>
          <p>
            Project focuses on leveraging Generative AI principles to create an AI evaluator capable of providing thorough text evaluations for solutions. The system incorporates several layers of complex large language models (LLMs) and utilizes innovative techniques for idea evaluation.
          </p>
        </div>

        <div className={styles.projectItem}>
          <a href = "https://github.com/ethanmathw">Checkpoint Based Attendance Tracker</a>
          <p>
            Developed a checkpoint-based attendance tracker using MongoDB, Node.js, Express.js, and a React Native application to monitor fraternity member attendance
          </p>
        </div>

        <div className={styles.projectItem}>
          <a href = " https://github.com/ethanmathw/leecode_simplified">LeetCode Simplfied (Ongoing)</a>
          <p>
          A generative AI Chrome extension built using React, Node.js, and OpenAI's GPT API, designed to guide users step-by-step through LeetCode problems, offering personalized explanations and interactive learning experiences to help students understand coding concepts more effectively instead of just providing them with the answers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
