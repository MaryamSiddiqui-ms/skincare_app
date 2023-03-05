import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home,AccessibilitySettings,FilterSettings} from './pages';
import ManualSkinTone from './pages/FilterSettings/ManualSkinTone';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element ={<Home/>} />
    //     <Route path="/accessibility" element={<AccessibilitySettings/>} />
    //   </Routes>
    // </BrowserRouter>
    // <Home/>
    // <AccessibilitySettings/>
    <AccessibilitySettings/>
  );
}

export default App;
