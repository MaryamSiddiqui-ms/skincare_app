import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Button} from './../../components';
import './AccessibilitySettings.css'
import Grid from '@mui/material/Grid';
import TextSizeSelection from './TextSizeSelection'
import "@fontsource/montserrat";
import { fontFamily } from "@mui/system";

function AccessibilitySettings() {

  return (
    <div style = {{position:'relative' , height:'100vh'}}>
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
            <div className='small'>A</div>
            <div className='medium'>A</div>
            <div className='large'>A</div>
          </div>
      </div>

      <div className='setting_BTN'>
        <Grid container justifyContent="space-between" >
          <Grid item>
            <Button txt="Skip" theme='light' variant="contained"/>
          </Grid>
          <Grid item>
            <Button txt="Apply" theme='dark' variant="contained"/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AccessibilitySettings;
