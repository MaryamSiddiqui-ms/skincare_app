import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Button} from './../../components';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './FilterSettings.css'
import { useNavigate } from "react-router-dom";


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
      border: '1px solid black',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
      border: '1px solid black',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'default' ? 'black' : 'black',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'gray' : 'gray',
    boxSizing: 'border-box',
  },
}));


function ManualSkinConditions(props) {
  const navigate = useNavigate()
  const [diseases, setDiseases] = useState(props.options);

  return (
    <div className="filter-screen" style = {{position:'relative' , height:'100vh'}}>
      <p className="filter-heading">Disease</p>
      <p style={{padding: '10px 20px'}}><b>Do You Have Any Disease?</b></p>

      <FormGroup>
        {
          diseases.map((disease) => (
          <div style={{
            borderBottom: '1px solid rgb(224, 224, 224)',
          }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <div style ={{
                  color: '#2B2929',
                  padding: '10px 20px',
                  borderBottom: '1px solid rgb(224, 224, 224)',
              }}>
                <AntSwitch 
                  defaultChecked= {disease.defaultChecked} 
                  inputProps={{ 'aria-label': 'ant design' }} 
                  color={disease.defaultChecked ? "primary" : "default"}
                />
              </div>
              <p style={{
                paddingLeft: '-10px',
                color: '#2b2929'
              }}>
                {disease.name}
              </p>
            </Stack>
          </div>
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
