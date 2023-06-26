import { FILTER_BY_GENRE, FILTER_BY_ORIGIN, ORDER } from '../types.js';

export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    }
};

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
};

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};