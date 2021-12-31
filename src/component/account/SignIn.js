import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';



import { useSigninUserMutation } from '../../services/auth';

import { ReactComponent as Logo } from "../../assets/images/logo.svg";



const validationSchema = yup.object({
  useremail: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  userpassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function SignIn() {
  const navigate = useNavigate();
  const [signinUser, { data, isLoading, error, isError, isSuccess }] =
    useSigninUserMutation();
  if (isSuccess) {
    localStorage.setItem('token', data.token);
    //console.log(data.token);
    navigate("/");
  }
  if (isError) {
    console.log(data);
  }
  const formik = useFormik({
    initialValues: {
      useremail: '',
      userpassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    },
  });
  const [values, setValues] = React.useState({
    useremail: '',
    userpassword: '',
    showPassword: false,
  });


  const [checked, setChecked] = React.useState(false);
  //console.log(checked);
  const handleChangeRemember = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {

    if (localStorage.getItem('user') !== "") {
      //  console.log("as");
      //   console.log(localStorage.getItem('rememberMe'));
      // console.log(localStorage.getItem('user'));
      const emailget = localStorage.getItem('user');
      // console.log(emailget);
      setValues({ ...values, useremail: emailget });
      setChecked(localStorage.getItem('rememberMe'));
    }

  }, []);



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

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit();
    if (formik.dirty === true) {
      const dataform = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      signinUser(values);
      const email = dataform.get('useremail');
      localStorage.setItem('rememberMe', checked);
      localStorage.setItem('user', checked ? email : '');

      /* console.log({
           useremail: data.get('useremail'),
           userpassword: data.get('userpassword'),
           rememberMe: checked,
         });*/
    }
  };


  const useStyles = makeStyles((theme) => ({
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
            <div className="center" style={{ justifyContent: "center", display: "flex" }}>

              <Avatar sx={{ m: 1 }}  >
                <LockOutlinedIcon />
              </Avatar>
            </div>
            <Typography component="h1" variant="h5">
              Welcome Back
            </Typography>
            {isSuccess ? (<> <Alert severity="error" className={classes.margint}>{data.message}</Alert></>) : null}

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>


              <TextField
                margin="normal"

                fullWidth
                id="useremail"
                label="Email Address"
                name="useremail"
                autoComplete="email"
                autoFocus
                variant="filled"
                value={values.email}
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
                        {formik.values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.userpassword && Boolean(formik.errors.userpassword)}
                helperText={formik.touched.userpassword && formik.errors.userpassword}
              />
              <div className='rm'>
                <Checkbox name="rememberMe" color="primary" size='small' checked={checked ? true : false} onChange={handleChangeRemember} /> Remember me

              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs className="ml">
                  <Link href="forgotpassword" variant="body2" >
                    {"Forgot password?"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </CardContent>
        </Card>
      </Box>

    </Container>

  );
}