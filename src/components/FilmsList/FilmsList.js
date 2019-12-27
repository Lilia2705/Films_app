import React, {Component} from 'react';
import {connect} from "react-redux";
import {film} from "../../actions/films.action";

import './FilmsList.scss'

const CN = 'films-list'

class FilmsList extends Component {
    componentDidMount() {
        const {getFilms} = this.props;
        getFilms();
    }

    render() {
        const {films} = this.props;

        return (
            <div className={CN}>
                {films.map(el =>
                    <div className={`${CN}__item`}>
                   <span >
                        {el.overview}
                   </span>
                    <hr/>
                </div>
                )}
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
         films: state.filmReducer.films
    }
}

function mapDispatchToProps(dispatch){
    return {
        getFilms: (list) => dispatch(film(list))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList)
