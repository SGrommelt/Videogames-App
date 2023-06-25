import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID, FILTER_BY_GENRE, FILTER_BY_ORIGIN, ERROR } from "./types";

const initialState = {
    videogamesFullList: [],
    allVideogames: [],
    videogameDetail: {},
    errors: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES: {
            return {
                ...state,
                videogamesFullList: action.payload,
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
        case FILTER_BY_GENRE: {
            if(action.payload === "All") return {...state, allVideogames: state.videogamesFullList}
            const allVideogamesCopy = [...state.videogamesFullList];
            const filteredVideogames = allVideogamesCopy.filter(videogame => videogame.genres.includes(action.payload));
            return {
                ...state,
                allVideogames: filteredVideogames
            }
        }
        case FILTER_BY_ORIGIN: {
            if(action.payload === "All") return {...state, allVideogames: state.videogamesFullList}
            const allVideogamesCopy = [...state.videogamesFullList];
            const filteredVideogames = allVideogamesCopy.filter(videogame => {
                if(action.payload === "Database") return typeof(videogame.id) === "string";
                return typeof(videogame.id) === "number";
            });
            return {
                ...state,
                allVideogames: filteredVideogames
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default reducer;