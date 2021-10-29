import React from 'react';
import './VideoAttraction.css'
import iconvideo from './img/iconvideo.png';

const VideoAttraction = () => {
    return (
        <div className="block-video">
            <div className="audio-header">
                <img src={iconvideo} alt="" className="icon-information-header" />
                <div className="text-information-header">Video</div>
                </div>
            <div className="list-video"></div>
        </div>
    );
};


export default VideoAttraction;