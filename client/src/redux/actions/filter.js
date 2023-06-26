import { FILTER, ORDER } from '../types.js';

export const filter = (filter) => {
    return {
        type: FILTER,
        payload: filter
    }
};

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};