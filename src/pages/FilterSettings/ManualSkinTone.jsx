import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {Button} from './../../components';
import Grid from '@mui/material/Grid';
import './FilterSettings.css'
function ManualSkinTone() {

  return (
    <div style = {{position:'relative' , height:'100vh'}}>
      <h1>Select Your skin Type</h1>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="African American"
            name="radio-buttons-group"
        >
            <FormControlLabel value="White" control={<Radio />} label="White" />
            <FormControlLabel value="Asian" control={<Radio />} label="Asian" />
            <FormControlLabel value="African American" control={<Radio />} label="African American" />
            <FormControlLabel value="American Indian Or Alaska Native" control={<Radio />} label="American Indian Or Alaska Native" />
            <FormControlLabel value="Native Hawaiian Or Other Pacific Islander" control={<Radio />} label="Native Hawaiian Or Other Pacific Islander" />

        </RadioGroup>

    </FormControl>
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

export default ManualSkinTone;
