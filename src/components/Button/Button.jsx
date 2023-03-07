import React from "react";
import './button.css';
import "@fontsource/montserrat";

// var theme = {
//     backgroundColor: '#040b28'
//     color: '#464646'
// }

function Button(props)
{
    const mystyles = {
        backgroundColor: props.theme === 'light' ? 'white' : '#040b28',
        color: props.theme === 'light' ? '#484647' : '#fcf8fc',
        fontFamily: 'montserrat'
    }
     
    return(
        <button className="btn" style={mystyles}>
            {props.txt}
        </button>
    )
}

export default Button