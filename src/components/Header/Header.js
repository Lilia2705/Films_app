import React, {Component, createContext} from 'react';

import './Header.scss'

import {UserInfo} from "../UserInfo/UserInfo";

const Context = createContext();

const CN = 'header'

class Header extends Component {

    // state = {
    //     isOn: false
    // };

    // handler = () => this.setState(prev => ({ isOn: !prev.isOn }));


    render() {

        // const {toggler, data: {isOn}} = this.context;

        return (
            <div className={CN}>

                {/*<Context.Provider*/}
                {/*    value={{*/}
                {/*        data: this.state,*/}
                {/*        toggler: this.handler*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Toggle />*/}
                {/*</Context.Provider>*/}

                <div className={`${CN}__search-area`}></div>
                <UserInfo/>

            </div>
        )
    }
}

export default Header

