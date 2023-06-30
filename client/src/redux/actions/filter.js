import { FILTER_BY_ORIGIN, FILTER_BY_GENRE, ORDER } from '../types.js';

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
};

export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    }
};

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};