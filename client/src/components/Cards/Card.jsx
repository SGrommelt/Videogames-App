import React  from 'react';
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className={styles.card}>
      <Link to={`/detail/${props.id}`}>
        <h1>{props.id}</h1>
        <h2>{props.name}</h2>
        {props.genres.map( genre => {return <h3>{genre}</h3>})}
        <img className={styles.cardImg} src={props.image} alt='' />
      </Link>
    </div>
  );
}