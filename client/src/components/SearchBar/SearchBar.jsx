import React, { useState } from 'react';
import styles from "./SearchBar.module.css";
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions/getVideogames';

export default function SearchBar(props) {
   const dispatch = useDispatch();
   const [name, setName] = useState("");

   const handleChange = (event) => setName(event.target.value);

   const handleClick = () => {
      dispatch(getVideogames(name));
      setName("");
   };
   
   return (
      <form className={styles.searchBarContainer}>
         <input value={name} onChange={handleChange} className={styles.input} type='search' placeholder="Search by Name..." required/>
         <button onClick={handleClick} className={styles.searchButton}>Search</button>
      </form>
   );
}