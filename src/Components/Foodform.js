import React, { useState } from "react";
// import {} from "@mui/material"
import * as yup from "yup";
import { Button, FormGroup, TextField } from "@mui/material";
// import TextField from "./Field";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useFormik } from "formik";
// import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import Switch from "@mui/material/Switch";
// import VenueForm from "./Tabs";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import HomeOutlined from "@mui/icons-material/HomeOutlined";
// import HomeIcon from "./Homeicon";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import FormHelperText from '@mui/material/FormHelperText';
import Select from "@mui/material/Select";
// import FormControlLabel from '@mui/material/FormControlLabel';
import INITIAL_STATE from "../state";
// import Dashboard from "./Dashboard";
// import Flrolform from "./Floralform"
// import Addons from "./Addons"
import { useDispatch, useSelector } from "react-redux";
// import TextFeild from "./TextFeild"
import { eventVenue } from "../rootSlice";

const validationSchema = yup.object({
  prefferedarea: yup
    .string("Enter your Prefered Area")
    .required("Preffered Area is required"),
  starttime: yup
    .string("Enter your Start Time")
    .required("Start Time is required"),
  endtime: yup.string("Enter your End Time").required("End Time is required"),
});

const FoodForm = () => {
  const dispatch = useDispatch();

  const [startTime, setTimeStart] = React.useState(new Date());

  const [endTimee, setEndTime] = React.useState(new Date());

  const [checked, setChecked] = React.useState();

  //   console.log("time", startTime)

  const formik = useFormik({
    initialValues: {
      prefferedfood: "",
      starttime: "",
      endtime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const [values, setValues] = useState({
    prefferedFood1: "",
    prefferedFood2: "",
    prefferedFood3: "",
    priceRange: "",
    specs: "",
  });

  const handleChangee = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });
  };

  const state = useSelector((state) => JSON.stringify(state.user));

  console.log("state", state);

  // console.log(checked)
  // console.log(values)

  const checkboxHandleChange = (e) => {
    setChecked(e.target.checked ? 1 : 0);
  };

  const handleSubmit = (event) => {
    formik.handleSubmit();
    if (Object.keys(formik.errors).length === 0) {
      dispatch(eventVenue(values));
    }

    event.preventDefault();
  };

  // console.log("formik",formik)

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit}>
        <p>Select the Food Services</p>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {INITIAL_STATE.filter((arr) =>
            arr.extratype.includes("Food Services")
          ).map((value, id) => {
            //   console.log("arr", value)
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
                      checked={checked}
                      id={value.id}
                      name={value.extratype}
                      value={value.extradata}
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  <div>{value.extradata}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "30%" }}>
            <FormGroup>
              <TextField
                onChange={handleChangee("prefferedFood1")}
                label="Preffered Food 1 *"
                name="prefferedfood"
                id="prefferedfood"
                value={values.prefferedFood1}
                error={
                  formik.touched.prefferedfood &&
                  Boolean(formik.errors.prefferedfood)
                }
                helperText={
                  formik.touched.prefferedfood && formik.errors.prefferedfood
                }
              />
              {/* <ErrorMessage name="Food" /> */}
            </FormGroup>
          </div>
          <div style={{ width: "30%" }}>
            <TextField
              label="Preffered Food 2"
              type="text"
              fullWidth
              onChange={handleChangee("prefferedFood2")}
            />
          </div>
          <div style={{ width: "30%" }}>
            <TextField
              label="Preffered Food 3"
              type="text"
              onChange={handleChangee("prefferedFood3")}
              fullWidth
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "30%" }}>
            <FormGroup>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack>
                  <TimePicker
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => {
                      setTimeStart(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        name="starttime"
                        id="starttime"
                        error={
                          formik.touched.starttime &&
                          Boolean(formik.errors.starttime)
                        }
                        helperText={
                          formik.touched.starttime && formik.errors.starttime
                        }
                        {...params}
                      />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </FormGroup>
          </div>
          <div style={{ width: "30%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack>
                <TimePicker
                  label="End Time"
                  value={endTimee}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div style={{ width: "30%" }}>
            <FormControl
              variant="standard"
              style={{ width: "100%" }}
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-filled-label">Food Price Range</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleChangee("priceRange")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {INITIAL_STATE.filter((arr) =>
                  arr.extratype.includes("Food Price Range")
                ).map((values, id) => {
                  return (
                    <MenuItem value={values.extradata}>
                      {values.extradata}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div>
          <TextField
            label="Any other specification  you want to add"
            name="specification"
            type="text"
            onChange={handleChangee("specs")}
            fullWidth
          ></TextField>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            type="submit"
            style={{ backgroundColor: "purple", color: "white" }}
          >
            Save
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default FoodForm;
