import React from 'react';
import '../../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faCircle, faCopyright} from "@fortawesome/free-solid-svg-icons";


const FooterComp = () => {
    const brandIconSize = '2x';
    const brandIconTransform = 'shrink-7';
    const themeColor = '#FBF5C5';


    return (
        <div className={'themeBackground'}
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                padding:'1em'

            }}

        >

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flex:3,
                alignItems:'center',
                justifyContent:'flex-start',
            }}>
                <div>
                    <FontAwesomeIcon
                        icon={faCopyright}
                        size={'2x'}
                        transform={brandIconTransform}
                        color={themeColor}
                    />
                </div>

                <div className={'themeFontColor'}>
                    2019 Shelters Engineering Services Private LTD.
                    All Rights Reserved
                </div>

            </div>


            <div style={{
                display:'flex',
                flex:1,
                justifyContent:'space-around',
            }}>
                <FontAwesomeIcon
                    icon={faFacebookF}
                    size={brandIconSize}
                    mask={faCircle}
                    transform={brandIconTransform}
                    color={themeColor}
                />

                <FontAwesomeIcon
                    icon={faTwitter}
                    size={brandIconSize}
                    mask={faCircle}
                    transform={brandIconTransform}
                    color={themeColor}
                />

                <FontAwesomeIcon
                    icon={faLinkedin}
                    size={brandIconSize}
                    mask={faCircle}
                    transform={brandIconTransform}
                    color={themeColor}
                />
            </div>
        </div>
    );
};

export default FooterComp;