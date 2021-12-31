import React from 'react';

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


import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export default function ChangePassword() {

    const [values, setValues] =React.useState({
      useremail: '',
      useroldpassword: '',
      usernewpassword: '',
      showOldPassword: false,
      showNewPassword: false,
       });      



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowOldPassword = () => {
    setValues({ ...values, showOldPassword: !values.showOldPassword });
  };

  const handleMouseDownOldPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };

  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
  
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
  margint:{
    marginTop:"30px !important",
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
              className={classes.margint}/>
          <Typography component="h1" variant="h5" className={classes.margint}>
          Change Password
          </Typography>
          
         


          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }} className={classes.margint}>
          



         
            <TextField
              margin="normal"
              required
              fullWidth
              name="useroldpassword"
              label="Password"
              variant="filled"
              type={values.showOldPassword ? 'text' : 'password'}
             value={values.useroldpassword}
              id="useroldpassword"
              autoComplete="current-password"
              onChange={handleChange('useroldpassword')}
              InputProps={{
              endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowOldPassword}
                      onMouseDown={handleMouseDownOldPassword}
                      edge="end"
                    >
                      {values.showOldPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
              ),
            }}
            />
             
           

<TextField
              margin="normal"
              required
              fullWidth
              name="usernewpassword"
              label="Confirm Password"
              variant="filled"
              type={values.showNewPassword ? 'text' : 'password'}
             value={values.usernewpassword}
              id="userconfirmpassword"
              autoComplete="current-confirm-password"
              onChange={handleChange('usernewpassword')}
              InputProps={{
              endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownNewPassword}
                      edge="end"
                    >
                      {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
              ),
            }}
            />

<FormHelperText id="standard-weight-helper-text"> 8 characters or longer. Combine upper and lowercase letters and numbers.</FormHelperText>
                
       

         
           

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
        
        
          </Box>
       
          </CardContent>
          </Card>
        </Box>
    
      </Container>
    
  );
}