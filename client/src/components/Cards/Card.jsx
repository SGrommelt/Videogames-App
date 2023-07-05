import React  from 'react';
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo} style={props.style}>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{props.name}</h2>
          {/* {props.genres.map( genre => {return <h3>{genre}</h3>})} */}
        </Link>
      </div>
      <div className={styles.overlay}></div>
      <img className={styles.mainImage} src={props.image} alt='' />
    </div>
  );
}