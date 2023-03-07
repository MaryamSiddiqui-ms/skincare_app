import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home,AccessibilitySettings,SkinTone,SkinConditions,AutoFilter} from './pages';
// import ManualSkinTone from './pages/FilterSettings/ManualSkinTone';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element ={<Home/>} />
    //     <Route path="/accessibility" element={<AccessibilitySettings/>} />
    //   </Routes>
    // </BrowserRouter>
    // <Home/>
    <AccessibilitySettings/>
    // <SkinTone
    // options={[    { label: 'White', value: 'white' },    { label: 'Asian', value: 'asian' },    { label: 'African American', value: 'african-american' },    { label: 'American Indian or Alaska Native', value: 'native-american' },    { label: 'Native Hawaiian or Other Pacific Islander', value: 'pacific-islander' },  ]}
    // />
    // <SkinConditions/>
    // <AutoFilter/>
  );
}

export default App;
