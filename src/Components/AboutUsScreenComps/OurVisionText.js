import React from 'react';

const OurVisionText = (props) => {
    return (
        <div style={{
            width:"15em",
            textAlign:"justify",
            paddingLeft:"0.5em"
        }}>
            {props.children}
        </div>
    );
};

export default OurVisionText;