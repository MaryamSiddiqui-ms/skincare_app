import React from 'react';

function Image(props){

    const mystyles = {
        height: props.height,
        widht: props.widht,
        borderRadius: '15px',
        margin: '5px 7px'
    }

    return (
        <div className='img-container'>
            <img style={mystyles} className='img' src={props.img} alt="Image" />
        </div>

    );
}

export default Image;