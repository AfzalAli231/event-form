// mui imports
import  Box  from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import  Grid  from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import Decorationform from "./Decorationform";
// custom import
import DecorationPackages from "./DecorationPackages";
import ChairIcon from "@mui/icons-material/Chair";
import BalconyIcon from "@mui/icons-material/Balcony";
import DecorationSelect from "./DecorationSelect";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import eventDecoration from "../../app/rootSlice"

export default function Decorationoptions() {
  const [section, setSection] = useState({
    customize: false,
    existing: false,
    selected: null,
  });

    const [values, setValues] = useState({
      menupackageid: section.existing ? 1 : "",
      createyourown: "",
    });

  const handleChange = (event, check) => {
    console.log(event);
    if (!check && event.target.name === "existing") {
      setSection({ customize: false, existing: true });
    } else if (!check && event.target.name === "customize") {
      setSection({ customize: true, existing: false });
    } else if (check && event.edit === "Edit Menu") {
      setSection({ customize: true, existing: false });
    } else if (check && event.select === "Select") {
      setSection({
        customize: false,
        existing: true,
        selected: "You have seleted the package: " + event.title,
      });
    }
  };

    const dispatch = useDispatch()
    const handleChangee = (prop) => (event) => {
      Formik.handleChange(event);
      setValues({ ...values, [prop]: event.target.value });
      dispatch(eventDecoration(values));
    };

  return (
    <React.Fragment style={{ marginTop: "50" }}>
      <CssBaseline />

      <Decorationform handleChange={handleChange} />

      {section.customize && (
        <div style={{ marginTop: "2rem" }}>
          <Typography
            variant="h6"
            gutterBottom
            align="left"
            // className={classes.margint}
            style={{ marginTop: "15" }}
          >
            <div
              // className={classes.margint30}
              style={{ marginTop: "30", marginBottom: "50" }}
            >
              <span
                style={{
                  borderRadius: 4,
                  padding: 5,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                Create your own menu
              </span>
            </div>
          </Typography>
          <DecorationSelect values={values} setValues={setValues} />
        </div>
      )}

      {section.existing && (
        <div>
          <Typography
            variant="h6"
            gutterBottom
            align="left"
            style={{ marginTop: "15" }}
            // className={classes.margint}
          >
            <div
              // className={classes.margint30}
              style={{ marginTop: "30", marginBottom: "30" }}
            >
              <span
                // className={classes.heading1}
                style={{
                  borderRadius: 4,
                  padding: 5,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                Packages
              </span>
            </div>
            {section.selected && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#e52d27",
                  color: "white",
                  paddingTop: "0.6vw",
                  paddingBottom: "0.6vw",
                  borderRadius: "0.6vw",
                  paddingLeft: "2vw",
                  marginTop: "2vw",
                  marginBottom: "2vw",
                }}
              >
                {section.selected}
                <span
                  onClick={() => {
                    setSection({
                      selected: null,
                      customize: false,
                      existing: true,
                    });
                    window.localStorage.removeItem("foodItems");
                  }}
                  style={{
                    backgroundColor: "#e0e0e0",
                    height: "2vw",
                    width: "2vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    marginLeft: "1vw",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  <ClearIcon
                    style={{
                      height: "1.5vw",
                      width: "1.5vw",
                    }}
                  />
                </span>
              </div>
            )}
          </Typography>
          <DecorationPackages handleChange={handleChange} />
        </div>
      )}
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        onChange={(e) => handleChange(e, false)}
      >
        <Grid container spacing={3} style={{ marginTop: "2rem" }}>
          <Grid item md={5} xs={5} align="center">
            <Box>
              <BalconyIcon style={{ fontSize: 50 }} />
            </Box>
            <Box>
              <FormControlLabel
                value={section.existing}
                control={<Radio checked={section.existing} color="primary" />}
                label="Choose from the existing menu"
                labelPlacement="existing menu"
                name="existing"
                onChange={(e) => handleChange(e, false)}
              />
            </Box>
          </Grid>
          <Grid item md={2} xs={2} align="center">
            OR
          </Grid>
          <Grid item md={5} xs={5} align="center">
            <Box>
              <ChairIcon style={{ fontSize: 50 }} />
            </Box>
            <Box>
              <FormControlLabel
                value="Yes"
                control={
                  <Radio
                    checked={section.customize}
                    disabled={section.selected ? true : false}
                    color="primary"
                  />
                }
                label="Create your own menu"
                labelPlacement="top"
                name="customize"
                onChange={(e) => handleChange(e, false)}
              />
            </Box>
          </Grid>
        </Grid>
      </RadioGroup>
    </React.Fragment>
  );
}
