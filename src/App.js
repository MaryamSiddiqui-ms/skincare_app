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

import {
  companySubtitle,
  companyTitle,
  skinToneList,
  skinType,
  diseases
} from './config';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home title={companyTitle} subtitle={companySubtitle} />} />
        <Route path="/accessibility" element={<AccessibilitySettings />} />
        <Route path="/auto-filter" element={<AutoFilter />} />
        <Route path="/skin-tone" element={<SkinTone options={skinToneList} />} />
        <Route path='/skin-condition' element={<SkinConditions options={diseases} />} />
        <Route path="/product-listing" element={<ProductListing options={skinType} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
