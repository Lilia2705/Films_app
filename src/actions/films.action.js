import {Adapter} from './apiAdapter';

import {GET_FILMS} from './actionTypes'

export const film = () => (dispatch) => {

    Adapter.getFilms('3/discover/movie?page=2').then((data) => {
        dispatch({
            type: GET_FILMS,
            payload: {
                films: data.data.results
            }
        })
    })
};


