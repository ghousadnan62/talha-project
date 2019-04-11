import React from 'react';
import '../../App.css';
import MeetUsContainer from './MeetUsContainer'


const AboutUsContainer = () => {

    return (

        <div className={'briefAboutUsWrapper'}>
            <div className={'titleStyling themeDarkFontColor'}>
                About Us
            </div>
            <div className={'textStyling themeDarkFontColor'}>
                Shelters Engineering services was formed by a group of vibrant engineers and architects from
                professional institutions of Pakistan with the aim to provide general contracting, construction
                management and pre-engineered metal building services to a broad range of residential, commercial and
                industrial clients throughout the country.
            </div>

            <div className={'flexColumnCenter'}>
                <div className={'subSubHeading themeDarkFontColor'}>
                    Office Information
                </div>
                <div>

                </div>
            </div>
        </div>

    );
};

export default AboutUsContainer;