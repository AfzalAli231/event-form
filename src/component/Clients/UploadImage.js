import { FormControl, FormLabel, Grid } from "@mui/material";
import React from "react";
// import classes from "./uploadImage.module.css";
// import "./styles.css";

const UploadImage = () => {
  // const renderPhotos = (source) => {
  //   return source.map((photo, index) => {
  //     console.log("source: ", source);
  //     console.log("index: ", index);
  //     return (
  //       <div className={classes.uploadImage}>
  //         <img src={photo} alt='' key={photo} />
  //         {/* <span onClick={() => onImageDeleteHandler(index)}>x</span> */}
  //       </div>
  //     );
  //   });
  // };

  return (
    <>
      <Grid item md={12} xs={12} align='left'>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Upload your reference images for the event planner to have a better idea.</FormLabel>
          <input
            id='contained-button-file'
            style={{
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
            type='file'
            accept='image/*'
            multiple
            // value={onSelectedFiles.va}
            // onChange={onImageChangeHandler}
          />
          <p />
          <hr />
          {/* <div>{renderPhotos(onSelectedFiles)}</div> */}
        </FormControl>
      </Grid>

      {/* <h2>React Multiple Images Upload & Preview</h2>
      <div>
        <input type='file' multiple onChange={handleImageChange} />
        <p />
        <hr />
        {renderPhotos(selectedFiles)}
      </div> */}
    </>
  );
};

export default UploadImage;
