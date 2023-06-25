import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID, ERROR } from "./types";

const initialState = {
    allVideogames: [],
    videogameDetail: {},
    errors: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES: {
            return {
                ...state,
                allVideogames: action.payload,
                errors: false
            }
        }
        case GET_VIDEOGAME_BY_ID: {
            return {
                ...state,
                videogameDetail: action.payload,
                errors: false
            }
        }
        case ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default reducer;