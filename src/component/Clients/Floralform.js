import React, {useState} from "react"
import { useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import {Box, FormHelperText, Grid,} from "@mui/material"
import * as yup from "yup";
import {
  Button,
  FormGroup,
  TextField,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import {addonsfloralservices} from "../../app/rootSlice"
import { useGetextraQuery } from "../../services/extra";
import UploadImage from "./FloralUploadImage";

const validationSchema = yup.object({
  kindsofflower: yup
    .string("Enter your Kinds of Flower")
    .required("Kinds of Flower is required"),
  pricerange: yup
    .string("Enter your Price Range")
    .required("Price Range is required"),
  colortheme: yup
    .string("Enter your Color Theme")
    .required("Color Theme is required"),
  explanation: yup
    .string("Enter your Explaination")
    .required("Explaination is required"),
});



const Floralform = () => {


  const formik = useFormik({
    initialValues: {
      colortheme: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  const INITIAL_STATE = useGetextraQuery();
  const dispatch = useDispatch();
  
  const [values, setValues] = useState({
    floralservices: "",
    kindsofflower: "",
    pricerange: "",
    colortheme: "",
    explanation: "",
    floralImageFiles: [],
  });
  const [err, setErr] = useState()
  
  const handleChange = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });
  };
  const floraldata = (event) => {
    if (event.target.checked === true) {
      setValues({
        ...values,
        floralservices: values.floralservices.concat(event.target.id),
      });
    }
  };

  const state = useSelector((state) => JSON.stringify(state.user));
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit();

        if (
          values.floralservices.length > 0 &&
          Object.keys(formik.errors).length === 0 &&
          formik.dirty === true
        ) {
          console.log(values);
          dispatch(addonsfloralservices(values));
          if (Object.keys(formik.errors).length > 0 && formik.dirty === false) {
            setValues();
            dispatch(addonsfloralservices(values));
          }
        } else {
          setErr("Floral Services Required");
          setTimeout(() => {
            setErr();
          }, 3000);
        }
  };

  const decorationImgChangeHandler = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log("filesArray: ", filesArray);
      // if(values.floralImageFiles.lenght < 5) {
        setValues((prevStates) => ({
          ...prevStates,
          floralImageFiles: prevStates.floralImageFiles.concat(filesArray),
        }));
      // }else {
        // setValues((prevStates) => ({
        //   ...prevStates,
        //   floralImageFiles: [],
        // }));
      // }
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const decorationImgDeleteHandler = (index) => {
    values.floralImageFiles.splice(index);
    setValues((prevStates) => ({
      ...prevStates,
      floralImageFiles: prevStates.floralImageFiles.filter(
        (i) => i !== index
      ),
    }));
  };

  return (
    <div>
      {INITIAL_STATE.isFetching ? (
        "...Loading"
      ) : (
        <>
          <Box component="form" onSubmit={handleSubmit}>
            <div style={{ textAlign: "left" }}>
              <div>
                <p>Select The Floral Service</p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                {INITIAL_STATE.data
                  .filter((arr) => arr.extratype.includes("Floral Services"))
                  .map((value, id) => {
                    return (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "stretch",
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <Checkbox
                              id={value.id}
                              style={{ marginLeft: "0.4rem" }}
                              value={value.extradata}
                              name="floralservices"
                              onChange={(event) => {
                                handleChange("floralservices");
                                floraldata(event);
                              }}
                            />
                          </div>
                          <div style={{ fontSize: "0.8rem" }}>
                            {value.extradata}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <FormHelperText error>{err}</FormHelperText>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "30%" }}>
                  <FormControl
                    variant="standard"
                    style={{ width: "100%" }}
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Kinds Of Flower
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="kindsofflower"
                      name="kindsofflower"
                      onChange={handleChange("kindsofflower")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {INITIAL_STATE.data
                        .filter((arr) =>
                          arr.extratype.includes("Floral Kind of Flowers")
                        )
                        .map((values, id) => {
                          return (
                            <MenuItem value={values.extradata}>
                              {values.extradata}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    <FormHelperText error>
                      {formik.errors.kindsofflower}
                    </FormHelperText>
                  </FormControl>
                </div>

                <div style={{ width: "30%" }}>
                  <FormControl
                    variant="standard"
                    style={{ width: "100%" }}
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Price Range
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="pricerange"
                      name="pricerange"
                      onChange={handleChange("pricerange")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {INITIAL_STATE.data
                        .filter((arr) =>
                          arr.extratype.includes("Floral Price Range")
                        )
                        .map((values, id) => {
                          return (
                            <MenuItem value={values.extradata}>
                              {values.extradata}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    <FormHelperText error>
                      {formik.errors.pricerange}
                    </FormHelperText>
                  </FormControl>
                </div>
                <div style={{ width: "30%" }}>
                  <FormGroup>
                    <TextField
                      onChange={handleChange("colortheme")}
                      value={values.colortheme}
                      name="colortheme"
                      error={
                        formik.touched.colortheme &&
                        Boolean(formik.errors.colortheme)
                      }
                      helperText={
                        formik.touched.colortheme && formik.errors.colortheme
                      }
                      id="colortheme"
                      label="Specify Your Color Theme *"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </FormGroup>
                </div>
              </div>

              <div
                style={{ justifyContent: "space-between", marginTop: "40px" }}
              >
                <div style={{ width: "100%" }}>
                  <TextField
                    onChange={handleChange("explanation")}
                    id="explanation"
                    name="explanation"
                    label="Explain how  you want your theme  to be implemented"
                    type="text"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                  <FormHelperText error>
                    {formik.errors.explanation}
                  </FormHelperText>
                </div>
              </div>

              <Grid item md={6} xs={12} align="left">
                <UploadImage
                style={{marginTop:"40px"}}
                  labelTitle="Upload your reference images."
                  onSelectedFiles={values.floralImageFiles}
                  onImageChangeHandler={decorationImgChangeHandler}
                  onImageDeleteHandler={decorationImgDeleteHandler}
                />
              </Grid>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "rgb(0, 255, 136)",
                    color: "black",
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </Box>
        </>
      )}
    </div>
  );
};

export default Floralform;

