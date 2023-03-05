import React, { useState } from 'react';
import home_img from '../../assets/home_img.jpg'
import {Button} from './../../components';

function Home() {
  const [companyTitle, setCompanyTitle] = useState('TEST'); // Set default company title
  const [companySubTitle, setCompanySubTitle] = useState('Companies'); // Set default company title

  function handleSendOTP() {
    // Code to load the next screen goes here
  }

  function handleLoginSocial() {
    // Code to load the next screen goes here
  }

  return (
    <div>
      <h1>{companyTitle}</h1>
      <h1>{companyTitle}</h1>
      <h3>{companySubTitle}</h3>
      <img src={home_img} />
      <p>Login with social account</p> 
      
      
      <Button txt="Send OTP" theme='dark' />
    </div>
  );
}

export default Home;