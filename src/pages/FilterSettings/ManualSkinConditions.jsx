import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Button} from './../../components';
import './FilterSettings.css'
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

function ManualSkinConditions() {
  const navigate = useNavigate()
  const [diseases, setDiseases] = useState([
    { name: "Pakrinson", defaultChecked: true },
    { name: "A.L.S", defaultChecked: true },
    { name: "Sclerosis", defaultChecked: true },
    { name: "Arthritis", defaultChecked: true },
  ]);

  return (
    <div className="filter-screen" style = {{position:'relative' , height:'100vh'}}>
      <p className="filter-heading">Disease</p>
      <p style={{padding: '10px 20px'}}><b>Do You Have Any Disease?</b></p>

      <FormGroup>
        {diseases.map((disease) => (
          <FormControlLabel
            key={disease.name}
            control={<Switch defaultChecked={disease.defaultChecked} size="small" color="default"/>}
            label={disease.name}
            sx={{
              color: '#606060',
              padding: '20px 20px',
              borderBottom: '1px solid rgb(224, 224, 224)',
            }}
          />
        ))}
      </FormGroup>
      <div className='setting_BTN' onClick={() =>navigate('/product-listing')}>
          <Button width="44.5%" txt="Skip" theme='light' variant="contained"/>
          <Button width="44.5%" txt="Apply" theme='dark' variant="contained"/>
      </div>
    </div>
  );
}

export default ManualSkinConditions;
