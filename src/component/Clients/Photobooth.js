import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
// import FormControl from '@mui/material/FormControl';
import * as Yup from 'yup';
// import {Button, FormGroup, TextField, Select, MenuItem, Checkbox} from "@mui/material"
import TextFeild from "@mui/material/TextField"
// import { useDispatch } from "react-redux";
// import {setUser,EventType,NoOfGuest,EventDate } from "../rootSlice";
// import InputLabel from '@mui/material/InputLabel';
// import INITIAL_STATE from "../state"
import {} from "./TextFeild"
import { Grid } from '@mui/material';
import UploadImage from './DecoUploadImage';






const Photobooth = () => {

  // const [range, setRange] = React.useState('');

  
  // const [values, setValues] = useState(null)

  // const [checked, setChecked] = React.useState();

  // const [secondRange, setSecondRange] = React.useState();

        const [values, setValues] = useState({

        })

//   const dispatch = useDispatch();


//   const handleChange = (e) => {
//     dispatch(setUser(e.target.value));
//   };

//   const EventHandleChange = (e) => {
//     dispatch(EventType(e.target.value))
//   }

//   const NoOfGuestHandleChange = (e) => {
//     dispatch(NoOfGuest(e.target.value))
//   }

//   const EventDateHandleChange = (e) => {
//     dispatch(EventDate(e.target.value))
//   }

//   const SelectHandleChange = (event) => {
//     setRange(event.target.value);
//   };

//   const SelectSecondHandleChange = (event) => {
//     setSecondRange(event.target.value);
//   };

//   const checkboxHandleChange = (e) => {
//     setChecked( e.target.checked ? 1 : 0)
// }


  const decorationImgChangeHandler = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log("filesArray: ", filesArray);
      setDecorationData((prevStates) => ({
        ...prevStates,
        decorationImageFiles:
          prevStates.decorationImageFiles.concat(filesArray),
      }));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const decorationImgDeleteHandler = (index) => {
    decorationData.decorationImageFiles.splice(index);
    setDecorationData((prevStates) => ({
      ...prevStates,
      decorationImageFiles: prevStates.decorationImageFiles.filter(
        (i) => i !== index
      ),
    }));
  };

    return (
      <div>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={Yup.object({
            kindsOfFlower: Yup.string()
              .min(10, "Must be greater than 10")
              .required("Required")
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            priceRange: Yup.string()
              .min(10, "Must be greater than 10")
              .required("Required")
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            colorTheme: Yup.string()
              .min(10, "Must be greater than 10")
              .required("Required"),

            Explain: Yup.string()
              .min(10, "Must be greater than 10")
              .required("Required"),
          })}
          onSubmit={(values, formikHelpers) => {}}
        >
          {(formik) => (
            <div style={{ marginTop: "20px" }}>
              <Form>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ width: "60%" }}>
                    <TextFeild
                      label="Sound Description"
                      name="Explain"
                      type="text"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "10px",
                        backgroundColor: "#F5F5F5",
                      }}
                    />
                    <ErrorMessage name="Explain" />
                  </div>

                  <div style={{ width: "30%" }}>
                    <TextFeild
                      label="Quantity *"
                      name="Explain"
                      type="text"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "10px",
                        backgroundColor: "#F5F5F5",
                      }}
                    />
                    <ErrorMessage name="Explain" />
                  </div>
                </div>

                <Grid item md={6} xs={12} align="left">
                  <UploadImage
                    labelTitle="Upload your reference images for the event planner to have a better idea."
                    onSelectedFiles={decorationImageFiles}
                    onImageChangeHandler={decorationImgChangeHandler}
                    onImageDeleteHandler={decorationImgDeleteHandler}
                  />
                </Grid>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    );
}

export default Photobooth


