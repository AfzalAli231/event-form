import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router";

// Mutation RTK Query
import { useStatusExtraMutation,useGetextrabyidQuery,useGetextraQuery } from '../../services/extra';


// Form Yup Schema
const validationSchema = yup.object({
    extratype: yup
        .string('Enter Type')
        .required('Type is required'),
        extradata: yup
        .string('Enter your Data')
        .required('Data is required'),
});





export default function EditExtra() {
    const { id } = useParams()
    const responseInfo = useGetextraQuery();
        //Initial State

        const [values, setValues] = React.useState({
            extratype: '',
            extradata: '',
        });

    //GET RTK QUERY BY ID
    const { data, isSuccess } = useGetextrabyidQuery(id, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    });

  

    //USE EFFECT
    useEffect(() => {
        if (isSuccess) {
          
            setValues({
                id: data.id,
                extratype: data.extratype,
                extradata: data.extradata,
            })
            formik.initialValues.extratype = data.extratype;
            formik.initialValues.extradata = data.extradata;
        }


    }, [data])


    const navigate = useNavigate();

    //FORMIK SCHEMA
    const formik = useFormik({
        initialValues: {
            extratype: '',
            extradata: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

        },
    });




    //CHANAGE MAIN STATE

    const handleChange = (prop) => (event) => {
        formik.handleChange(event);
        setValues({ ...values, [prop]: event.target.value });
    };

       //UPDATE RTK QUERY BY ID
       const [statusExtra, { data: postuser }] = useStatusExtraMutation();



    //SUBMIT DATA
    const handleSubmit = async (event) => {
        event.preventDefault();
        formik.handleSubmit();
        if (Object.keys(formik.errors).length === 0 && formik.dirty === true) {
        const response = await statusExtra(values);
        responseInfo.refetch();
        navigate("/admin/extra");
       
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
        marginl:{
            marginLeft: "0px !important",
        }
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
                            Edit Extra
                        </Typography>



                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} className={classes.margint}>
                       
                         <FormControl variant="filled" sx={{ m: 1, minWidth: '100%' }} className={classes.marginl}>
                                <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    name="extratype"
                                    value={values.extratype}
                                    onChange={handleChange('extratype')}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Event Type">Event Type</MenuItem>
                                    <MenuItem value="Venue Services">Venue Services</MenuItem>
                                    <MenuItem value="Venue Price Range">Venue Price Range</MenuItem>
                                    <MenuItem value="Decoration Event Segregate">Decoration Event Segregate</MenuItem>
                                    <MenuItem value="Decoration Classifies">Decoration Classifies</MenuItem>
                                    <MenuItem value="Decoration Generator">Decoration Generator</MenuItem>
                                    <MenuItem value="Decoration Stage">Decoration Stage</MenuItem>
                                    <MenuItem value="Floral Services">Floral Services</MenuItem>
                                    <MenuItem value="Floral Kind of Flowers">Floral Kind of Flowers</MenuItem>
                                    <MenuItem value="Floral Price Range">Floral Price Range</MenuItem>
                                    <MenuItem value="Dance Floor Type">Dance Floor Type</MenuItem>
                                    <MenuItem value="Dance Floor Size">Dance Floor Size</MenuItem>
                                    <MenuItem value="Dance Floor Circular Trussing">Dance Floor Circular Trussing</MenuItem>
                                 
                                </Select>
                                <FormHelperText error>{formik.errors.extratype}</FormHelperText>
                            </FormControl>


                            <TextField
                                margin="normal"
                                fullWidth
                                id="fullname"
                                label="Data"
                                name="extradata"
                                autoFocus
                                variant="filled"
                                value={values.extradata}
                                onChange={handleChange('extradata')}
                                error={formik.touched.extradata && Boolean(formik.errors.extradata)}
                                helperText={formik.touched.extradata && formik.errors.extradata}
                            />
                         

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Update Extra Setting
                            </Button>


                        </Box>

                    </CardContent>
                </Card>
            </Box>

        </Container>

    );
}