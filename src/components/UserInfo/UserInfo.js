import React, {Component} from 'react';

import UserIcon from "../../assets/user-icon.png";

import './UserInfo.scss'

const CN = 'user-info';

export class UserInfo extends Component {
    render() {
        return(
            <div className={CN}>
                <img alt="user-icon" src={UserIcon} className={`${CN}__user-icon`}/>
                <p className={`${CN}__text`}>
                    Welcome, user!
                </p>
            </div>
        )
    }
}
