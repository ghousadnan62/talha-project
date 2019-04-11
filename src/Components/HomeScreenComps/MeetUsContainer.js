import React from 'react';
import Slider from 'react-slick'
import '../../App.css'
import {islamabadOfficeLocation, lahoreOfficeLocation, bahawalpurOfficeLocation} from "./MeetUsComp";


const MeetUsContainer = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div style={{
            width:400,
            height:400
        }}>
            <Slider  {...settings}>
                <div>
                    <div style={{
                        width: 300
                    }}>
                        Islamabad Office
                        {islamabadOfficeLocation}
                    </div>
                </div>

                <div>
                    <div>
                        Lahore Office
                        {lahoreOfficeLocation}
                    </div>
                </div>

                <div>
                    <div>
                        Bahwalpur Office
                        {bahawalpurOfficeLocation}
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default MeetUsContainer;