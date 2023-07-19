import axios from 'axios';
import { POST_VIDEOGAME, ERROR } from '../types.js';
const ENDPOINT = 'https://videogames-app-obew.onrender.com/videogames';

export const postVideogame = (newVideogame) => {
   return async (dispatch) => {
      try {
        await axios.post(ENDPOINT, newVideogame);
        return dispatch({
            type: POST_VIDEOGAME
        });
      } catch(error) {
         return dispatch({
            type: ERROR,
            payload: error.message
         });
      }
   }
};                                  