import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './product-listing.css'
import headerImage from '../../assets/1.jpg'
import anotherImage from '../../assets/home_img.jpg'

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {
    Image,
    ProductImage,

} from '../../components';


function ProductListing(props){

    var cosmetics = [
        [
            'Parkinson Cosmetic',
            headerImage,
            '$7',
            'Lorum Ispum Name',
            headerImage,
            '$7',
            'Lorum Ispum Name',
        ],
        [
            'Concealer',
            anotherImage,
            '$7',
            'Lorum Ispum Name',
            anotherImage,
            '$7',
            'Lorum Ispum Name',
        ]
    ]

    const [skinType, setskinType] = React.useState('African American');

    const handleChange = (event: SelectChangeEvent) => {
        setskinType(event.target.value);
    };

    return (
        <div className='product-listing-screen'>
            <div className='product-header'>
                <div>
                    <p style={{color: 'gray'}}>Skin Type</p>
                    
                </div>
                <div className='product-icon-container'>
                    <FilterAltIcon />
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={skinType}
                onChange={handleChange}
            >
                {
                    props.options.map(value => {
                        return(
                            <MenuItem value={value}>{value}</MenuItem>
                        )
                    })
                }
            </Select>

            <h2 style={{marginBottom: '5px'}}>Cosmetic Reccomendation</h2>
            <Image 
                img={headerImage}
                height="230px"
                width="380px"
                contentDetails="Cosmetic Bunder - Save 45%"
            />

            <div>
            {
                cosmetics.map(val => {
                    return (
                        <div>
                            <h4>{val[0]}</h4>
                            <div className='cosmetics-product-imgs'>
                                <ProductImage 
                                    img={val[1]}
                                    price={val[2]}
                                    name={val[3]}
                                />
                                <ProductImage 
                                    img={val[4]}
                                    price={val[5]}
                                    name={val[6]}
                                />
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>

    )
}

export default ProductListing;