import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <h1 className = {styles.title}>My Experience</h1>
      <div className = {styles.jobList}>
        <div className={styles.job}>
          <h2>Data Science @ Expedia Group</h2>
          <p>May 2024 - August 2024</p>
          <p>
          Led comprehensive data analysis initiatives to provide detailed and actionable insights reducing escalation rates by 26%, thereby preserving Expedia brand integrity and enhancing customer satisfaction.
          </p>
          <p>Spearheaded a project to develop GenAI summarizations of global escalations, reducing the time and cost of providing insights to executives by 75% and providing unbiased insights.</p>
          <p>Utilized SQL, Tableau, PySpark and Python to analyze data and create a comprehensive live refresh dashboard showcasing escalation insights for executive level stakeholders to self-serve weekly summaries.</p>
        </div>

        <div className={styles.job}>
          <h2>Data Science @ Synchrony Financial</h2>
          <p>June 2017 - December 2019</p>
          <p>Worked with regional clients to improve marketing initiatives through geographical and consumer data analytics.</p>
          <p>Constructed sequence modeling frameworks used to help recognize the sentiment of client customer reviews using spaCy Named Entity Recognition model.</p>
          <p>Deployed algorithms using Latent Semantic Analysis (LSA) and Latent Dirichlet Allocation (LDA) to effectively extract topics from client datasets involving customer feedback in order to present constructive business solutions.</p>
        </div>

        <div className={styles.job}>
          <h2>SWE @ Illinois Business Consulting</h2>
          <p>May 2016 - August 2016</p>
          <p>Partnering with Gies College of Business to build out a database for IBC client and project information in MySQL.</p>
          <p>Used Pinecone Vector DB to construct embeddings for project docs and compute similarity searches to user queries.</p>
          <p>Developed HTML form to initiate an ingestion pipeline, integrating Azure Blob upload and database integration.</p>
          <p>Used Slack SDK and Azure App Service to push a working internal Slackbot into production organization-wide.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
