import axios from 'axios';
import { GET_GENRES, ERROR } from '../types.js';
const ENDPOINT = 'http://localhost:3001/genres';

export const getGenres = () => {
   return async (dispatch) => {
      try {
        const { data } = await axios.get(ENDPOINT);
        return dispatch({
        type: GET_GENRES,
        payload: data,
        });
      } catch(error) {
         return dispatch({
            type: ERROR,
            payload: error.message
         });
      }
   }
};