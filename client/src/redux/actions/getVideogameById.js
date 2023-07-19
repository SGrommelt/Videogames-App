import axios from 'axios';
import { GET_VIDEOGAME_BY_ID, ERROR } from '../types.js';
const ENDPOINT = 'https://videogames-app-obew.onrender.com/videogames/';

export const getVideogameById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(ENDPOINT + id);
            return dispatch({
                type: GET_VIDEOGAME_BY_ID,
                payload: data
            })
        } catch(error) {
            return dispatch({
               type: ERROR,
               payload: error.message
            });
        }
    }
}