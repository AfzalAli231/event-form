import React, { useState } from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Switch from "@mui/material/Switch";
import Tabs from "./Tabs"

const Catogeries = () => {

    const [toggle, setToggle] = useState(false);
    const [secondToggle, setSecondToggle] = useState(false);
      
  
    const handleVenueClick = () => {
      setToggle(!toggle)
      console.log(toggle)
    }


    const handleFoodClick = () => {
      setSecondToggle(!secondToggle);
      console.log(secondToggle);
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
              <Switch onClick="" />
            </div>
            <div>
              <Switch onClick="" />
            </div>
            <div>
              <Switch onClick="" />
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
        </div>
      </div>
    );
}

export default Catogeries
