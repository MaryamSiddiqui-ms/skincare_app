import React, { useState, useEffect } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Button} from './../../components';
import './AccessibilitySettings.css'
import "@fontsource/montserrat";
import { useNavigate } from 'react-router-dom';

function AccessibilitySettings() {

  const navigate = useNavigate();
  const [textBgSm, setTextBgSm] = useState("none");
  const [textBgMd, setTextBgMd] = useState("none");
  const [textBgLg, setTextBgLg] = useState("none");

  useEffect(() => {
    setTextBgLg("none");
    setTextBgMd("none");
    setTextBgSm("none");
  }, [textBgLg, textBgMd, textBgSm]);

  return (
    <div className="access-settings-screen" style = {{position:'relative' , height:'100vh'}}>
      <h1 className='Accessibility_heading' style={{fontFamily:'montserrat'}} ><b>Accessibility Settings</b></h1>
      <div style={{marginLeft:30}}>
      <div className="Accessibility_body">
        <FormControlLabel control={<Switch defaultChecked size="small" color="default" disabled/>} label="Text To Speech" />
      </div>
      <div className="Accessibility_body">
        <FormControlLabel control={<Switch defaultChecked size="small" color="default" disabled/>} label="Zoom" />
      </div>
      <div className="Accessibility_body">
        <FormControlLabel control={<Switch defaultChecked size="small" color="default" disabled/>} label="Auto-Focus" />
      </div>
      <div className="Accessibility_body">
        <FormControlLabel control={<Switch defaultChecked size="small" color="default" disabled/>} label="Bold Text" />
      </div>
      </div>



      <div className='text-size-container'>
        <p style={{color: '#2B2929'}}>Select Text Size</p>
        <div className="font-containers">
          <div
            onClick={() => {
              setTextBgLg("none");
              setTextBgMd("none");
              setTextBgSm("#eef5ff");
            }}
            style={{backgroundColor: textBgSm}}
            className='small'
          >
            A
          </div>
          <div
            onClick={() => {
              setTextBgSm("none");
              setTextBgLg("none");
              setTextBgMd("#eef5ff");
            }}
            style={{backgroundColor: textBgMd}}
            className='medium'
          >
            A
          </div>
          <div
            onClick={() => {
              setTextBgSm("none");
              setTextBgMd("none");
              setTextBgLg("#eef5ff");
            }}
            style={{backgroundColor: textBgLg}}
            className='large'
          >
            A
          </div>
        </div>
      </div>

      <div className='setting_BTN' onClick={() =>navigate('/auto-filter')}>
        <Button width="44.5%" txt="Skip" theme='light' variant="contained"/>
        <Button width="44.5%" txt="Apply" theme='dark' variant="contained"/>
      </div>
    </div>
  );
}

export default AccessibilitySettings;
