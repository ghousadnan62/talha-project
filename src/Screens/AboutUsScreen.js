import React from 'react';
import WhoAreWeComp from '../Components/AboutUsScreenComps/WhoAreWeComp';
import OurTeamComp from '../Components/AboutUsScreenComps/OurTeamComp';
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
        </div>
    );
};

export default AboutUsScreen;