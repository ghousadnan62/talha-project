import React from 'react';
import '../../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from "@fortawesome/free-solid-svg-icons";

/*This component would take following props
* -----------------------------------------
* iconName
* titleText
*
* */



const iconSize = '7x';
const themeColor = '#FBF5C5';
const tranfromCont = 'shrink-7';
const maskingShape=faCircle;

const IconComp=(props)=>{
    return(
        <div className={'iconTextAdjustment'}>

            <FontAwesomeIcon icon={props.iconName}
                             size={iconSize}
                             mask={maskingShape}
                             color={themeColor}
                             transform={tranfromCont}

            />
            <div className={'themeFontColor iconText'}>
                {props.titleText}
            </div>
        </div>
    )
};

export default IconComp;