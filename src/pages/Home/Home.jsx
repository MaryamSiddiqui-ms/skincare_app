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
import "@fontsource/montserrat";
import { useNavigate } from 'react-router-dom'
import { fontFamily } from '@mui/system';

const countries = [
  {
    value: 'USD',
    label: '+1',
  },
];


function Home(props) {
  const navigate = useNavigate()
  const [country, setCountry] = useState('USD');

  return (
    <div className='home-screen'>
      <div className="company-title-wrapper">
        <div className='company-title'>
          <p style={{
            margin: 0, padding: 0, 
            
            fontWeight: 'bold', 
            color: '#003471',
          }} className='compnay-title-heading'>{props.title}</p>
          <p style={
            {margin: 0, padding: 0, 
            
            fontWeight: 'bold', 
            color: '#003471'
          }} className='compnay-title-heading'>{props.title}</p>
          <p style={{
            margin: 0, 
            padding: 0, 
            color: '#003471',
            
            fontSize: '1.3rem'
          }} className='compnay-title-heading'>{props.subtitle}</p>
        </div>
      </div>
      <div className="bottom-section">
        <Image
          img = {home_img}
          height = "240px"
          width = "300px" 
        />
        <div className='lower-home'>
          <p style={{margin: '8px 0px', marginTop: '10px', fontFamily: 'Montserrat'}}>Login with your Phone Number</p>
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
                width: '74%'
              }}
            />
          </div> 
          <div className='otp-btn-container' onClick={() =>navigate('/accessibility')}>
            <Button txt="Send OTP" theme='dark' />
          </div>
          <div className="dashed-line">
            <span
              style={{fontSize: '1.2rem', color: 'gray'}}
            >
              Or login with
            </span>
          </div>
          <div className='icon-container'>
            <AppleIcon sx = {{margin: '20px 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}}
              onClick={() =>navigate('/accessibility')}
            />
            <FacebookIcon sx = {{margin: '20px 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}}
              onClick={() =>navigate('/accessibility')}
            />
            <GoogleIcon sx = {{margin: '20px 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}}
              onClick={() =>navigate('/accessibility')}
            />
            <TwitterIcon sx = {{margin: '20px 10px', border: '1px solid gray', padding: '5px', borderRadius: '5px'}}
              onClick={() =>navigate('/accessibility')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;