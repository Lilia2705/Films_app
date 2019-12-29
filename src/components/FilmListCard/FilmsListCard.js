import React, {Component} from 'react';
import {connect} from "react-redux";

import {film} from "../../actions/films.action";
import FilmInfo from "../FilmInfo/FilmInfo";
import PosterPreview from "../PosterPreview( don\'t use it/PosterPreview";
import './FilmListCard.scss'
import GenreBadge from "../GenreBadge/GenreBadge";


const CN = 'film-list-card'


class FilmsListCard extends Component {
    componentDidMount() {
        const {getFilms} = this.props;
        getFilms();
    }

    render() {
        const {films} = this.props;
        return (
            <div className={`${CN}__item`}>
                <GenreBadge/>
                <FilmInfo/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        films: state.filmReducer.films
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFilms: (list) => dispatch(film(list))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsListCard)
