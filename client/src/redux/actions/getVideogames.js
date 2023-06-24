import axios from 'axios';
import { GET_VIDEOGAMES, ERROR } from '../types.js';
const ENDPOINT = 'http://localhost:3001/videogames';

export const getVideogames = () => {
    return async (dispatch) => {
       try {
          const { data } = await axios.get(ENDPOINT);
          return dispatch({
             type: GET_VIDEOGAMES,
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