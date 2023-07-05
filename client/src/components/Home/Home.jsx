import React  from 'react';
import { useDispatch } from 'react-redux';
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar.jsx";
import Cards from "../Cards/Cards";
import Filters from '../Filters/Filters.jsx';
import { getVideogames } from '../../redux/actions/getVideogames';

export default function Home(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
      dispatch(getVideogames());
   };

  return (
    <div className={styles.background}>
      <button className={styles.homeButton} onClick={handleClick}>
        {/* <img className={styles.homeIcon} src={require("../../img/homeIcon.png")} alt="" /> */}
        HOME     
      </button>
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