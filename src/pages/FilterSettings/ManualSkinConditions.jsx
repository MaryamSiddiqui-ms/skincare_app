import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Button} from './../../components';
import './FilterSettings.css'
import Grid from '@mui/material/Grid';

function ManualSkinConditions() {
  const [diseases, setDiseases] = useState([
    { name: "Pakrinson", defaultChecked: true },
    { name: "A.L.S", defaultChecked: true },
    { name: "Sclerosis", defaultChecked: true },
    { name: "Arthritis", defaultChecked: true },
  ]);

  return (
    <div style = {{position:'relative' , height:'100vh'}}>
      <h1>Disease</h1>
      <p><b>Do You Have Any Disease?</b></p>

    <FormGroup>
      {diseases.map((disease) => (
        <FormControlLabel
          key={disease.name}
          control={<Switch defaultChecked={disease.defaultChecked} size="small" color="default"/>}
          label={disease.name}
        />
      ))}
    </FormGroup>
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

export default ManualSkinConditions;
