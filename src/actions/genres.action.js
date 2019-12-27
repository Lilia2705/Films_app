import {Adapter} from './apiAdapter';
import {GET_GENRES} from './actionTypes'

export const genre = () => (dispatch) => {

    Adapter.getFilms('3/genre/movie/list').then((data) => {
        dispatch({
            type: GET_GENRES,
            payload: {
                genres: data.data.results
            }
        })
    })
};
