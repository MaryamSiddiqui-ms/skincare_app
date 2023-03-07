import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  AccessibilitySettings,
  SkinTone,
  SkinConditions,
  AutoFilter,
  ProductListing
} from './pages';
// import ManualSkinTone from './pages/FilterSettings/ManualSkinTone';

function App() {
  
  var skinToneList = [    { label: 'White', value: 'white' },    { label: 'Asian', value: 'asian' },    { label: 'African American', value: 'african-american' },    { label: 'American Indian or Alaska Native', value: 'native-american' },    { label: 'Native Hawaiian or Other Pacific Islander', value: 'pacific-islander' },  ]
  var skinType = ['White', 'Asian', 'African American', 'American Indian OR Alaska Native', 'Native Hawaiian OR Other Pacific Islander']

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/accessibility" element={<AccessibilitySettings />} />
        <Route path="/auto-filter" element={<AutoFilter />} />
        <Route path="/skin-tone" element={<SkinTone options={skinToneList} />} />
        <Route path='/skin-condition' element={<SkinConditions />} />
        <Route path="/product-listing" element={<ProductListing options={skinType} />} />
      </Routes>
    </BrowserRouter>
    // <Home/>
    // <AccessibilitySettings />
    // <SkinTone
    // options={[    { label: 'White', value: 'white' },    { label: 'Asian', value: 'asian' },    { label: 'African American', value: 'african-american' },    { label: 'American Indian or Alaska Native', value: 'native-american' },    { label: 'Native Hawaiian or Other Pacific Islander', value: 'pacific-islander' },  ]}
    // />
    // <SkinConditions/>
    // <ProductListing 
    //   options={skinType}
    // />
  );
}

export default App;
