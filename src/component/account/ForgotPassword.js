import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { makeStyles } from '@mui/styles';


import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export default function ForgotPassword() {


    const [values, setValues] =React.useState({
        email: '',
       });



   
      
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    console.log({
        email: data.get('email'),
      
      });
  };


  const useStyles = makeStyles((theme) => ({
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
         <div className="center" style={{ justifyContent: "center", display: "flex" }}>
      
          <Avatar sx={{ m: 1}}  >
            <LockOutlinedIcon />
          </Avatar>
          </div>
          <Typography component="h1" variant="h5">
          Reset your password
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
          Enter your email address so we can reset your password.

          </Typography>

          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
          
      
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
              value={values.email}
              onChange={handleChange('email')}
            
            />
                    
      
          
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Submit
            </Button>
           
          </Box>
          </CardContent>
          </Card>
        </Box>
    
      </Container>
    
  );
}