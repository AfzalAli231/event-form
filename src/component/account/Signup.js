import React, { createRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useSignupUserMutation } from '../../services/auth';

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

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
  userconfirmpassword: yup
    .string()
    .oneOf([yup.ref('userpassword'), null], 'Passwords must match')
    .required('Password is required'),
  agreement: yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
});

export default function SignUp() {
  const [signupUser, { data, isLoading, error, isError, isSuccess }] =
  useSignupUserMutation();
if (isSuccess) {
  console.log(data);
}
if (isError) {
  console.log(data);
}
  const formik = useFormik({
    initialValues: {
      userfullname: '',
      useremail: '',
      useremail: '',
      userpassword: '',
      userconfirmpassword: '',
      agreement: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    },
  });

  const [checked, setChecked] = React.useState(false);
  const [imageurl, _setImageurl] = React.useState();
  const inputFileRef = createRef(null);

  const handleChangeUser = (prop) => (event) => {
    setChecked(event.target.value);

    setValues({ ...values, [prop]: event.target.value });
  };



  const [values, setValues] = React.useState({
    useremail: '',
    userpassword: '',
    userfullname: '',
    userprofileimage: '',
    userrole: 0,
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleAgreementChange = (event) => {
    formik.handleChange(event);
    setChecked(event.target.checked);
  };



  const cleanup = () => {
    URL.revokeObjectURL(imageurl);
    inputFileRef.current.value = null;
  };

  const setImageurl = (newImage) => {
    if (imageurl) {
      cleanup();
    }
    _setImageurl(newImage);
  };


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  const uploadImageHandler = (prop) => async (event) => {

    const newImage = event.target?.files?.[0];
    console.log(URL.createObjectURL(newImage));
    if (newImage) {
      setImageurl(URL.createObjectURL(newImage));
      
    }
    const base64 = await convertBase64(newImage);
    const imgurl = newImage;
    setValues({ ...values, [prop]: base64 });

  };

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

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit();
    console.log(values.userprofileimage);
    console.log(formik);
    console.log(formik.errors);
    if (Object.keys(formik.errors).length === 0) {
      const dataform = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console

      signupUser(values);
      console.log("FORMIK ERRORS",{
        useremail: dataform.get('useremail'),
        userpassword: dataform.get('userpassword'),
        userfullname: dataform.get('userfullname'),
        userprofileimage: dataform.get('userprofileimage'),
        userrole: dataform.get('userrole'),
      });
    }
  };



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
            <Logo
              style={{
                width: 250,
              }}
              className={classes.margint} />
            <Typography component="h1" variant="h5" className={classes.margint}>
              Sign up
            </Typography>


           
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} className={classes.margint}>



              <FormControl component="fieldset">
                <FormLabel component="legend">Register as a</FormLabel>
                <RadioGroup row
                  aria-label="registeras"
                  defaultValue="0"
                  name="userrole"
                  onChange={handleChangeUser}

                >
                  <FormControlLabel value="0" control={<Radio />} label="User" />
                  <FormControlLabel value="1" control={<Radio />} label="Vendor" />
                </RadioGroup>
              </FormControl>

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


              {isSuccess ? (<> <Alert severity="error" className={classes.margint}>{data.message}</Alert></>) : null}


              <TextField
                margin="normal"

                fullWidth
                id="fullname"
                label="Full Name"
                name="userfullname"
                autoFocus
                variant="filled"
                value={values.email}
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
                name="userconfirmpassword"
                label="Confirm Password"
                variant="filled"
                type={values.showConfirmPassword ? 'text' : 'password'}

                id="userconfirmpassword"
                autoComplete="current-confirm-password"
                onChange={handleChange('userconfirmpassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.userconfirmpassword && Boolean(formik.errors.userconfirmpassword)}
                helperText={formik.touched.userconfirmpassword && formik.errors.userconfirmpassword}
              />



              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleAgreementChange} name="agreement" />
                }
                label={<><Typography variant="caption" display="block" gutterBottom>
                  I agree to&nbsp;
                  <Link href="#" variant="caption" align="center" >
                    {"User Agreement"}
                  </Link>
                  &nbsp;and&nbsp;
                  <Link href="#" variant="caption" align="center" >
                    {"Privacy Policy"}
                  </Link>
                </Typography>
                  <FormHelperText error>{formik.errors.agreement}</FormHelperText>
                </>
                }
              />




              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>


            </Box>
            Already have an account? <Link href="signin" variant="body1" align="center" >{"Log in"}</Link>
          </CardContent>
        </Card>
      </Box>

    </Container>

  );
}