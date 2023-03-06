import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function ManualSkinTone() {

  return (
    <div style = {{position:'relative' , height:'100vh'}}>
      <h1>Select Your skin Type</h1>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
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
