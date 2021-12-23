import React, { useState } from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Switch from "@mui/material/Switch";
import Tabs from "./Tabs"
import VanueForm from './venueForm';
import FoodForm from './Foodform';
import Decorationform from './Decorationform';

const Catogeries = () => {

    const [toggle, setToggle] = useState(false);
    const [secondToggle, setSecondToggle] = useState(false);
    const [thirdToggle, setThirdToggle] = useState(false);
    const [fourthToggle, setFourthToggle] = useState(false);
    const [fifthToggle, setFifthToggle] = useState(false);
  
  
    const handleVenueClick = () => {
      setToggle(!toggle)
      console.log(toggle)
    }


    const handleFoodClick = () => {
      setSecondToggle(!secondToggle);
      console.log(secondToggle);
    };  

    const handleDecorationClick = () => {
      setThirdToggle(!thirdToggle);
      console.log(thirdToggle);
    }; 

    const handleFloralClick = () => {
      setFourthToggle(!fourthToggle);
      console.log(fourthToggle);
    }; 

    const handleAddonsClick = () => {
      setFifthToggle(!fifthToggle);
      console.log(fifthToggle);
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
              <HomeOutlinedIcon style={{ paddingLeft: "20px" }} />
              <p style={{ paddingLeft: "10px" }}>Venue</p>
            </div>
            <div>
              <FastfoodOutlinedIcon style={{ paddingLeft: "30px" }} />
              <p style={{ paddingLeft: "20px" }}>Food</p>
            </div>
            <div>
              <AirlineSeatReclineNormalIcon style={{ paddingLeft: "40px" }} />
              <p style={{ paddingLeft: "10px" }}>Decorations</p>
            </div>
            <div>
              <AddAPhotoIcon style={{ marginLeft: "-15px" }} />
              <p style={{ marginLeft: "-20px" }}>Floral</p>
            </div>
            <div>
              <AcUnitIcon style={{ paddingLeft: "30px" }} />
              <p style={{ paddingLeft: "15px" }}>Addons</p>
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
              <Switch onClick={handleVenueClick} />
            </div>
            <div>
              <Switch onClick={handleFoodClick} />
            </div>
            <div>
              <Switch onClick={handleDecorationClick} />
            </div>
            <div>
              <Switch onClick={handleFloralClick} />
            </div>
            <div>
              <Switch onClick={handleAddonsClick} />
            </div>
          </div>

          {toggle ? (
            <div style={{ marginTop: "10px", marginBottom: "50px" }}>
              <Tabs />
            </div>
          ) : null}
          {secondToggle ? (
            <div style={{ marginTop: "10px", marginBottom: "50px" }}>
              <Tabs />
            </div>
          ) : null}
          {thirdToggle ? (
            <div style={{ marginTop: "10px", marginBottom: "50px" }}>
              <Tabs />
            </div>
          ) : null}
          {fourthToggle ? (
            <div style={{ marginTop: "10px", marginBottom: "50px" }}>
              <Tabs />
            </div>
          ) : null}
          {fifthToggle ? (
            <div style={{ marginTop: "10px", marginBottom: "50px" }}>
              <Tabs />
            </div>
          ) : null}
        </div>
      </div>
    );
}

export default Catogeries;
