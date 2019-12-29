import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {filmReducer} from './reducers/films.reducer'
import {genreReducer} from './reducers/genres.reducer'

import {createStore, applyMiddleware, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const logger = store => next => action => {
    console.log('current state ', store.getState());
    console.log(`Action type: ${action.type}, payload: ${action.payload}`);

    return next(action);
};
const rootReducer = combineReducers({
    filmReducer,
    genreReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(logger,
    thunk
));


const app = (
    <Provider store={store}>
    <App/>
    </Provider>
)

ReactDOM.render(
     app,
    document.getElementById('root'));


