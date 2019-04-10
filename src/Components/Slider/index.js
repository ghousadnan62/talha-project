import React from 'react';
import ImageSlider from './ImageSlider'
import '../../App.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';

const Index = () => {
    return (
        <div className={'sliderWrapper'}>

            <ImageSlider/>

            <div className={'textWrapper'}>
                <div>
                    <Fade right delay={500}>

                        <div className={'companyName upperCase fontRighteous'}>
                            <p>Shelters <br/> Engineering <br/> Services</p>
                        </div>

                    </Fade>
                </div>
                <div style={{marginTop: -50}}>
                    <Fade left delay={500}>

                        <div className={'slogan upperCase themeFontColor'}>
                            <p>We build your dreams</p>
                        </div>

                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default Index;