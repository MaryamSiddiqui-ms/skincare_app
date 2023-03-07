import React, { useState } from "react";
import { Button,FilterModal} from "../../components";
import Grid from "@mui/material/Grid";
import _1 from '../../assets/1.jpg'


function AutoFilter() {
  // Mock service to return sample values for skinTone and skinCondition
  const getFilterParams = () => {
    return {
      skinTone: "medium",
      skinCondition: "acne",
    };
  };

  const [filterParams, setFilterParams] = useState(null);

  const handlePickImage = () => {
    // TODO: Implement image picking/capturing logic
    setFilterParams(getFilterParams());
  };

  const handleUploadImage = (event) => {
    // TODO: Implement image upload logic
    setFilterParams(getFilterParams());
  };

  const prePopulatedImages = [
    {
      src: _1,
      skinCondition: "normal",
    },
    {
      src: "https://i.imgur.com/WzAHU6k.jpg",
      skinCondition: "dry",
    },
    {
      src: "https://i.imgur.com/tckgJfN.jpg",
      skinCondition: "oily",
    },
    {
      src: "https://i.imgur.com/xuvl2U2.jpg",
      skinCondition: "acne",
    },
  ];

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <h1>Automatic Filter Settings</h1>
      <FilterModal/>
      <p>
        <b>Pick an image to generate product filter parameters:</b>
      </p>
      <Grid container spacing={2}>
        <Grid item>
          <Button txt="Pick Image" theme="dark" variant="contained" onClick={handlePickImage} />
        </Grid>
        <Grid item>
          <label htmlFor="image-upload">
            <input type="file" id="image-upload" accept="image/*" style={{ display: "none" }} onChange={handleUploadImage} />
            <Button txt="Upload Image" theme="dark" variant="contained" component="span" />
          </label>
        </Grid>
      </Grid>
      <div style={{ marginTop: "2rem" }}>
        <p>Or select an image for a specific skin condition:</p>
        <Grid container spacing={2}>
          {prePopulatedImages.map((image) => (
            <Grid item key={image.src}>
              <img src={image.src} alt={image.skinCondition} height="150" />
              <p>{image.skinCondition}</p>
            </Grid>
          ))}
        </Grid>
      </div>
      {filterParams && (
        <div style={{ marginTop: "2rem" }}>
          <p>Generated filter parameters:</p>
          <p>Skin Tone: {filterParams.skinTone}</p>
          <p>Skin Condition: {filterParams.skinCondition}</p>
        </div>
      )}
    </div>
  );
}

export default AutoFilter;
