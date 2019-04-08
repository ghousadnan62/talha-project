import React from 'react';
import ImageSlider from './ImageSlider'
import '../../App.css'
import Slide from 'react-reveal'

const Index = () => {
    return (
        <div className={'sliderWrapper'}>

            <ImageSlider/>

            <div>
                <Slide top>
                    <div className={'textWrapper'}>
                        <div className={'companyName upperCase fontRighteous'}>
                            <p>Shelters <br/> Engineering <br/> Services</p>
                        </div>
                    </div>
                </Slide>

                <Slide bottom>

                    <div className={'slogan upperCase themeFontColor'}>
                        We Build Your Dreams
                    </div>
                </Slide>
            </div>

        </div>
    );
};

export default Index;