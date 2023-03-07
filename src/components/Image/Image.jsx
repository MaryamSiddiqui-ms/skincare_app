import React from 'react';
import './image.css'

function Image(props){

    const mystyles = {
        height: props.height,
        widht: props.widht,
        borderRadius: '10px',
        margin: '5px 7px'
    }

    return (
        <div className='img-container'>
            <img style={mystyles} className='img' src={props.img} alt="Image" />
            <div className='content-over-image'>
                {props.contentDetails}
            </div>
        </div>

    );
}

export default Image;