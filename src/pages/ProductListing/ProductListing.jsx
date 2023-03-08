import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './product-listing.css'
import _8 from '../../assets/8.jpg'
import _1 from '../../assets/2.jpg'
import _3 from '../../assets/3.jpg'
import _4 from '../../assets/4.jpg'
import _5 from '../../assets/5.jpg'
import _6 from '../../assets/6.jpg'
import _7 from '../../assets/7.jpg'
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {
    Image,
    ProductImage,

} from '../../components';


function ProductListing(props){
    const navigate = useNavigate()

    var cosmetics = [
        [
            'Parkinson Cosmetic',
            _5,
            '$7',
            'Lorum Ispum Name',
            _4,
            '$7',
            'Lorum Ispum Name',
        ],
        [
            'Concealer',
            _3,
            '$7',
            'Lorum Ispum Name',
            _1,
            '$7',
            'Lorum Ispum Name',
        ],
    ]


    const [skinType, setskinType] = React.useState('African American');

    const handleChange = (event) => {
        setskinType(event.target.value);
    };

    return (
        <div className='product-listing-screen'>
            <div className='product-header'>
                <div>
                    <p style={{color: 'gray'}}>Skin Type</p>
                    
                </div>
                <div className='product-icon-container'>
                    <FilterAltIcon onClick={() => navigate('/auto-filter')} />
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>

            <Select
         
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={skinType}
            onChange={handleChange}  // Fix the onChange handler here
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
                img={_8}
                height="230px"
                width="380px"
                contentDetails="Cosmetic Bundle - Save 45%"
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