import React from 'react'
import './AccessibilitySettings.css'

function TextSizeSelection(props){
    return 
    (
        <div className='text-size-container'>
            <p style={{color: 'black'}}>Select Text Size</p>
            <div className='small'>A</div>
            <div className='medium'>A</div>
            <div className='large'>A</div>
        </div>
    )
}

export default TextSizeSelection