import { SET_CURRENT_PAGE } from '../types.js';

export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageNumber
    }
};