import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Button} from './../../components';
import './AccessibilitySettings.css'
import Grid from '@mui/material/Grid';
import TextSizeSelection from './TextSizeSelection'

function AccessibilitySettings() {

  const [textBgSm, setTextBgSm] = useState("none");
  const [textBgMd, setTextBgMd] = useState("none");
  const [textBgLg, setTextBgLg] = useState("none");

 

  return (
    <div style = {{position:'relative' , height:'100vh'}}>
      <h1>Accessibility Settings</h1>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked size="small" color="default"/>} label="Text To Speech" />
        <FormControlLabel control={<Switch defaultChecked size="small" color="default"/>} label="Zoom" />
        <FormControlLabel control={<Switch defaultChecked size="small" color="default"/>} label="Auto-Focus" />
        <FormControlLabel control={<Switch defaultChecked size="small" color="default"/>} label="Bold Text" />
      </FormGroup>



      <div className='text-size-container'>
          <p style={{color: 'black'}}>Select Text Size</p>
          <div className="font-containers">
            <div onClick={() => {setTextBgSm("#eef5ff")}} style={{backgroundColor: textBgSm}} className='small'>A</div>
            <div onClick={() => setTextBgMd("#eef5ff")} style={{backgroundColor: textBgMd}} className='medium'>A</div>
            <div onClick={() => setTextBgLg("#eef5ff")} style={{backgroundColor: textBgLg}} className='large'>A</div>
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
