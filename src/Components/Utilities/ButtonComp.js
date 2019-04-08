import Button from "@material-ui/core/Button";
import React from "react";
import '../../App.css'

/*
* Custom Button; Uses following Props
* onClick
* */

const ButtonComp = (props) => (
        <Button
            onClick={props.onClick}
            className={'headerButton'}
        >
            {props.children.toUpperCase()}
        </Button>
    );


export default ButtonComp;