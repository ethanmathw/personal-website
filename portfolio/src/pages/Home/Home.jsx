import React from 'react';
import styles from './Home.module.css';
import resume from "../../assets/EthanMathewResume.pdf"
function Home() {
  return (
    <div className={styles.homeContainer}>
        <div className = {styles.container}>
            <header className={styles.header}>
            <h1>Hi, my name is Ethan Mathew</h1>
            </header>

            <div className = {styles.horizontalContainer}></div>
            
            <div className = {styles.horizontalContainer}>


                <div className={styles.title}>
                    <h1>Computer Science and Statistics</h1>
                    <h1>University of Illinois Urbana Champaign</h1>
                </div>

                <div className={styles.resume}>
                    <a href = {resume}>My Resume</a>
                </div>                
            </div>

            
        </div>
    </div>
  );
}

export default Home;
