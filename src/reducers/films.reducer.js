import {GET_FILMS} from '../actions/actionTypes';

const initialState = {
    films: []
};

export const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS: {
            const {payload: {films}} = action;
            return {
                ...state,
                films
            }
        }

        default:
            return state
    }
};

