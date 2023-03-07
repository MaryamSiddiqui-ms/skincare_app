import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {Button} from './../../components';
import Grid from '@mui/material/Grid';
import './FilterSettings.css'
import { useNavigate } from 'react-router-dom'

function ManualSkinTone({ options }) {

  const navigate = useNavigate()

  const [value, setValue] = React.useState('African American');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="filter-screen" style={{ position: 'relative', height: '100vh' }}>
      <p className="filter-heading">Select Your Skin Type</p>
      <FormControl sx={{ padding: '5px 25px'}}>

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
              sx={{
                color: 'gray',
                paddingTop: '10px',
                borderBottom: '1px solid rgb(224, 224, 224)'
              }}
              checked={option.label === "African American" ? true : false}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <div className='setting_BTN' onClick={() =>navigate('/skin-condition')}>
        <Button width="44.5%" txt="Skip" theme='light' variant="contained"/>
        <Button width="44.5%" txt="Apply" theme='dark' variant='contained'/>
      </div>
    </div>
  );
}

export default ManualSkinTone;
