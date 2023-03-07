import React, { useState } from "react";
import { Button } from "../../components";
import Grid from "@mui/material/Grid";
import _1 from '../../assets/1.jpg'
import MButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AutoFilter() {
  const navigate = useNavigate();
  // Mock service to return sample values for skinTone and skinCondition
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

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
      <p>
        <b>Pick an image to generate product filter parameters:</b>
      </p>
      <Grid container spacing={2}>
        <Grid item>
        <Button onClick={handleOpen} txt="Pick Image" theme="dark" variant="contained" component="span" />
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
       <div>
       <MButton onClick={handleOpen}>Open modal</MButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
      <div style={{ marginTop: "2rem" }} onClick={() =>navigate('/skin-tone')}>
        <Button txt="Set Manual Filter" theme="dark" variant="contained" onClick={() => console.log("Go to screen 4")} />
      </div>
    </div>
  );
}

export default AutoFilter;
