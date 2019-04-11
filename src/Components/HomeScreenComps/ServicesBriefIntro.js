import React from 'react';
import '../../App.css'
import IconComp from '../Utilities/IconComp'
import MediaQuery from 'react-responsive';
import {ScreenBreakPoint1} from '../Utilities/ScreenBreakPoint';
import Fade from 'react-reveal/Fade';
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
                        /* height: `${window.innerHeight}px`*/
                     }}
                >

                    <div className={'titleStyling themeFontColor'}>
                        Our Services
                    </div>


                    <div>
                        <Fade left delay={200}>
                            <div className={'iconsStyling'}>
                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faDraftingCompass}
                                        titleText={'Designing'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faBuilding}
                                        titleText={'Infrastructure works'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faDoorOpen}
                                        titleText={'Interior design works'}
                                    />
                                </div>
                            </div>

                        </Fade>


                        <Fade left delay={550}>
                            <div className={'iconsStyling'}>
                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faTree}
                                        titleText={'Landscaping'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faUserShield}
                                        titleText={'Supervision'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faKey}
                                        titleText={'Turnkey Solution'}
                                    />
                                </div>
                            </div>
                        </Fade>


                        <Fade left delay={900}>
                            <div className={'iconsStyling'}>
                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faHardHat}
                                        titleText={'Construction'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faHandshake}
                                        titleText={'Consultancy'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faLeaf}
                                        titleText={' Green building Design '}
                                    />
                                </div>
                            </div>
                        </Fade>
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
                         /*height: `${window.innerHeight}px`*/
                     }}
                >

                    <div className={'titleStyling themeFontColor'}>
                        Our Services
                    </div>


                    <div>
                        <Fade left delay={200}>
                            <div className={'iconsStyling'}>
                                <div className={'iconPosition'}>

                                    <IconComp
                                        iconName={faBuilding}
                                        titleText={'Development'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faDraftingCompass}
                                        titleText={'Designing'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faDoorOpen}
                                        titleText={'Interior Works'}
                                    />
                                </div>
                            </div>

                        </Fade>


                        <Fade left delay={550}>
                            <div className={'iconsStyling'}>
                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faTree}
                                        titleText={'Landscaping'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faUserShield}
                                        titleText={'Supervision'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faKey}
                                        titleText={'Turnkey Solution'}
                                    />
                                </div>
                            </div>
                        </Fade>


                        <Fade left delay={900}>
                            <div className={'iconsStyling'}>
                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faHardHat}
                                        titleText={'Construction'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faHandshake}
                                        titleText={'Consultancy'}
                                    />
                                </div>

                                <div className={'iconPosition'}>
                                    <IconComp
                                        iconName={faLeaf}
                                        titleText={' Green building Design '}
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </MediaQuery>

        </div>


    );
};

export default ServicesBriefIntro;