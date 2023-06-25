import { FILTER_BY_GENRE } from '../types.js';

  export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    }
};