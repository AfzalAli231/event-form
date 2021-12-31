import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SportsKabaddiOutlinedIcon from '@mui/icons-material/SportsKabaddiOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import CameraRearOutlinedIcon from '@mui/icons-material/CameraRearOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';




import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import MaterialTable from '@material-table/core';
import { useNavigate } from "react-router";
//API Import
import { useGeteventsQuery } from '../../services/events';
import { Abc } from '@mui/icons-material';

import  DecorationCom  from './DecorationCom';





export default function Events() {
    const navigate = useNavigate();

    // Get All Data with RTK Query
    const responseInfo = useGeteventsQuery();

    //Initial State
    const [values, setValues] = React.useState({
        id: 0,
        is_deleted: 0,

    });


    const [sample, setSample] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    //Alert Function

    const handleClickOpen = (deletedata) => {
        setOpen(true);
        // console.log(deletedata);
        setValues({ ...values, id: deletedata.id });
    };

    const handleClose = () => {
        setOpen(false);
    };



    //Material Table Column
    const columns = [

        { title: "User", field: "user.userfullname" },
        { title: "Name", field: "eventname" },
        { title: " Type", field: "extra.extradata" },
        { title: "Date", field: "eventdate", type: "date", dateSetting: { format: 'DD/MM/YY' } },
        {
            title: "Services", width: "40%", render: rowData => (
                <div>
                    {rowData.evenue === 1 ? (
                        <Tooltip title="Venue" placement="top"><FestivalOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.efood === 1 ? (
                        <Tooltip title="Food" placement="top"><FastfoodOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.edecoration === 1 ? (
                        <Tooltip title="Decoration" placement="top"><DeckOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.photographypackageid === 1 ? (
                        <Tooltip title="Photography" placement="top"><CameraOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.videographypackageid === 1 ? (
                        <Tooltip title="Videography" placement="top"><VideoCameraFrontOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.efloral === 1 ? (
                        <Tooltip title="Floral" placement="top"><FilterVintageOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonsdancefloor === 1 ? (
                        <Tooltip title="Dance Floor" placement="top"><SportsKabaddiOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonsdisplay === 1 ? (
                        <Tooltip title="Display" placement="top"><TvOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonssound === 1 ? (
                        <Tooltip title="Sound" placement="top"><VolumeUpOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonsphotobooth === 1 ? (
                        <Tooltip title="Photobooth" placement="top"><CameraRearOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonsushers === 1 ? (
                        <Tooltip title="Ushers" placement="top"><WcOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonssinger === 1 ? (
                        <Tooltip title="Singer" placement="top"><LibraryMusicOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonssecurity === 1 ? (
                        <Tooltip title="Security" placement="top"><LocalPoliceOutlinedIcon /></Tooltip>
                    ) : ""}
                    {rowData.eaddonsgenerator === 1 ? (
                        <Tooltip title="Generator" placement="top"><ElectricalServicesOutlinedIcon /></Tooltip>
                    ) : ""}


                </div>
            )
        },

    ];




    // Mutation of RT QUERY
    // const [statusEvents] = useStatusEventsMutation();


    //Delete Function
    const DeleteStatus = async (status) => {
        status.is_deleted = 1;
        // await statusExtra(status);
        // handleClose();
        responseInfo.refetch();
    };


    //Styling
    const useStyles = makeStyles((theme) => ({
        marginb: {
            marginBottom: "30px !important",
        },
        tablee:{
            backgroundColor:"#CCC",
        }
    }));
    const classes = useStyles();


    return (
        <>

            {responseInfo.isFetching ? '...Loading' : (
                <MaterialTable
                    title="Events List"
                    columns={columns}
                    data={responseInfo.data}
                    detailPanel={[
                        {

                           
                            render: ({ rowData }) => {
                                return (
                                    <div className={classes.tablee}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                '& > :not(style)': {
                                                    m: 1,
                                                    width: '50%',

                                                },
                                            }}
                                        >
                                            {rowData.edecoration === 1 ? (
                                                <>
                                                    <TableContainer component={Paper}>
                                                        <Table >
                                                            <TableHead>
                                                                <TableRow><TableCell align="center" colSpan={2}><Typography variant="h6" display="block" gutterBottom style={{ fontWeight: "bold", fontSize: "14px", color: "#202631" }}><DeckOutlinedIcon />Decoration</Typography></TableCell></TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Theme Event</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.ThemeEvent.extradata}</Typography></TableCell></TableRow>
                                                               
                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Your Theme</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.yourtheme}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Color Scheme</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.colorscheme}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Event Segregated</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.EventSegregated.extradata}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Decoration Classifies</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.DecorationClassifies.extradata}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Decoration Generator</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.DecorationGenerator.extradata}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Decoration Stage</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.DecorationStage.extradata}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Decoration Package</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.eventdecoration.DecorationPackage.packagename}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell  align="center" colSpan={2}> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Decoration</Typography></TableCell></TableRow>
                                                                <TableRow><TableCell  align="center" colSpan={2}> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>
                                                               <><DecorationCom hello={rowData.eventdecoration.createyourowndecoration}/></>
      
                                                                
                                                                </Typography></TableCell></TableRow>
                                                                

                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </>
                                            ) : ""}

                                            {rowData.edecoration === 1 ? (
                                                <>
                                                    <Paper elevation={0} >
                                                        <Card >
                                                            <CardContent>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={2}><Typography variant="button" display="block" gutterBottom style={{ fontWeight: "bold", fontSize: "16px", color: "red" }}>Theme</Typography></Grid>
                                                                    <Grid item xs={10}><Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "16px" }}>{rowData.eventdecoration.ThemeEvent.extradata}</Typography></Grid>

                                                                </Grid>

                                                                Theme:{rowData.eventdecoration.ThemeEvent.extradata}
                                                                Event Segregated {rowData.eventdecoration.EventSegregated.extradata}
                                                            </CardContent>

                                                        </Card>
                                                    </Paper>
                                                </>
                                            ) : ""}

                                        </Box>
                                    </div>
                                )
                            },
                        },

                    ]}




                    actions={[
                        rowData => ({
                            icon: () => <DeleteIcon />,
                            tooltip: 'Delete Extra',
                            onClick: (event, rowData) => handleClickOpen(rowData),

                        })

                    ]}

                    options={{
                        actionsColumnIndex: -1,
                        columnsButton: true,
                        sorting: true,
                        search: true,
                        searchFieldAlignment: "left",
                        searchAutoFocus: true,
                        searchFieldVariant: "standard",
                        filtering: true,
                        pageSize: 10,
                        rowStyle: (data, index) =>
                            index % 2 === 0 ? { background: "#f5f5f5" } : null,
                        headerStyle: {
                            fontStyle: "bold",
                        },

                        emptyRowsWhenPaging: false,   // To avoid of having empty rows
                        pageSizeOptions: [10, 20, 50],    // rows selection options
                    }} />
            )}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h5" gutterBottom component="div" align='center'>
                        <WarningIcon sx={{ fontSize: 40 }} style={{ color: "red" }} />
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" align='center'>
                        Alert
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you want to delete ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="success" onClick={handleClose} >No</Button>
                    <Button variant="contained" color="error" onClick={() => DeleteStatus(values)}>Yes</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}