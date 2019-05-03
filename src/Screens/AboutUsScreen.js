import React from 'react';
import WhoAreWeComp from '../Components/AboutUsScreenComps/WhoAreWeComp';


const AboutUsScreen = () => {
    return (
        <div className={"body"}
            style={{
            paddingTop:'4em'
        }}>
            <WhoAreWeComp/>
        </div>
    );
};

export default AboutUsScreen;