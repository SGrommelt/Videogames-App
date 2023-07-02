import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID, POST_VIDEOGAME, FILTER_BY_ORIGIN, FILTER_BY_GENRE, ORDER, GET_GENRES, ERROR } from "./types";

const initialState = {
    videogamesFullList: [],
    allVideogames: [],
    videogameDetail: {},
    genres: [],
    errors: false,
    filterByOrigin: "All",
    filterByGenre: "All",
    filteredByGenre: [],
    filteredByOrigin: [],
    order: "Default",
    defaultOrderedRef: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES: {
            return {
                ...state,
                videogamesFullList: action.payload,
                allVideogames: action.payload,
                errors: false,
                defaultOrderedRef: action.payload,
                filterByOrigin: "All",
                filterByGenre: "All",
                order: "Default"
            }
        }
        case GET_VIDEOGAME_BY_ID: {
            return {
                ...state,
                videogameDetail: action.payload,
                errors: false
            }
        }
        case POST_VIDEOGAME: {
            return { ...state }
        }
        case ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }
        case FILTER_BY_ORIGIN: {
            let allVideogamesCopy = [];
            if(state.filterByGenre !== "All") {
                if(action.payload === "All") return {...state, allVideogames: [...state.filteredByGenre], filterByOrigin: action.payload}
                allVideogamesCopy = [...state.filteredByGenre];
            } else {
            if(action.payload === "All") return {...state, allVideogames: [...state.videogamesFullList], filterByOrigin: action.payload}
                allVideogamesCopy = [...state.videogamesFullList];
            }
            const filteredVideogames = allVideogamesCopy.filter(videogame => {
                if(action.payload === "Database") return typeof(videogame.id) === "string";
                return typeof(videogame.id) === "number"; 
            });
            const filteredByOrigin = [...state.videogamesFullList].filter(videogame => {
                if(action.payload === "Database") return typeof(videogame.id) === "string";
                return typeof(videogame.id) === "number"; 
            });
            return {
                ...state,
                allVideogames: filteredVideogames,
                filterByOrigin: action.payload,
                filteredByOrigin: filteredByOrigin
            }
        }
        case FILTER_BY_GENRE: {
            let allVideogamesCopy = [];
            if(state.filterByOrigin !== "All") {
                if(action.payload === "All") return {...state, allVideogames: [...state.filteredByOrigin], filterByGenre: action.payload}
                allVideogamesCopy = [...state.filteredByOrigin];
            } else {
                if(action.payload === "All") return {...state, allVideogames: [state.videogamesFullList], filterByGenre: action.payload}
                allVideogamesCopy = [...state.videogamesFullList];
            }
            const filteredVideogames = allVideogamesCopy.filter(videogame => videogame.genres.includes(action.payload));
            const filteredByGenre = [...state.videogamesFullList].filter(videogame => videogame.genres.includes(action.payload));
            return {
                ...state,
                allVideogames: filteredVideogames,
                filterByGenre: action.payload,
                filteredByGenre: filteredByGenre
            }
        }
        case ORDER: {
            if(action.payload === "Default") return {...state, allVideogames: [...state.defaultOrderedRef], order: action.payload, filterByOrigin: "All", filterByGenre: "All"}
            const sortFunction = (a, b) => {
                if(action.payload === "A-Z" || action.payload === "Z-A") {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return "A-Z" === action.payload ? 1 : -1;
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return "Z-A" === action.payload ? 1 : -1;
                } else {
                    if (a.rating > b.rating) return "Ascending" === action.payload ? 1 : -1;
                    if (a.rating < b.rating) return "Descending" === action.payload ? 1 : -1;
                }
                return 0;
            }
            const allVideogamesCopy = [...state.allVideogames];
            const fullListCopy = [...state.videogamesFullList];
            const newAllVideogames = allVideogamesCopy.sort((a, b) => sortFunction(a, b));
            const newFullList = fullListCopy.sort((a, b) => sortFunction(a, b));
            return {
                ...state,
                allVideogames: newAllVideogames,
                videogamesFullList: newFullList,
                order: action.payload
            }
        }
        case GET_GENRES: {
            return {
                ...state,
                genres: action.payload,
                errors: false
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default reducer;