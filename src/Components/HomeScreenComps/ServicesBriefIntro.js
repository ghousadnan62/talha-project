import React from 'react';
import '../../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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

const iconSize = '10x'
const themeColor = '#FBF5C5'

const ServicesBriefIntro = () => {
    return (
        <div className={'themeBackground'}>
            <div className={'servicesInfoWrapper'}>

                <div className={'titleStyling themeFontColor'}>
                    Our Services
                </div>


                <div className={'iconsWrapper'}>

                    <div className={'iconsStyling'}>
                        <div>
                        <FontAwesomeIcon icon={faDraftingCompass} size={iconSize} color={themeColor}/>
                        </div>

                        <div>
                        <FontAwesomeIcon icon={faBuilding} size={iconSize} color={themeColor}/>
                        </div>

                        <div>
                        <FontAwesomeIcon icon={faDoorOpen} size={iconSize} color={themeColor}/>
                        </div>
                    </div>

                    <div className={'iconsStyling'}>
                        <FontAwesomeIcon icon={faUserShield} size={iconSize} color={themeColor}/>
                        <FontAwesomeIcon icon={faTree} size={iconSize} color={themeColor}/>
                        <FontAwesomeIcon icon={faKey} size={iconSize} color={themeColor}/>
                    </div>

                    <div className={'iconsStyling'}>
                        <FontAwesomeIcon icon={faHardHat} size={iconSize} color={themeColor}/>
                        <FontAwesomeIcon icon={faHandshake} size={iconSize} color={themeColor}/>
                        <FontAwesomeIcon icon={faLeaf} size={iconSize} color={themeColor}/>
                    </div>

                    </div>
                </div>
            </div>
            );
            };

            export default ServicesBriefIntro;