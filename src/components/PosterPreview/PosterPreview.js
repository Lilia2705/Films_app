//TODO Poster!!
import React, {Component} from 'react';
import {connect} from "react-redux";
import {film} from "../../actions/films.action";


class PosterPreview extends Component {
    componentDidMount() {
        const {getFilms} = this.props;
        getFilms();
    }

    render() {
        const {films} = this.props;
        return (
            <div>
                {films.map(el =>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500 + {el.poster_path}`} alt='Poster'/>
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

function mapDispatchToProps(dispatch) {
    return {
        getFilms: (list) => dispatch(film(list))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PosterPreview)
