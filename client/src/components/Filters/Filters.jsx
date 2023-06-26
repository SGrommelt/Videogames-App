import React  from 'react';
import styles from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { filterByGenre, filterByOrigin, order } from '../../redux/actions/filter.js';

export default function Filters(props) {
    const dispatch = useDispatch();
    
    const handleFilterByGenre = (event) => {
        dispatch(filterByGenre(event.target.value));
    }

    const handleFilterByOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value));
    }

    const handleOrder = (event) => {
        dispatch(order(event.target.value));
    }

    return (
        <div className={styles.filtersContainer}>
            <label for="OrderBy">Order by: </label>
            <select name="OrderBy" className={styles.dropDown} onChange={handleOrder}>
                <option className={styles.mainOption} value="Default">Default</option>
                <optgroup label="Order By Name">
                    <option className={styles.mainOption} value="A-Z">A-Z</option>
                    <option className={styles.option} value="Z-A">Z-A</option>
                </optgroup>
                <optgroup label="Order By Rating">
                    <option className={styles.mainOption} value="Ascending">Ascending</option>
                    <option className={styles.option} value="Descending">Descending</option>
                </optgroup>
            </select>
            <label for="FilterByGenre">Filter by genre: </label>
            <select name="FilterByGenre" className={styles.dropDown} onChange={handleFilterByGenre}>
                <option className={styles.option} value="All">All</option>
                <option className={styles.option} value="Action">Action</option>
                <option className={styles.option} value="Indie">Indie</option>
                <option className={styles.option} value="Adventure">Adventure</option>
                <option className={styles.option} value="RPG">RPG</option>
                <option className={styles.option} value="Strategy">Strategy</option>
                <option className={styles.option} value="Shooter">Shooter</option>
                <option className={styles.option} value="Casual">Casual</option>
                <option className={styles.option} value="Simulation">Simulation</option>
                <option className={styles.option} value="Puzzle">Puzzle</option>
                <option className={styles.option} value="Arcade">Arcade</option>
                <option className={styles.option} value="Platformer">Platformer</option>
                <option className={styles.option} value="Massively Multiplayer">Massively Multiplayer</option>
                <option className={styles.option} value="Racing">Racing</option>
                <option className={styles.option} value="Sports">Sports</option>
                <option className={styles.option} value="Fighting">Fighting</option>
                <option className={styles.option} value="Family">Family</option>
                <option className={styles.option} value="Board Games">Board Games</option>
                <option className={styles.option} value="Educational">Educational</option>
                <option className={styles.option} value="Card">Card</option>
            </select>
            <label for="FilterByOrigin">Filter by origin: </label>
            <select name="FilterByOrigin" className={styles.dropDown} onChange={handleFilterByOrigin}>
                <option className={styles.option} value="All">All</option>
                <option className={styles.option} value="Database">Database</option>
                <option className={styles.option} value="API">API</option>
            </select>
        </div>
    );
}