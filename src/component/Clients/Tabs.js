import React, { useEffect, useState } from "react";
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
import Flrolform from "./Floralform"
import Addons from "./Addons";
import VenueFormm from "./venueForm";
import Foodoptions from "./Foodoptions";
import DecorationOptions from "./DecorationOptions";
import { Switch } from "@mui/material";


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
  
  const [categorySwitch, setCategorySwitch] = React.useState({
    isVenue: false,
    isFood: false,
    isDecorations: false,
    // isPhotography: false,
    isFlorals: false,
    isAddons: false,
  });
  //  state to manage display and hide functionality of tabs menu on the basis of user category selection
  const [isTabsMenuDisplay, setIsTabsMenuDisplay] = useState(false);

  const [startTime, setTimeStart] = useState(new Date());

  const [endTimee, setEndTime] = useState(new Date());
console.log(setTimeStart, setEndTime);

  // const [checked, setChecked] = useState();


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
const handleChangeCategory = (event) => {
    setCategorySwitch({
      ...categorySwitch,
      [event.target.name]: event.target.checked,
    });
  };

  // this effect is listening to the changes in category switches changes
  useEffect(() => {
    setIsTabsMenuDisplay(tabMenuDisplayHandler());
    //eslint-disable-next-line
  }, [categorySwitch]);

  // this function is responsible for defining the value that if the tab can display or not
  const tabMenuDisplayHandler = () => {
    const values = Object.values(categorySwitch);
    // console.log(values);
    return values.find((item) => {
      return item === true;
    });
  };

  return (
    <div>
        <div>
          <p
            style={{
              backgroundColor: "lightgray",
              width: "130px",
              padding: "10px 0px 10px 10px",
            }}
          >
            Select Categories
          </p>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: "1",
              marginTop: "20px",
            }}
          >
            <div>
              <HomeOutlined style={{marginLeft:"1rem"}} />
              <p style={{marginLeft:"0.5rem"}}>Venue</p>
            </div>
            <div>
              <FastfoodOutlinedIcon style={{marginLeft:"1.5rem"}} />
              <p style={{marginLeft:"1rem"}}>Food</p>
            </div>
            <div>
              <AirlineSeatReclineNormalIcon style={{marginLeft:"2rem"}} />
              <p>Decorations</p>
            </div>
            <div>
              <AddAPhotoIcon style={{marginLeft:"0.2rem"}} />
              <p style={{marginRight:"1rem"}}>Floral</p>
            </div>
            <div>
              <AcUnitIcon style={{marginLeft: "1rem"}} />
              <p>Addons</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: "1",
              marginTop: "0px",
              alignItems: "center",
            }}
          >
            <div>
              <Switch checked={categorySwitch.isVenue}
                        onChange={handleChangeCategory}
                        name="isVenue"
                        color="primary" />
            </div>
            <div>
              <Switch checked={categorySwitch.isFood}
                        onChange={handleChangeCategory}
                        name="isFood"
                        color="primary" />
            </div>
            <div>
              <Switch checked={categorySwitch.isDecorations}
                        onChange={handleChangeCategory}
                        name="isDecorations"
                        color="primary" />
            </div>
            <div>
              <Switch checked={categorySwitch.isFlorals}
                        onChange={handleChangeCategory}
                        name="isFlorals"
                        color="primary" />
            </div>
            <div>
              <Switch checked={categorySwitch.isAddons}
                        onChange={handleChangeCategory}
                        name="isAddons"
                        color="primary" />
            </div>
          </div>

          {isTabsMenuDisplay && (
            <div style={{ marginTop: "10px", marginBottom: "50px" }}>
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
                      label={categorySwitch.isVenue && "Venue"}
                      icon={categorySwitch.isVenue && <HomeOutlined />}
                      {...a11yProps(0)}
                      style={{ border: "1px solid red" }}
                    />

                    <Tab
                      label={categorySwitch.isFood && "Food"}
                      icon={categorySwitch.isFood && <FastfoodOutlinedIcon />}
                      {...a11yProps(1)}
                      style={{ border: "2px solid red" }}
                    />
                    
                    <Tab
                      label={categorySwitch.isDecorations && "Decoration"}
                      icon={categorySwitch.isDecorations && <AirlineSeatReclineNormalIcon />}
                      {...a11yProps(2)}
                      style={{ border: "1px solid red" }}
                    />

                    <Tab
                      label={categorySwitch.isFlorals && "Floral"}
                      icon={categorySwitch.isFlorals && <AddAPhotoIcon />}
                      {...a11yProps(3)}
                      style={{ border: "1px solid red" }}
                    />
                    
                    <Tab
                      label={categorySwitch.isAddons && "Addons"}
                      icon={categorySwitch.isAddons && <AcUnitIcon />}
                      {...a11yProps(4)}
                      style={{ border: "1px solid red" }}
                    />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                {categorySwitch.isVenue && <VenueFormm />}
              </TabPanel>
              <TabPanel value={value} index={1} style={{ marginTop: "20" }}>
                {categorySwitch.isFood && <Foodoptions />}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {categorySwitch.isDecorations && <DecorationOptions />}
              </TabPanel>
              <TabPanel value={value} index={3}>
                {categorySwitch.isFlorals && <Flrolform />}
              </TabPanel>
              <TabPanel value={value} index={4}>
                {categorySwitch.isAddons && <Addons />}
              </TabPanel>
            </div>
          )}
        </Formik>
      </div>
    </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default VanueForm;
