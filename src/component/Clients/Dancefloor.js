import React, { useState } from 'react';
import { useFormik } from 'formik';
import FormControl from '@mui/material/FormControl';
import * as yup from 'yup';
import {Button, FormGroup, Select, MenuItem, Box, FormHelperText} from "@mui/material"
import TextFeild from "@mui/material/TextField"
import { useDispatch } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import {addonsdancetype} from "../../app/rootSlice"
import { useGetextraQuery } from '../../services/extra';


const validationSchema = yup.object({
  type: yup.string("Enter your Dance Type").required("Dance Type is required"),
  size: yup
    .string("Enter your Dance Floor")
    .required("Dance Floor is required"),
  circular: yup
    .string("Enter your Circular Trussing")
    .required("Circular Trussing is required"),
  specs: yup.string("Enter your Specs").required("Specs is required"),
});
const Dancefloor = () => {


  const formik = useFormik({
    initialValues: {
      type: '',
      size: '',
      circular: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const handleChangee = (prop) => (event)=>{
    formik.handleChange(event);
    setValues({...values, [prop]: event.target.value})
  }

  
const INITIAL_STATE = useGetextraQuery();
  const [values, setValues] = useState({
    type: "",
    addonsDanceSize: "",
    addonsDanceCircullarTrussing: "",
    specs:""
  })

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    formik.handleSubmit()
    // if (Object.keys(formik.errors).length === 0) {
        dispatch(addonsdancetype(values))
    // }
    
    event.preventDefault()
}

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit}>
        {INITIAL_STATE.isFetching ? (
           "...Loading" 
         ) : (
           <> 
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "30%" }}>
            <FormGroup>
              <FormControl
                variant="standard"
                style={{ width: "100%", backgroundColor: "#F5F5F5" }}
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{
                    paddingLeft: "10px",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="type"
                  name="type"
                  value={values.type}
                  // id={values.id}
                  variant="outlined"
                  onChange={handleChangee("type")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INITIAL_STATE.data.filter((arr) =>
                          arr.extratype.includes("Dance Floor Type")
                        ).map((values) => {
                          return (
                            <MenuItem value={values.extradata} id={values.id}>
                              {values.extradata}
                            </MenuItem>
                          );
                        })}
                </Select>
                <FormHelperText error>{formik.errors.type}</FormHelperText>
              </FormControl>
            </FormGroup>
          </div>

          <div style={{ width: "30%" }}>
            <FormGroup>
              <FormControl
                variant="standard"
                style={{ width: "100%", backgroundColor: "#F5F5F5" }}
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{
                    paddingLeft: "10px",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  value={values.addonsDanceSize}
                  name="size"
                  id="size"
                  variant="outlined"
                  onChange={handleChangee("addonsDanceSize")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INITIAL_STATE.data.filter((arr) =>
                          arr.extratype.includes("Dance Floor Size")
                        ).map((values, id) => {
                          return (
                            <MenuItem value={values.extradata}>
                              {values.extradata}
                            </MenuItem>
                          );
                        })}
                </Select>
                <FormHelperText error>{formik.errors.size}</FormHelperText>
              </FormControl>
            </FormGroup>
          </div>

          <div style={{ width: "30%" }}>
            <FormGroup>
              <FormControl
                variant="standard"
                style={{ width: "100%", backgroundColor: "#F5F5F5" }}
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{
                    paddingLeft: "10px",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  Circular Trussing
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="circular"
                  name="circular"
                  value={values.addonsDanceCircullarTrussing}
                  variant="outlined"
                  onChange={handleChangee("addonsDanceCircullarTrussing")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INITIAL_STATE.data.filter((arr) =>
                          arr.extratype.includes(
                            "Dance Floor Circular Trussing"
                          )
                        ).map((values, id) => {
                          return (
                            <MenuItem value={values.extradata}>
                              {values.extradata}
                            </MenuItem>
                          );
                        })}
                </Select>
                <FormHelperText error>{formik.errors.circular}</FormHelperText>
              </FormControl>
            </FormGroup>
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <div style={{ width: "100%" }}>
            <TextFeild
              label="Add specification if any"
              name="specs"
              id="specs"
              type="text"
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "10px",
                backgroundColor: "#F5F5F5",
              }}
              onChange={handleChangee("specs")}
            />
            <FormHelperText error>{formik.errors.specs}</FormHelperText>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            type="submit"
            style={{ backgroundColor: "rgb(0, 255, 136)", color: "black" }}
          >
            Save
          </Button>
        </div>
        </>
        )}
      </Box>
    </div>
  );
}

export default Dancefloor


