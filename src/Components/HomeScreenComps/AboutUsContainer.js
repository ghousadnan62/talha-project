import React from 'react';
import '../../App.css'
import MediaQuery from 'react-responsive';
import {ContactUsBreakPoint} from '../Utilities/ScreenBreakPoint';
import ContactUsCardComp from '../HomeScreenComps/ContactUsCardComp';
import MeetUsComp from '../HomeScreenComps/MeetUsComp';




const AboutUsContainer = () => {

    return (


        <div>

            {/*Content from Larger SCreens*/}
            <MediaQuery minWidth={ContactUsBreakPoint}>
                <div className={'briefAboutUsWrapper'}>
                    <div className={'titleStyling themeDarkFontColor'}>
                        About Us
                    </div>


                    <div className={'aboutUSContentWrapper'}>

                        <ContactUsCardComp/>

                        {/*-------------------------------------------------

                        Meet us Section
                        */}

                        <div className={'contactUSContentWrapper'}>
                            <div className={'border'}>
                                <div className={'subHeading themeDarkFontColor'}>
                                    Meet Us
                                </div>
                                <div>
                                    <MeetUsComp/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </MediaQuery>


        </div>
    );
};

export default AboutUsContainer;