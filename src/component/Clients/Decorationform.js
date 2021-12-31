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
    MenuItem
  } from "@mui/material/";
  import React, { useState } from "react";
  
  import CssBaseline from "@mui/material/CssBaseline";
//   import DecorationEditPackages from "./DecorationEditPackages";
  import DecorationYesForm from "./DecorationYesForm";
//   import DecorationsPackages from "./DecorationsPackages";
  import { makeStyles } from "@mui/styles";
import { useGetextraQuery } from '../../services/extra';
import { Formik } from "formik";
  
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
  
  export default function Decorationform() {

    const [values, setValues] = useState({
      themeevent: "",
      prefferedArea1: "",
      prefferedArea2: "",
      prefferedArea3: "",
      startTime: "",
      endTime: "",
      priceRange: "",
      specs: "",
    });
    const handleChangee = (prop) => (event) => {
      Formik.handleChange(event);
      setValues({ ...values, [prop]: event.target.value });
    };
    const classes = useStyles();

    const [yes, setYes] = useState(false);
  
    const yesDecorationHandler = (e) => {
      if (e.target.value === "Yes") {
        console.log(e.target.value);
        setYes(true);
        handleChangee("themeevent", 1)
        console.log(values);
      } else {
        setYes(false);
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
          <>
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
              {yes ? <DecorationYesForm /> : null}

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
                    name="eventSegregated"
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
                </FormControl>
              </Grid>

              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    How would you like your decorations to be classifies as?
                  </InputLabel>
                  <Select fullWidth name="decorationClassifies">
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
                </FormControl>
              </Grid>

              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    Do you want the generator to be arranged by the decorator?
                  </InputLabel>
                  <Select fullWidth name="decorationGenerator">
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
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    Do you need a stage?
                  </InputLabel>
                  <Select fullWidth name="decorationStage">
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
                </FormControl>
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  id="filled-multiline-flexible"
                  label="Give brief about the stage."
                  placeholder="Brief about the stage"
                  multiline
                  maxRows={4}
                  name="briefAboutStage"
                  variant="filled"
                />
              </Grid>
            </Grid>
          </>
        )}
      </React.Fragment>
    );
  }
  