import React, { useState } from "react";
import { Button } from "../../components";
import Grid from "@mui/material/Grid";
import _1 from '../../assets/1.jpg'
import _2 from '../../assets/9.jpg'
import _3 from '../../assets/10.jpg'
import _4 from '../../assets/1.jpg'
import { useNavigate } from 'react-router-dom';


function AutoFilter() {
  const navigate = useNavigate();
  // Mock service to return sample values for skinTone and skinCondition
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  const [isFileChosen, setIsFileChosen] = useState(false);
  const [imgFilter, setImgFilter] = useState(null)
  const [isImgChosen, setIsImageChosen] = useState(false)

  const handleUploadImage = (event) => {
    // TODO: Implement image upload logic
    // setFilterParams(getFilterParams());
    setImgFilter(event)
    setIsFileChosen(true)
  };
  
  var type, condition
  function getSkinFilters(img){
    //TODO:Alogorithm interprets and return
    type = 'African American'
    condition = 'Eczema'
  }

  const prePopulatedImages = [
    {
      src: _1
    },
    {
      src: _2
    },
    {
      src: _3
    },
    {
      src: _4
    },
  ];

  

  return (
    <div className="filter-screen" style={{ position: "relative", height: "100vh" }}>
       <p className="filter-heading">Auto Filter Settings</p>
      <p>
        <b>Take a photo of your skin to determine skin condition and type</b>
      </p>
      <div>
        <label htmlFor="image-upload">
          <input type="file" id="image-upload" accept="image/*" style={{ display: "block" }} onChange={handleUploadImage} />
        </label>
      </div>
      <div style={{
        display: isFileChosen ? "block" : "none",
        padding: '20px 10px',
        lineHeight: '1.6rem',
        marginTop: '20px',
        boxShadow: '1px 2px 7px -2px rgb(0 0 0 / 79%)'
      
      }}>
        {getSkinFilters(imgFilter)}
        <b>SKIN TYPE</b> : {type}<br />
        <b>SKIN CONDITION:</b> {condition}
      <div id='auto-filter-apply' className="manual-btn-container">
        <div className="setting_BTN" style={{ marginTop: "2rem" }} onClick={() =>navigate('/product-listing')}>
          <Button  width="87.5%" txt="Apply" theme="dark" variant="contained"/>
        </div>
      </div>
      </div>
      
      <div style={{ marginTop: "2rem" }}>
        <p><b>Or use one of popular images</b></p>
        <Grid padding={4} container spacing={2}>
          {prePopulatedImages.map((image) => (
            <Grid onClick={() => setIsImageChosen(true)} xs={6} item key={image.src} spacing={2}  >
              <img width="90%" src={image.src} alt="Pre populated image" height="150" />
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{
        display: isImgChosen ? "block" : "none",
        padding: '20px 10px',
        lineHeight: '1.6rem',
        marginTop: '20px',
        boxShadow: '1px 2px 7px -2px rgb(0 0 0 / 79%)'
      
      }}>
        {getSkinFilters(imgFilter)}
        <b>SKIN TYPE</b> : {type}<br />
        <b>SKIN CONDITION:</b> {condition}
      <div id='auto-filter-apply' className="manual-btn-container">
        <div className="setting_BTN" style={{ marginTop: "2rem" }} onClick={() =>navigate('/product-listing')}>
          <Button  width="87.5%" txt="Apply" theme="dark" variant="contained"/>
        </div>
      </div>
      </div>
      <div className="manual-btn-container">
        <div className="setting_BTN" style={{ marginTop: "2rem" }} onClick={() =>navigate('/skin-tone')}>
          <Button  width="87.5%" txt="Manually set skin condition and type" theme="dark" variant="contained"/>
        </div>
      </div>
    </div>
  );
}

export default AutoFilter;