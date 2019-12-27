import React from 'react';
import NotFoundImg from '../../assets/not-found.png';


const CN = "not-found-page";

const NotFoundPage = () => {
    return (
        <div className={CN}>
            <img alt="not-found" src={NotFoundImg}/>
        </div>
    );
};

export default NotFoundPage;
