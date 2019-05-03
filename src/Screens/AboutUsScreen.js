import React from 'react';
import WhoAreWeComp from '../Components/AboutUsScreenComps/WhoAreWeComp';
import OurTeamComp from '../Components/AboutUsScreenComps/OurTeamComp';
import OurVision from '../Components/AboutUsScreenComps/OurVision';
import HorizontalLineComp from '../Components/Utilities/HorizontalLineComp';


const AboutUsScreen = () => {
    return (
        <div className={"body themeBackground"}
            style={{
            paddingTop:'4em',
        }}>
            <WhoAreWeComp/>
            <HorizontalLineComp/>
            <OurTeamComp/>
            <HorizontalLineComp/>
            <OurVision/>
            <HorizontalLineComp/>
        </div>
    );
};

export default AboutUsScreen;