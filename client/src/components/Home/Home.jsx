import React  from 'react';
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar.jsx";
import Cards from "../Cards/Cards";
import Filters from '../Filters/Filters.jsx';

export default function Home(props) {
  return (
    <div className={styles.background}>
      <img className={styles.backgroundImg} src={require("../../img/VideogamesBG.jpg")} alt="" />
      <div className={styles.filtersBar}>
        <SearchBar />
        <Filters />
        <Link to='/form'>
          <button className={styles.addButton}>Add Videogame</button>
        </Link>
      </div>
      <Cards />
    </div>
  );
}