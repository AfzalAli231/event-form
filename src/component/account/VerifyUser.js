import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import RefreshIcon from '@mui/icons-material/Refresh';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { makeStyles } from '@mui/styles';


import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export default function VerifyUser() {


    const [values, setValues] =React.useState({
        code1: '',
        code2: '',
        code3: '',
        code4: '',
    
      });



   
      
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
  };


  const useStyles = makeStyles((theme) => ({
    margint:{
      marginTop:"30px !important",
    },
    resize: {
      fontSize: "30px",
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
          Verify 
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
           Enter code to verify your email address

          </Typography>

          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
          
      
          <Grid container spacing={3} className={classes.margint}>
              <Grid item md={3} xs={3} align='center'>
                <TextField
                  required
                  id='filled-required'
                  label=''
                  name="code1"
                  fullWidth
                  onChange={handleChange('code1')}
                  placeholder=''
                  variant='filled'
                />
              </Grid>
              <Grid item md={3} xs={3} align='center'>
                <TextField
                  required
                  id='filled-required'
                  label=''
                  name="code2"
                  fullWidth
                  placeholder=''
                  variant='filled'
                  onChange={handleChange('code2')}
                
                />
              </Grid>
              <Grid item md={3} xs={3} align='center'>
                <TextField
                  required
                  id='filled-required'
                  label=''
                  name="code3"
                  fullWidth
                  placeholder=''
                  variant='filled'
                  onChange={handleChange('code3')}
                 
                />
              </Grid>
              <Grid item md={3} xs={3} align='center'>
                <TextField
                  required
                  id='filled-required'
                  label=''
                  name="code4"
                  fullWidth
                  placeholder=''
                  variant='filled'
                  onChange={handleChange('code4')}
               
                />
              </Grid>
              <Grid item md={12} xs={12} align='right'>
                <FormControlLabel
                  control={<RefreshIcon fontSize="small"/>}
                  label={
                    <Typography variant='caption' display='block' >
                      Resend Code
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              size='large'
              className={classes.margint}
            >
              Verify
            </Button>
           
          </Box>
          </CardContent>
          </Card>
        </Box>
    
      </Container>
    
  );
}