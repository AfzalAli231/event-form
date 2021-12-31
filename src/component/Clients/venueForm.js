import React, { useState } from "react";
import * as yup from 'yup';
import { Button, FormGroup, FormHelperText, TextField } from "@mui/material";
import { Field, Form, useFormik } from "formik";
import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { eventVenue } from "../../app/rootSlice";
import { useGetextraQuery } from '../../services/extra';

const validationSchema = yup.object({
  prefferedarea: yup
    .string("Enter your Prefered Area")
    .required("Preffered Area is required"),
  priceRange: yup
    .string("Enter your Price Range")
    .required("Price Range is required"),
});
const VanueForm = () => {

  const dispatch = useDispatch();

  const responseInfo = useGetextraQuery("Venue Services");

  const [starttime, setTimeStart] = React.useState(`${new Date()}`);

  const [endtime, setEndTime] = React.useState(`${new Date()}`);

  const [checked, setChecked] = React.useState();
  const [err, setErr] = React.useState();


  const formik = useFormik({
    initialValues: {
      venueservices: [],
      prefferedarea: "",
      priceRange: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const [values, setValues] = useState({
    venueservices: [], 
    prefferedArea1: "",
    prefferedArea2: "",
    prefferedArea3: "",
    starttime: starttime,
    endtime: endtime,
    priceRange: "",
    specs: "",
  })


  const handleChangee = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });
  };
  
  

  const state = useSelector((state) => JSON.stringify(state.user))
  console.log(state);



//   const checkboxHandleChange = (e) => {
//     setChecked( e.target.checked ? 1 : 0)
// }


    const handleSubmit = (event) => {
      event.preventDefault();
      formik.handleSubmit()
        if(values.venueservices.length > 0 && Object.keys(formik.errors).length === 0 && formik.dirty === true) {
        console.log(values)
        dispatch(eventVenue(values));
        if (Object.keys(formik.errors).length > 0 && formik.dirty === false) {
          setValues()
          dispatch(eventVenue(values));
        }
      }else{
        setErr("Venue Services Required");
        setTimeout(()=>{
            setErr();
        }, 3000)
      }
    }

    const venuedata = (event) => {
      if (event.target.checked === true) {
      setValues({
        ...values,
        venueservices: values.venueservices.concat(event.target.id),
      });
  }}
  return (
    <div>
      {responseInfo.isFetching ? (
        "...Loading"
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <p>Select the venue Services</p>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {responseInfo.data
              .filter((arr) => arr.extratype.includes("Venue Services"))
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
                          checked={checked}
                          id={value.id}
                          key={value.id}
                          name="venueservices"
                          value={value.extradata}
                          onChange={(event)=>{
                            handleChangee("venueservices");
                            venuedata(event);
                        }}
                          label={value.extradata}
                        />
                      </div>
                      <div>{value.extradata}</div>
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
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: "30%" }}>
              <FormGroup>
                <TextField
                  onChange={handleChangee("prefferedArea1")}
                  label="Preffered Area 1 *"
                  name="prefferedarea"
                  id="prefferedarea"
                  value={values.prefferedArea1}
                  error={
                    formik.touched.prefferedarea &&
                    Boolean(formik.errors.prefferedarea)
                  }
                  helperText={
                    formik.touched.prefferedarea && formik.errors.prefferedarea
                  }
                />
              </FormGroup>
            </div>
            <div style={{ width: "30%" }}>
              <TextField
                label="Preffered Area 2 *"
                type="text"
                fullWidth
                onChange={handleChangee("prefferedArea2")}
                name="prefferedarea2"
                id="prefferedarea2"
                value={values.prefferedArea2}
              />
            </div>
            <div style={{ width: "30%" }}>
              <TextField
                label="Preffered Area 3 *"
                type="text"
                onChange={handleChangee("prefferedArea3")}
                fullWidth
                name="prefferedarea3"
                id="prefferedarea3"
                value={values.prefferedArea3}
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
                      value={starttime}
                      onChange={(newValue) => {
                        setTimeStart(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
                <FormHelperText error>{formik.errors.starttime}</FormHelperText>
              </FormGroup>
            </div>
            <div style={{ width: "30%" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack>
                  <TimePicker
                    label="End Time"
                    value={endtime}
                    onChange={(newValue) => {
                      setEndTime(newValue);
                      console.log(endtime);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
                <FormHelperText error>{formik.errors.endtime}</FormHelperText>
              </LocalizationProvider>
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
                  name="priceRange"
                  id="priceRange"
                  value={values.priceRange}
                  onChange={handleChangee("priceRange")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {responseInfo.data
                    .filter((arr) =>
                      arr.extratype.includes("Venue Price Range")
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
                  {formik.errors.priceRange}
                </FormHelperText>
              </FormControl>
            </div>
          </div>
          <div>
            <TextField
              label="Any other specification  you want to add"
              name="specs"
              type="text"
              onChange={handleChangee("specs")}
              fullWidth
              id="specs"
              value={values.specs}
            ></TextField>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              type="submit"
              style={{ backgroundColor: "rgb(0, 255, 136)", color: "black" }}
            >
              Save
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
};

export default VanueForm;