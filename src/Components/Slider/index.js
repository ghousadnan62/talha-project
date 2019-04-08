import React from 'react';
import ImageSlider from './ImageSlider'
import '../../App.css'


const Index = () => {
    return (
        <div className={'sliderWrapper'}>

            <ImageSlider/>

            <div className={'companyName'}>
                Shelters <br/> Engineering <br/> Services
            </div>

        </div>
    );
};

export default Index;