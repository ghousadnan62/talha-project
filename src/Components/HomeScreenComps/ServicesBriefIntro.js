import React from 'react';
import '../../App.css'
import IconComp from '../Utilities/IconComp'
import MediaQuery from 'react-responsive';
import {ScreenBreakPoint1} from '../Utilities/ScreenBreakPoint';

import {
    faDraftingCompass,
    faBuilding,
    faDoorOpen,
    faUserShield,
    faTree,
    faHardHat,
    faHandshake,
    faKey,
    faLeaf
}
    from "@fortawesome/free-solid-svg-icons";


const ServicesBriefIntro = () => {
    return (
        <div>
            {/*//Media Query for Laptops*/}
            <MediaQuery minWidth={ScreenBreakPoint1}>
                <div className={'servicesInfoWrapper themeBackground'}
                     style={{
                         height: `${window.innerHeight}px`
                     }}
                >

                    <div className={'titleStyling themeFontColor'}>
                        Our Services
                    </div>


                    <div className={'iconsWrapper'}>

                        <div className={'iconsStyling'}>
                            <IconComp
                                iconName={faDraftingCompass}
                                titleText={'Designing'}
                            />
                            <IconComp
                                iconName={faBuilding}
                                titleText={'Infrastructure'}
                            />

                            <IconComp
                                iconName={faDoorOpen}
                                titleText={'Interior Works'}
                            />
                        </div>


                        <div className={'iconsStyling'}>
                            <IconComp
                                iconName={faUserShield}
                                titleText={'Supervision'}
                            />
                            <IconComp
                                iconName={faTree}
                                titleText={'Landscaping'}
                            />

                            <IconComp
                                iconName={faHardHat}
                                titleText={'Construction'}
                            />
                        </div>


                        <div className={'iconsStyling'}>
                            <IconComp
                                iconName={faHandshake}
                                titleText={'Consultancy'}
                            />
                            <IconComp
                                iconName={faKey}
                                titleText={'Turnkey'}
                            />

                            <IconComp
                                iconName={faLeaf}
                                titleText={'Green Design'}
                            />
                        </div>

                    </div>
                </div>
            </MediaQuery>


           {/* -----------------------------------------------------------------
            //Media Query for Mobiles
            //Here the icons components are 6
            instead of 9
            ------------------------------------------------------------------*/}

            <MediaQuery maxWidth={ScreenBreakPoint1}>
                <div className={'servicesInfoWrapper themeBackground'}
                     style={{
                         height: `${window.innerHeight}px`
                     }}
                >

                    <div className={'titleStyling themeFontColor'}>
                        Our Services
                    </div>


                    <div className={'iconsWrapper'}>

                        <div className={'iconsStyling'}>
                            <IconComp
                                iconName={faDraftingCompass}
                                titleText={'Designing'}
                            />
                            <IconComp
                                iconName={faBuilding}
                                titleText={'Infrastructure'}
                            />

                        </div>


                        <div className={'iconsStyling'}>
                            <IconComp
                                iconName={faUserShield}
                                titleText={'Supervision'}
                            />

                            <IconComp
                                iconName={faHardHat}
                                titleText={'Construction'}
                            />
                        </div>


                        <div className={'iconsStyling'}>
                            <IconComp
                                iconName={faHandshake}
                                titleText={'Consultancy'}
                            />
                            <IconComp
                                iconName={faKey}
                                titleText={'Turnkey'}
                            />
                        </div>

                    </div>
                </div>
            </MediaQuery>

        </div>


    );
};

export default ServicesBriefIntro;