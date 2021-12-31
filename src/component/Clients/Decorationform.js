import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    Radio,
    RadioGroup,
    Select,
    TextField,
    MenuItem,
    Button,
    FormHelperText
  } from "@mui/material/";
  import React, { useState } from "react";
import * as yup from "yup";
  
  import CssBaseline from "@mui/material/CssBaseline";
//   import DecorationEditPackages from "./DecorationEditPackages";
  import DecorationYesForm from "./DecorationYesForm";
//   import DecorationsPackages from "./DecorationsPackages";
  import { makeStyles } from "@mui/styles";
import { useGetextraQuery } from '../../services/extra';
import { Form, Formik, useFormik } from "formik";
import eventDecoration from "../../app/rootSlice"
import { useDispatch, useSelector } from "react-redux";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    margint: {
      marginTop: 15,
    },
    margint5: {
      marginTop: 5,
    },
    margint30: {
      marginTop: 30,
    },
    tabs: {
      flexGrow: 1,
      width: "100%",
    },
    formControl: {
      width: "100%",
    },
    input: {
      display: "none",
    },
  }));
  const validate = yup.object({
    yourTheme: yup.string("Enter your theme").required("theme is required"),
    colorScheme: yup
      .string("Enter your color scheme")
      .required("color scheme is required"),
    eventsegrated: yup
      .string("Enter your eventsegrated")
      .required("eventsegrated is required"),
    eventclassifies: yup
      .string("Enter your eventclassifies")
      .required("eventclassifies is required"),
    eventgenerator: yup
      .string("Enter your eventgenerator")
      .required("eventgenerator is required"),
    eventstage: yup
      .string("Enter your eventstage")
      .required("eventstage is required"),
    briefAboutStage: yup
      .string("Enter your briefAboutStage")
      .required("briefAboutStage is required"),
  });
  export default function Decorationform({ val, setVal}) {

    const state = useSelector(state => state.user)

    const dispatch = useDispatch();
    
  const Formik = useFormik({
    initialValues: {
      themeevent: "",
      yourTheme: "",
      colorScheme: "",
      eventsegrated: "",
      eventclassifies: "",
      eventgenerator: "",
      eventstage: "",
      briefAboutStage: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {},
  });
      const handleSubmit = (event) => {
        event.preventDefault();
        Formik.handleSubmit();
          // dispatch(eventDecoration(values));
        // if (Object.keys(Formik.errors).length === 0 && Formik.dirty === true) {
          console.log(values);
        // }
      };
    const [values, setValues] = useState({
      themeevent: "",
      decorationImageFiles: [],
      eventsegrated: "",
      eventclassifies: "",
      eventgenerator: "",
      eventstage: "",
      briefAboutStage: "",
    });
    const handleChangee = (prop) => (event) => {
      Formik.handleChange(event);
      setValues({ ...values, [prop]: event.target.value });
      setVal({...val, createyourown: values})
    };
    const classes = useStyles();

    const [yes, setYes] = useState(false);
  
    const yesDecorationHandler = (e) => {
      if (e.target.value === "Yes") {
        console.log(e.target.value);
        setYes(true);
        setValues({...values, themeevent: "Yes"})
        console.log(values);
      } else {
        setYes(false);
        setValues({ ...values, themeevent: "No" });
        console.log(e.target.value);
      }
    };

    const INITIAL_STATE = useGetextraQuery(
      "Decoration Event Segregate",
      "Decoration Classifies",
      "Decoration Generator",
      "Decoration Stage"
    );

    // INITIAL_STATE.isFetching === false && console.log(INITIAL_STATE.data);
  
  
    return (
      <React.Fragment>
        <CssBaseline />
        {INITIAL_STATE.isFetching ? (
          "...Loading"
        ) : (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12} align="left">
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Is this a themed event?
                  </FormLabel>
                  <RadioGroup aria-label="postion" name="themeEvent">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                      onChange={yesDecorationHandler}
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                      onChange={yesDecorationHandler}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* If We Click on Yes shows this */}
              {yes ? (
                <DecorationYesForm
                  handleChangee={handleChangee}
                  decorationImageFiles={values.decorationImageFiles}
                  decorationData={values}
                  setDecorationData={setValues}
                  themeErr={Formik.errors.yourTheme}
                  colorErr={Formik.errors.colorScheme}
                />
              ) : null}

              {/* If we click on No Button */}
              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    Is your event segregated? (i.e. partition between ladies and
                    gents)
                  </InputLabel>
                  <Select
                    fullWidth
                    placeholder="Event Segregated"
                    name="eventsegrated"
                    id="eventsegrated"
                    onChange={handleChangee("eventsegrated")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {INITIAL_STATE.data
                      .filter((arr) =>
                        arr.extratype.includes("Decoration Event Segregate")
                      )
                      .map((values, id) => {
                        return (
                          <MenuItem key={id} value={values.extradata}>
                            {values.extradata}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <FormHelperText error>
                    {Formik.errors.eventsegrated}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    How would you like your decorations to be classifies as?
                  </InputLabel>
                  <Select
                    fullWidth
                    name="eventclassifies"
                    id="eventclassifies"
                    onChange={handleChangee("eventclassifies")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {INITIAL_STATE.data
                      .filter((arr) =>
                        arr.extratype.includes("Decoration Classifies")
                      )
                      .map((values, id) => {
                        return (
                          <MenuItem key={id} value={values.extradata}>
                            {values.extradata}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <FormHelperText error>
                    {Formik.errors.eventclassifies}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    Do you want the generator to be arranged by the decorator?
                  </InputLabel>
                  <Select
                    fullWidth
                    name="eventgenerator"
                    id="eventgenerator"
                    value={values.eventgenerator}
                    onChange={handleChangee("eventgenerator")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {INITIAL_STATE.data
                      .filter((arr) =>
                        arr.extratype.includes("Decoration Generator")
                      )
                      .map((values, id) => {
                        return (
                          <MenuItem key={id} value={values.extradata}>
                            {values.extradata}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <FormHelperText error>
                    {Formik.errors.eventgenerator}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    Do you need a stage?
                  </InputLabel>
                  <Select
                    fullWidth
                    name="eventstage"
                    id="eventstage"
                    onChange={handleChangee("eventstage")}
                    value={values.eventstage}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {INITIAL_STATE.data
                      .filter((arr) =>
                        arr.extratype.includes("Decoration Stage")
                      )
                      .map((values, id) => {
                        return (
                          <MenuItem key={id} value={values.extradata}>
                            {values.extradata}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <FormHelperText error>
                    {Formik.errors.eventstage}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  id="briefAboutStage"
                  label="Give brief about the stage."
                  placeholder="Brief about the stage"
                  multiline
                  maxRows={4}
                  name="briefAboutStage"
                  value={values.briefAboutStage}
                  onChange={handleChangee("briefAboutStage")}
                  variant="filled"
                />
                <FormHelperText error>
                  {Formik.errors.briefAboutStage}
                </FormHelperText>
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
            </Grid>
          </Form>
        )}
      </React.Fragment>
    );
  }
  