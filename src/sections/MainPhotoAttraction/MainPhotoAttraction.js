import React from 'react';
import './MainPhotoAttraction.css'
import mainphoto from './img/mainphoto.png';

const MainPhotoAttracrtion = () => {
    return (
        <div className="block-main-photo">
            <img src={mainphoto} alt="" className="main-photo" />
        </div>
    );
};


export default MainPhotoAttracrtion;