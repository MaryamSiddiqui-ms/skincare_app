import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {Button} from './../../components';
import Grid from '@mui/material/Grid';
import './FilterSettings.css'

function ManualSkinTone({ options }) {
    const [value, setValue] = React.useState('African American');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <h1>Select Your Skin Type</h1>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <div className='setting_BTN'>
        <Grid container justifyContent="space-between" >
          <Grid item>
            <Button txt="Skip" theme='light' variant="contained"/>
          </Grid>
          <Grid item>
            <Button txt="Apply" theme='dark' variant='contained'/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ManualSkinTone;
