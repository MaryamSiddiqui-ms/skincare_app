import React, { useState } from 'react';
import './home.css'
import home_img from '../../assets/home_img.jpg'
import {Button, Image} from './../../components';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const countries = [
  {
    value: 'USD',
    label: '+1',
  },
];


function Home() {
  const [companyTitle, setCompanyTitle] = useState('TEST'); // Set default company title
  const [companySubTitle, setCompanySubTitle] = useState('Companies'); // Set default company title
  const [country, setCountry] = useState('USD');

  return (
    <div>
      <h1>{companyTitle}</h1>
      <h1>{companyTitle}</h1>
      <h3>{companySubTitle}</h3>
      <Image
        img = {home_img}
        height = "250px"
        width = "340px" 
      />
      <div className='lower-home'>

        <p style={{margin: '8px 15px', marginTop: '50px'}}>Login with your phone number</p>
        <div className='input-field-container'>
          <TextField
            id="outlined-select-currency"
            select
            label=""
            value={country}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>  
          <TextField id="outlined-basic" label="" variant="outlined" 
            sx={{
              margin: '0 13px',
              width: '70%'
            }}
          />
        </div> 
        <div className='otp-btn-container'>
          <Button txt="Send OTP" theme='dark' />
        </div>
        <p 
          style={{fontSize: '1.2rem', textAlign: 'center'}}
        >
          Or login with your 
        </p>
        <div className='icon-container'>
          <AppleIcon sx = {{margin: '0 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}} />
          <FacebookIcon sx = {{margin: '0 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}} />
          <GoogleIcon sx = {{margin: '0 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}} />
          <TwitterIcon sx = {{margin: '0 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}} />
        </div>
      </div>
    </div>
  );
}

export default Home;