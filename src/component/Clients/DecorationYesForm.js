import React from "react";
import {
  Grid,
} from "@mui/material";
import { TextField } from "@mui/material";
// import {makeStyles} from "@mui/styles"

// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadImage from "./UploadImage";



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   margint: {
//     marginTop: 15,
//   },
//   margint5: {
//     marginTop: 5,
//   },
//   margint30: {
//     marginTop: 30,
//   },
//   tabs: {
//     flexGrow: 1,
//     width: "100%",
//     // backgroundColor: theme.palette.background.paper,
//   },
//   formControl: {
//     width: "100%",
//   },
//   input: {
//     display: "none",
//   },
// }));

const DecorationYesForm = () => {
    const decorationImgChangeHandler = (e) => {
      console.log(e.target.files.length)
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log("filesArray: ", filesArray);
      // setDecorationData((prevStates) => ({
      //   ...prevStates,
      //   decorationImageFiles: {
      //     ...prevStates.decorationImageFiles,
      //     value: prevStates.decorationImageFiles.value.concat(filesArray),
      //   },
      // }));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const decorationImgDeleteHandler = (index) => {
    // let newList = selectedFiles.splice(index,1);
    // this.setState({list:newList})
    console.log("delete " + index);
    // decorationData.decorationImageFiles.value.splice(index, 1);
    // setDecorationData((prevStates) => ({
    //   ...prevStates,
    //   decorationImageFiles: {
    //     ...prevStates.decorationImageFiles,
    //     value: prevStates.decorationImageFiles.value.filter((i) => i !== index),
    //   },
    // }));
  };
  // const classes = useStyles();

  // const [value, setValue] = React.useState("");

  // const handleChangeAnyOther = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <>
      <Grid item md={12} xs={12}>
        <TextField
          fullWidth
          id="filled-multiline-flexible"
          label="What is your theme?"
          multiline
          maxRows={4}
          name="yourTheme"
          //   value={decorationData.yourTheme.value}
          placeholder="Brief explanation about your theme"
          //   onChange={onChangeDecorationDataHandler}
          variant="filled"
        />
      </Grid>

      <Grid item md={6} xs={12} align="left">
        <UploadImage
          labelTitle="Upload your reference images for the event planner to have a better idea."
          //   onSelectedFiles={decorationSelectedFiles}
          onImageChangeHandler={decorationImgChangeHandler}
          onImageDeleteHandler={decorationImgDeleteHandler}
        />
      </Grid>

      <Grid item md={6} xs={12}>
        <TextField
          required
          fullWidth
          label="What color scheme do you have in mind?"
          placeholder="Color Name"
          variant="filled"
          name="colorScheme"
          //   value={decorationData.colorScheme.value}
          //   onChange={onChangeDecorationDataHandler}
        />
      </Grid>
    </>
  );
};

export default DecorationYesForm;
