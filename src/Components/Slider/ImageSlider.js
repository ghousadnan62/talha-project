import React from 'react';
import Slider from 'react-slick';
import '../../App.css'
import slideOne from '../../Resources/Images/1.jpg';
import slideTwo from '../../Resources/Images/2.jpg';
import slideThree from '../../Resources/Images/3.jpg';



const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }



    return (
        <div style={{
            overflow:"hidden",
            height:`${window.innerHeight}px`,
            width:`${window.innerWidth}px`,
        }}>
            <Slider {...settings}>
                <div >
                    <div
                        className={'sliderImage'}
                        style={{
                            background:`url(${slideThree}`,
                            height:`${window.innerHeight}px`,
                            backgroundPosition: "center",
                            backgroundSize:"cover"
                        }}
                    >
                    </div>
                </div>

                <div>
                    <div
                        className={'sliderImage'}
                        style={{
                            background:`url(${slideTwo}`,
                            height:`${window.innerHeight}px`,
                            backgroundPosition: "center",
                            backgroundSize:"cover"
                        }}
                    >
                    </div>
                </div>

                <div>
                    <div
                        className={'sliderImage'}
                        style={{
                            background:`url(${slideOne}`,
                            height:`${window.innerHeight}px`,
                            backgroundPosition: "center",
                            backgroundSize:"cover"
                        }}
                    >
                    </div>
                </div>

            </Slider>

        </div>
    );
};

export default ImageSlider;