import React, {Component, createContext} from 'react';

import './Header.scss'

import {UserInfo} from "../UserInfo/UserInfo";

const CN = 'header'

class Header extends Component {

    render() {
        return (
            <div className={CN}>
                <div className={`${CN}__search-area`}></div>
                <UserInfo/>
            </div>
        )
    }
}

export default Header

