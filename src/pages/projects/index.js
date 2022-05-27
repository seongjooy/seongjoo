import { Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

const Projects = () => {
  return (
    <Layout>
      <div className={styles.header} data-aos="slide-right">
        My Projects
        <hr></hr>
        <div
          className={styles.temp}
          data-aos="slide-right"
          data-aos-duration="500"
        >
          <div className={styles.project}>
            Memory Allocation of Dynamic Arrays Visualizer
            <Link to="/projects/mapper">
              <img className={styles.preview} src="/gis-mapper.png" alt="" />
            </Link>
            <div className={styles.text}>Javascript, ReactJS, HTML, CSS</div>
          </div>
          <div className={styles.project}>
            Prediction of Septic Shock Using XGBoost
            <Link to="/projects/mapper">
              <img className={styles.preview} src="/gis-mapper.png" alt="" />
            </Link>
            <div className={styles.text}>
              Utilized a gradient boosting algorithm (XGBoost) to predict the
              onset of septic shock in an ICU patient. Dataset source is
              preprocessed MIMIC-III data.
              <br />
              <br />
              Python, Scikit-Learn, XGBoost
            </div>
          </div>
          <div className={styles.project}>
            Geographic Information System Mapper
            <Link to="/projects/mapper">
              <img className={styles.preview} src="/gis-mapper.png" alt="" />
            </Link>
            <div className={styles.text}>
              Developed a city mapping software using C++ and OpenStreetMap API.
              Used Git for version control amongst 2 other teammates. <br />
              <br />
              C++, STL, Git
            </div>
          </div>
          <div className={styles.project}>Neural Network From Scratch</div>
          <div className={styles.project}>Capstone</div>
          <div className={styles.project}>Paper - Healthcare Data Bias?</div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
