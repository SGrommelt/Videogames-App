import React  from 'react';
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar.jsx";
import Cards from "../Cards/Cards";
import Filters from '../Filters/Filters.jsx';

export default function Home(props) {
  return (
    <div className={styles.background}>
      <h1>Home</h1>
      <SearchBar />
      <Filters />
      <Link to='/form'>
        <button>Add Videogame</button>
      </Link>
      <Cards />
    </div>
  );
}