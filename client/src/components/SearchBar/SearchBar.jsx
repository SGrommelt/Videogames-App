import React  from 'react';
// import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {

   //const [id, setId] = useState("");

   //const handleChange = (event) => setId(event.target.value);
   
   return (
      <div className={styles.searchBarContainer}>
         {/* <input value={id} onChange={handleChange} type='search' className={styles.input} placeholder="Ingrese ID..." /> */}
         <input type='search' placeholder="Ingrese ID..." />
         <button>Search</button>
         {/* <button onClick={() => props.onSearch(id)} className={styles.searchButton}>
            <span className={styles.buttonFirstTitle}>+</span>
            <span className={styles.buttonSecondTitle}>add</span>
         </button> */}
      </div>
   );
}