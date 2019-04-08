import Button from "@material-ui/core/Button";
import React from "react";


/*
* Custom Button; Uses following Props
* onClick
* */

const ButtonComp = (props) => (
        <Button
            onClick={props.onClick}
            color={'inherit'}
        >
            {props.children.toUpperCase()}
        </Button>
    );


export default ButtonComp;