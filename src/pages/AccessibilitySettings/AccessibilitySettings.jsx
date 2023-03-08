import React, { useState, useEffect } from "react";
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import {Button} from './../../components';
import Stack from '@mui/material/Stack';
import './AccessibilitySettings.css'
import "@fontsource/montserrat";
import { useNavigate } from 'react-router-dom';

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

function AccessibilitySettings() {

  const navigate = useNavigate();
  const [textBgSm, setTextBgSm] = useState("none");
  const [textBgMd, setTextBgMd] = useState("none");
  const [textBgLg, setTextBgLg] = useState("none");

  const accessSettings = [
    'Text To Speech',
    'Zoom',
    'Auto-Focus',
    'Bold Text'
  ]

  useEffect(() => {
    setTextBgLg("none");
    setTextBgMd("none");
    setTextBgSm("none");
  }, [textBgLg, textBgMd, textBgSm]);

  return (
    <div className="access-settings-screen" style = {{position:'relative' , height:'100vh'}}>
      <h1 className='Accessibility_heading' style={{fontFamily:'montserrat'}} ><b>Accessibility Settings</b></h1>
      <div style={{marginLeft:10}}>
      <FormGroup>
        {
          accessSettings.map((setting) => (
          <div style={{
            borderBottom: '1px solid rgb(224, 224, 224)',
          }}>
            <Stack direction="row" spacing={0} alignItems="center">
              <div style ={{
                  color: '#2B2929',
                  padding: '20px 10px',
              }}>
                <AntSwitch 
                  defaultChecked= {setting.defaultChecked} 
                  inputProps={{ 'aria-label': 'ant design' }} 
                  color={setting.defaultChecked ? "primary" : "default"}
                />
              </div>
              <p style={{
                color: '#2b2929',
              }}>
                {setting}
              </p>
            </Stack>

          </div>
        ))}
      </FormGroup>
      </div>



      <div className='text-size-container'>
        <p style={{color: '#2B2929'}}>Select Text Size</p>
        <div className="font-containers">
          <div
            onClick={() => {
              setTextBgLg("none");
              setTextBgMd("none");
              setTextBgSm("#eef5ff");
            }}
            style={{backgroundColor: textBgSm}}
            className='small'
          >
            A
          </div>
          <div
            onClick={() => {
              setTextBgSm("none");
              setTextBgLg("none");
              setTextBgMd("#eef5ff");
            }}
            style={{backgroundColor: textBgMd}}
            className='medium'
          >
            A
          </div>
          <div
            onClick={() => {
              setTextBgSm("none");
              setTextBgMd("none");
              setTextBgLg("#eef5ff");
            }}
            style={{backgroundColor: textBgLg}}
            className='large'
          >
            A
          </div>
        </div>
      </div>

      <div className='setting_BTN' onClick={() =>navigate('/auto-filter')}>
        <Button width="44.5%" txt="Skip" theme='light' variant="contained"/>
        <Button width="44.5%" txt="Apply" theme='dark' variant="contained"/>
      </div>
    </div>
  );
}

export default AccessibilitySettings;
