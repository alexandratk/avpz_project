import React from 'react';
import './InformationAttraction.css'
import iconinformation from './img/iconinformation.png';

const InformationAttraction = () => {
    return (
        <div className="block-information">
            <div className="information-header">
                <img src={iconinformation} alt="" className="icon-information-header" />
                <div className="text-information-header">Information</div>
                </div>
            <div className="information-main"></div>
        </div>
    );
};

export default InformationAttraction;