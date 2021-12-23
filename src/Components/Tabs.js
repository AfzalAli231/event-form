import React, { useState } from "react";
import * as Yup from 'yup';
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Formik} from "formik";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import HomeIcon from "./Homeicon";
import FoodIcon from "./FoodIcon";
import DecorationIcon from "./DecorationIcon";
import FloralIcon from "./FloralIcon";
import AddonsIcon from "./AddonsIcon";
import Flrolform from "./Floralform"
import Addons from "./Addons";
import VenueFormm from "./venueForm";
import FoodForm from "./Foodform";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const initialValues = {
  Area: ""
};

const VanueForm = () => {



  const [value, setValue] = useState(0);

  const [ toggle, setToggle] = useState(false);
  const [secondToggle, setSecondToggle] = useState(false);
  const [thirdToggle, setThirdToggle] = useState(false);
  const [fourthToggle, setFourthToggle] = useState(false);
  const [fifthToggle, setFifthToggle] = useState(false);

  const [startTime, setTimeStart] = useState(new Date());

  const [endTimee, setEndTime] = useState(new Date());


  // const [checked, setChecked] = useState();

  console.log(setToggle, setSecondToggle, setThirdToggle, setFourthToggle, setFifthToggle, setTimeStart, setEndTime)


  console.log("time", startTime)

  const [values, setValues] = useState({
    prefferedArea1: "",
    prefferedArea2: "",
    prefferedArea3: "",
    startTime: startTime,
    endTime: endTimee,
    priceRange: "",
    specs: "",
  })

  const handleChangee = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  console.log(handleChangee);


  console.log("values", values)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            Area: Yup.string()
              .min(10, "Must be greater than 10")
              .required("Required"),
          })}
          onSubmit={(values, formikHelpers) => {
            console.log(values + "values");
            console.log(formikHelpers);
          }}
        >
          {(formik) => (
            <div>
              <Box style={{ backgroundColor: "rgb(0, 255, 136)" }}>
                <Tabs
                  value={value}
                  variant="fullWidth"
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  style={{ border: "1px solid red" }}
                >
                  <Tab
                    label={<HomeIcon />}
                    {...a11yProps(0)}
                    style={{ border: "1px solid red" }}
                  />

                  {toggle === true ? (
                    <Tab
                      label={<HomeOutlined />}
                      {...a11yProps(0)}
                      style={{ border: "1px solid red" }}
                    />
                  ) : null}

                  <Tab
                    label={<FoodIcon />}
                    {...a11yProps(1)}
                    style={{ border: "1px solid red" }}
                  />
                  {secondToggle === true ? (
                    <Tab
                      label={<FastfoodOutlinedIcon />}
                      {...a11yProps(1)}
                      style={{ border: "2px solid red" }}
                    />
                  ) : null}
                  <Tab
                    label={<DecorationIcon />}
                    {...a11yProps(2)}
                    style={{ border: "1px solid red" }}
                  />
                  {thirdToggle === true ? (
                    <Tab
                      label={<AirlineSeatReclineNormalIcon />}
                      {...a11yProps(2)}
                      style={{ border: "1px solid red" }}
                    />
                  ) : null}
                  <Tab
                    label={<FloralIcon />}
                    {...a11yProps(3)}
                    style={{ border: "1px solid red" }}
                  />
                  {fourthToggle === true ? (
                    <Tab
                      label={<AddAPhotoIcon />}
                      {...a11yProps(3)}
                      style={{ border: "1px solid red" }}
                    />
                  ) : null}
                  <Tab
                    label={<AddonsIcon />}
                    {...a11yProps(4)}
                    style={{ border: "1px solid red" }}
                  />
                  {fifthToggle === true ? (
                    <Tab
                      label={<AcUnitIcon />}
                      {...a11yProps(4)}
                      style={{ border: "1px solid red" }}
                    />
                  ) : null}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <VenueFormm />
              </TabPanel>
              <TabPanel value={value} index={1}>
                {<FoodForm />}
              </TabPanel>
              <TabPanel value={value} index={2}></TabPanel>
              <TabPanel value={value} index={3}>
                {<Flrolform />}
              </TabPanel>
                  {fifthToggle === true ? (
              <TabPanel value={value} index={4}>
                {<Addons />}
              </TabPanel>
                  ) : null }
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VanueForm;
