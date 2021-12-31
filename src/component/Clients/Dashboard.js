import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from "@mui/material/TextField"
import { useDispatch, useSelector } from "react-redux";
import {setUser,EventType,NoOfGuest, EventDate } from "../../app/rootSlice";
// import store from "../store"
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker';
// import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useGetextraQuery } from "../../services/extra";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import MobileDatePicker from '@mui/lab/MobileDatePicker';


const initialValues = {
  eventTitle: '',
  eventType: '',
  noOfGuest: 0,
  eventDate: "",
}


const Dashboard = () => {
  
  // const [values, setValues] = useState("")

  const [value, setValue] = React.useState(new Date());
  // const [date, setDate] = React.useState(new Date());
const INITIAL_STATE = useGetextraQuery();


  const dispatch = useDispatch();


  const handleChange = (e) => {
    dispatch(setUser(e.target.value));
  };
const timeChange = (newValue) => {
    setValue(newValue);
  };

  const EventHandleChange = (e) => {
    dispatch(EventType(e.target.value));
  }

  const NoOfGuestHandleChange = (e) => {
    dispatch(NoOfGuest(e.target.value));
  }

  const EventDateHandleChange = (e) => {
    dispatch(EventDate(e));
  }

  const state = useSelector((state) => (state.user))

  const eventdate = state.eventdate



    return (
      <div>
        {INITIAL_STATE.isFetching ? (
          "...Loading"
        ) : (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={Yup.object({
              eventTitle: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              eventType: Yup.string().required("Required"),
              noOfGuest: Yup.number().required("Required"),
              eventDate: Yup.date().required("Required"),
            })}
            onSubmit={(values, formikHelpers) => {
              // console.log(values.eventDate + "values")
              // console.log(formikHelpers)
            }}
          >
            {(formik) => (
              <div>
                <div style={{ textAlign: "left" }}>
                  <h1>Create Event</h1>
                  <div style={{ backgroundColor: "lightgray", width: "100px" }}>
                    <p style={{ padding: "10px 2px 10px 5px" }}>
                      Event Profile
                    </p>
                  </div>
                </div>
                {/* {console.log(formik.values)} */}
                <Form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <Field
                        label="Event Title"
                        name="eventTitle"
                        type="text"
                        fullWidth
                        as={TextField}
                        onKeyUp={handleChange}
                      />
                      <ErrorMessage name="eventTitle" />
                    </div>
                    <div style={{ width: "45%" }}>
                      <FormControl
                        variant="filled"
                        sx={{ m: 1, minWidth: "100%" }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Event Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          name="event type"
                          onChange={EventHandleChange}
                          style={{ padding: "0 1rem", marginRight: "0.5rem" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {INITIAL_STATE.data
                            .filter((arr) =>
                              arr.extratype.includes("Event Type")
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
                      <ErrorMessage name="eventType" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "40px",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <Field
                        label="No of Guest"
                        name="noOfGuest"
                        type="number"
                        fullWidth
                        as={TextField}
                        onKeyUp={NoOfGuestHandleChange}
                      />
                      <ErrorMessage name="noOfGuest" />
                    </div>
                    <div style={{ width: "45%" }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Stack>
                            <DesktopDatePicker
                              label="dd/mm/yyyy"
                              inputFormat="dd/mm/yyyy"
                              name="eventDate"
                              onChange={(timeChange, EventDateHandleChange)}
                              value={eventdate}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      <ErrorMessage name="eventDate" />
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        )}
      </div>
    );
}

export default Dashboard




