import React, { Component } from 'react'
import './attractionBox.css';
import Header from '../header/header.js';
import Footer from '../footer/footer';
import iconhome from './img/iconhome.png';
import InformationAttraction from '../../sections/InformationAttraction/InformationAttraction.js'
import AudioAttraction from '../../sections/AudioAttraction/AudioAttraction.js'
import PhotoAttraction from '../../sections/PhotoAttraction/PhotoAttraction.js';
import VideoAttraction from '../../sections/VideoAttraction/VideoAttraction.js';
import RatingAttraction from '../../sections/RatingAttraction/RatingAttraction.js';
import ReviewsAttraction from '../../sections/ReviewsAttraction/ReviewsAttraction.js';
import KeyWordsAttraction from '../../sections/KeyWordsAttraction/KeyWordsAttraction.js';
import MainPhotoAttracrtion from '../../sections/MainPhotoAttraction/MainPhotoAttraction.js';
import HeaderAttraction from '../../sections/HeaderAttraction/HeaderAttraction.js';
import GeneralRateAttraction from '../../sections/GeneralRateAttraction/GeneralRateAttraction.js';

export default class AttractionBox extends Component {

    render() {
        return (
            <div>
                <Header flag_search={false} />
                <div className="body-attraction">
                    <div className="block-back-home">
                        <img src={iconhome} alt="" className="icon-home" />
                        <div className="text-home">Home - Attractions</div>
                    </div>
                    <GeneralRateAttraction />
                    <HeaderAttraction />
                    <MainPhotoAttracrtion />
                    <InformationAttraction />
                    <KeyWordsAttraction />
                    <AudioAttraction />
                    <PhotoAttraction />
                    <VideoAttraction />
                    <RatingAttraction />
                    <ReviewsAttraction />
                    <div className="block-author">Oleg Mukalo, 20/10/21 18:45</div>
                </div>
                <Footer />
            </div>
        )
    }
}