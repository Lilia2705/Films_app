import React, {Component} from "react";

import Header from "../../components/Header/Header";
import FilmsList from "../../components/FilmsList/FilmsList";

import './FilmsPage.scss'

const CN = 'films-page';

class FilmsPage extends Component {

    render() {
        return (
        <div className={`${CN}`}>
            <Header/>
            <FilmsList/>
        </div>
        )
    }
}

export default FilmsPage;

