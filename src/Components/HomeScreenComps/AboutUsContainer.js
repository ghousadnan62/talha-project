import React from 'react';
import '../../App.css'
import MediaQuery from 'react-responsive';
import {ContactUsBreakPoint} from '../Utilities/ScreenBreakPoint';
import ContactUsCardComp from '../HomeScreenComps/ContactUsCardComp';
import MeetUsContainer from './MeetUsContainer'


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
                        <div style={{
                            flex:1
                        }}>
                            <ContactUsCardComp/>
                        </div>
                        {/*-------------------------------------------------

                        Meet us Section
                        */}

                        <div className={'contactUSContentWrapper'}>
                            <div className={'border'} style={{flex:1}}>
                                <div className={'subHeading themeDarkFontColor'}>
                                    Meet Us
                                </div>
                                <div>
                                    <MeetUsContainer/>
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