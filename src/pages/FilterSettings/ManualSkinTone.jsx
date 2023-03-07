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
    <div className="skin-tone-screen" style={{ position: 'relative', height: '100vh' }}>
      <h1 className="skin-tone-heading">Select Your Skin Type</h1>
      <FormControl sx={{ padding: '5px 12px'}}>

        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          color="default"
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
      <div className='setting_BTN' >
        <Button width="44.5%" txt="Skip" theme='light' variant="contained"/>
        <Button width="44.5%" txt="Apply" theme='dark' variant='contained'/>
      </div>
    </div>
  );
}

export default ManualSkinTone;
