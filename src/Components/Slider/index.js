import React from 'react';
import ImageSlider from './ImageSlider'
import '../../App.css'
import Zoom from 'react-reveal'

const Index = () => {
    return (
        <div  className={'sliderWrapper'}>

            <ImageSlider/>

            <div className={'textWrapper'}>
                <Zoom delay={1000}>
                    <div>
                        <div className={'companyName upperCase fontRighteous'}>
                            <p>Shelters <br/> Engineering <br/> Services</p>
                        </div>
                    </div>
                </Zoom>

                <Zoom delay={3000}>
                    <div>
                        <div className={'slogan upperCase themeFontColor'}>
                            <p>We build your dreams</p>
                        </div>
                    </div>
                </Zoom>
            </div>

        </div>
    );
};

export default Index;