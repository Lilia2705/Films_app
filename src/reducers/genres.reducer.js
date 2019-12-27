import {GET_GENRES} from '../actions/actionTypes';

const initialState = {
    genres: []
};

export  const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES: {
            const {payload: {genres}} = action;
            console.log(genres);
            return {
                ...state,
                genres
            }
        }

        default:
            return state
    }
};

