import React  from 'react';
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {

  const nameLength = (name) => {
    if(name.length > 35) {
      const arr = name.split(" ");
      if(arr !== undefined) {
        let total = 0;
        for (let i=0; i<arr.length; i++) {
          total = total + arr[i].length;
          if(total > (35 - (arr.length-1))) {
            arr.splice(i);
            break;
          }
        }
        return arr.join(" ");
      }
    }
    return name;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo} style={props.style}>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{nameLength(props.name)}</h2>
          {/* {props.genres.map( genre => {return <h3>{genre}</h3>})} */}
        </Link>
      </div>
      <div className={styles.overlay}></div>
      <img className={styles.mainImage} src={props.image} alt='' />
    </div>
  );
}