import React  from 'react';
import styles from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Cards from "../Cards/Cards";
import Filters from '../Filters/Filters.jsx';

export default function Home(props) {
  return (
    <div className={styles.background}>
      <h1>Home</h1>
      <SearchBar />
      <Filters />
      <Cards />
    </div>
  );
}