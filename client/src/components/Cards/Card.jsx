import React  from 'react';
import styles from "./Cards.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h1>{props.id}</h1>
      <h2>{props.name}</h2>
      <img className={styles.cardImg} src={props.image} alt='' />
    </div>
  );
}