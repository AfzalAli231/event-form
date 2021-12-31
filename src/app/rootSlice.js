import { createSlice } from "@reduxjs/toolkit";
const initialState = 
  {

      "eventname": "",

      "eventtypeid": 0,

      "eventguest": "",

      "eventdate": "",

    "eventvenue" : {

    },
    "eventfood" : {

    },
    "eventdecoration": {

    },
    "eventfloral" : {
      
    },
    "eventaddonsdancefloor": {

  },
  "eventaddonsdisplay": {
    
 },
 "eventaddonssound": {
  
 }

 
  }
const userSlice = createSlice({

  name: 'user',
  initialState: initialState,
  reducers: {
    
    setUser: (state = initialState, action) => {
      state.eventname = action.payload
    },


    EventType: (state, action) => {
      state.eventtypeid = action.payload
    },

    NoOfGuest: (state, action) => {
      state.eventguest = action.payload
    },

    EventDate: (state, action) => {
      state.eventdate = action.payload
    },

    eventVenue: (state, action) => {
      state.eventvenue = action.payload
    },

    eventFood: (state, action) => {
      state.eventfood = action.payload
    },

    eventDecoration: (state, action) => {
      state.eventdecoration = action.payload
    },

    addonsfloralservices: (state, action) => {
      state.eventfloral = action.payload
    },

    addonsdancetype: (state, action) => {
      state.eventaddonsdancefloor = action.payload
    },

    addonsprojectorsneeded: (state, action) => {
      state.eventaddonsdisplay = action.payload
    },

    addonssounddescription: (state, action) => {
      state.eventaddonssound = action.payload
    },

  },
});
export const { 
    setUser,
    EventType,
    NoOfGuest,
    EventDate,
    eventVenue,
    eventDecoration,
    eventFood,
    addonsfloralservices,
    addonsdancetype,
    addonsprojectorsneeded,
    addonssounddescription
   } = userSlice.actions;
  
  export const selectUser = state => state.user.user;
  
  export default userSlice.reducer;
  