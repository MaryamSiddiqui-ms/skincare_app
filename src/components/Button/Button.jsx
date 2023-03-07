import { fontGrid } from "@mui/material/styles/cssUtils";
import React from "react";
import './button.css';
import "@fontsource/montserrat";

function Button(props)
{
    const mystyles = {
        backgroundColor: props.theme === 'light' ? 'white' : '#040b28',
        color: props.theme === 'light' ? '#484647' : '#fcf8fc',
        marginLeft: '10px',
        height: props.height,
        width: props.width,
    }
     
    return(
        <button className="btn" style={mystyles}>
            {props.txt}
        </button>
    )
}

export default Button