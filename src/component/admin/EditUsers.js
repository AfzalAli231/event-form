import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'


//Import RTK Query 
import { useUpdateUserMutation, useGetusersbyidQuery, useGetusersQuery } from '../../services/users';

import axios from 'axios';

//Yup Schema
const validationSchema = yup.object({
    userfullname: yup
        .string('Enter your full name')
        .required('Full Name is required'),
    useremail: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    userpassword: yup
        .string('Enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required('Password is required'),
    userphone: yup
        .string('Enter your Phone no')
        .required('Phone no is required'),
});

export default function EditUsers() {
    const { id } = useParams()
    const responseInfo = useGetusersQuery();
    const navigate = useNavigate();

    //Initial State
    const [imageurl, setImageurl] = React.useState();
    const [values, setValues] = React.useState({
        id: 0,
        useremail: '',
        userpassword: '',
        userfullname: '',
        userphone: '',
        userrole: 0,
        userprofileimage: '',
    });

    //GET RTK QUERY BY ID
    const { data, isSuccess } = useGetusersbyidQuery(id, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    });

    const isget = isSuccess;


    //USE EFFECT
    useEffect(() => {
        if (isget) {
            setValues({
                id: data.id,
                useremail: data.useremail,
                userpassword: data.userpassword,
                userfullname: data.userfullname,
                userphone: data.userphone,
                userrole: 0,
                userprofileimage: '',
            })
            formik.initialValues.userfullname = data.userfullname;
            formik.initialValues.useremail = data.useremail;
            formik.initialValues.userpassword = data.userpassword;
            formik.initialValues.userphone = data.userphone;
            setImageurl(data.userprofileimage);
        }


    }, [data])




    //FORMIK SCHEMA
    const formik = useFormik({
        initialValues: {
            userfullname: values.userfullname,
            useremail: values.useremail,
            userpassword: values.userpassword,
            userphone: values.userphone,

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

        },
    });



    //UPDATE RTK QUERY BY ID
    const [updateUser, { data: postuser }] = useUpdateUserMutation();




    //CHANGE IMAGE FUNCTION

    const uploadImageHandler = (prop) => async (event) => {

        const newImage = event.target?.files?.[0];
        const abc = URL.createObjectURL(newImage);
        if (newImage) {
            setImageurl(abc);
        }
        setValues({ ...values, [prop]: newImage });

    };






    //CHANAGE MAIN STATE

    const handleChange = (prop) => (event) => {
        formik.handleChange(event);
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    //SUBMIT DATA
    const handleSubmit = async (event) => {
        event.preventDefault();

        formik.handleSubmit(event);

        console.log("file", values.userprofileimage);
        console.log(formik);
        console.log(formik.errors);
        console.warn(Object.keys(formik.errors).length);
        if (Object.keys(formik.errors).length === 0) {
            const dataform = new FormData()
            console.warn(values);
            const response = await updateUser(values);
            console.warn(response.data.id);
            if (response.data.error === 0) {
                if (values.userprofileimage !== '') {
                    dataform.append('userprofileimage', values.userprofileimage);
                    dataform.append('useremail', response.data.id);
                    let url = "http://localhost:5000/user/upload";
                    await axios.post(url, dataform, {})
                        .then(res => { // then print response status
                            // console.warn(res.data.message);
                        })
                }
                setValues({
                    id: '',
                    useremail: '',
                    userpassword: '',
                    userfullname: '',
                    userphone: '',
                    userrole: 0,
                    userprofileimage: '',
                })
                responseInfo.refetch();
                navigate("/admin/users");
            }
        }

    };

    //Use Style 

    const useStyles = makeStyles((theme) => ({
        root: {
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            "& > *": {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: "none",
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        select: {
            width: "100%",
        },
        margint: {
            marginTop: "30px !important",
        },
    }));
    const classes = useStyles();


    return (

        <Container component="main" maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Card variant="outlined">
                    <CardContent >

                        <Typography component="h1" variant="h5" className={classes.margint}>
                            Edit User
                        </Typography>



                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} className={classes.margint}>


                            <div className={classes.root}>

                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    className={classes.input}
                                    name="userprofileimage"
                                    hidden
                                    onChange={uploadImageHandler('userprofileimage')}
                                    type="file"
                                />
                                {imageurl}
                                <label htmlFor="contained-button-file">
                                    <IconButton
                                        color='primary'
                                        aria-label='upload picture'
                                        component='span'>
                                        <Avatar
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            src={imageurl || "/static/img/avatars/default-profile.svg"}
                                            style={{
                                                margin: "10px",
                                                width: "60px",
                                                height: "60px",
                                            }}

                                        />
                                    </IconButton>
                                </label>
                            </div>





                            <TextField
                                margin="normal"

                                fullWidth
                                id="fullname"
                                label="Full Name"
                                name="userfullname"
                                autoFocus
                                variant="filled"
                                value={values.userfullname}
                                onChange={handleChange('userfullname')}

                                error={formik.touched.userfullname && Boolean(formik.errors.userfullname)}
                                helperText={formik.touched.userfullname && formik.errors.userfullname}
                            />
                            <TextField
                                margin="normal"

                                fullWidth
                                id="useremail"
                                label="Email Address"
                                name="useremail"
                                autoComplete="email"
                                autoFocus
                                disabled
                                variant="filled"
                                value={values.useremail}
                                onChange={handleChange('useremail')}
                                error={formik.touched.useremail && Boolean(formik.errors.useremail)}
                                helperText={formik.touched.useremail && formik.errors.useremail}
                            />
                            <TextField
                                margin="normal"

                                fullWidth
                                name="userpassword"
                                label="Password"
                                variant="filled"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.userpassword}
                                id="userpassword"
                                autoComplete="current-password"
                                onChange={handleChange('userpassword')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                error={formik.touched.userpassword && Boolean(formik.errors.userpassword)}
                                helperText={formik.touched.userpassword && formik.errors.userpassword}
                            />
                            <FormHelperText id="standard-weight-helper-text"> 8 characters or longer. Combine upper and lowercase letters and numbers.</FormHelperText>


                            <TextField
                                margin="normal"

                                fullWidth
                                id="userphone"
                                label="Phone No."
                                name="userphone"
                                autoFocus
                                variant="filled"
                                value={values.userphone}
                                onChange={handleChange('userphone')}

                                error={formik.touched.userphone && Boolean(formik.errors.userphone)}
                                helperText={formik.touched.userphone && formik.errors.userphone}
                            />








                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Edit User
                            </Button>


                        </Box>

                    </CardContent>
                </Card>
            </Box>

        </Container>

    );
}