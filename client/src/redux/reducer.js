import { GET_VIDEOGAMES, ERROR } from "./types";

const initialState = {
    allVideogames: [],
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