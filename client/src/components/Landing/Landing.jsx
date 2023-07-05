import React  from 'react';
import styles from "./Landing.module.css";
import { Link } from 'react-router-dom';

export default function Landing(props) {

  return (
    <div className={styles.background}>
      <video className={styles.video} loop autoPlay muted>
          <source src="https://static.videezy.com/system/resources/previews/000/051/739/original/4K-18.mp4" type="video/mp4"></ source>
      </video>
      <div className={styles.textContainer}>
        <Link to="/home">
          <div className={styles.text}>PRESS START</div>
        </Link>
      </div>
    </div>
  );
}