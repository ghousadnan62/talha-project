import Button from "@material-ui/core/Button";
import React from "react";


const ButtonComp = (props) => (
        <Button
            onClick={props.onClock}
            color={'inherit'}
        >
            {props.children.toUpperCase()}
        </Button>
    );


export default ButtonComp;