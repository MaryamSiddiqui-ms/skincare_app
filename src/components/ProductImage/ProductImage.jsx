import React from 'react'
import './product-img.css'

function ProductImage(props){

    const mystyles = {
        borderRadius: '10px'
    }

    return(
        <div className='product-img-container'>
            <img
                height='180px'
                width='175px'
                className='product-img'
                src={props.img} alt="Product Image" 
            />
            <div className='prd-img-price'>
                {props.price}
            </div>
            <div className='prd-img-name'>
                {props.name}
            </div>
        </div>
    )
}

export default ProductImage;