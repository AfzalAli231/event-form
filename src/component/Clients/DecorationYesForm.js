import React from "react";
import {
  Grid,
  FormHelperText
} from "@mui/material";
import { TextField } from "@mui/material";
// import {makeStyles} from "@mui/styles"

// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadImage from "./DecoUploadImage";



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

const DecorationYesForm = ({
  handleChangee,
  colorErr,
  themeErr,
  decorationImageFiles,
  setDecorationData,
  decorationData,
}) => {
  const decorationImgChangeHandler = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log("filesArray: ", filesArray);
      setDecorationData((prevStates) => ({
        ...prevStates,
        decorationImageFiles:
          prevStates.decorationImageFiles.concat(filesArray),
      }));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const decorationImgDeleteHandler = (index) => {
    decorationData.decorationImageFiles.splice(index);
    setDecorationData((prevStates) => ({
      ...prevStates,
      decorationImageFiles: prevStates.decorationImageFiles.filter((i) => i !== index),
    }));
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
          id="yourTheme"
          label="What is your theme?"
          multiline
          maxRows={4}
          name="yourTheme"
          placeholder="Brief explanation about your theme"
          variant="filled"
          onChange={handleChangee("yourTheme")}
        />
        <FormHelperText error>{themeErr}</FormHelperText>
      </Grid>

      <Grid item md={6} xs={12} align="left">
        <UploadImage
          labelTitle="Upload your reference images for the event planner to have a better idea."
          onSelectedFiles={decorationImageFiles}
          onImageChangeHandler={decorationImgChangeHandler}
          onImageDeleteHandler={decorationImgDeleteHandler}
        />
      </Grid>

      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          label="What color scheme do you have in mind?"
          placeholder="Color Name"
          variant="filled"
          name="colorScheme"
          id="colorScheme"
          onChange={handleChangee("colorScheme")}
        />
        <FormHelperText error>{colorErr}</FormHelperText>
      </Grid>
    </>
  );
};

export default DecorationYesForm;
