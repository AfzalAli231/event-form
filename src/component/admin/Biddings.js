import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
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
import SportsKabaddiOutlinedIcon from '@mui/icons-material/SportsKabaddiOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import CameraRearOutlinedIcon from '@mui/icons-material/CameraRearOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MaterialTable from '@material-table/core';
import { useNavigate } from "react-router";
//API Import
import { useGetbiddingsQuery } from '../../services/biddings';



import  BiddingEventDetail  from './BiddingEventDetail';
import  GetServices  from './GetServices';


export default function Events() {
    const navigate = useNavigate();

    // Get All Data with RTK Query
    const responseInfo = useGetbiddingsQuery();

    //Initial State
    const [values, setValues] = React.useState({
        id: 0,
        is_deleted: 0,

    });



    const [open, setOpen] = React.useState(false);

    //Alert Function

    const handleClickOpen = (deletedata) => {
        setOpen(true);
        setValues({ ...values, id: deletedata.id });
    };

    const handleClose = () => {
        setOpen(false);
    };



    //Material Table Column
    const columns = [
        { title: "Event", field: "event.eventname" },
        { title: "User", field: "userdata.userfullname" },
        { title: "Vendor", field: "vendordata.userfullname" },
        { title: "Type", field: "bidtype" },
        { title: "Rate(Rs.)", field: "bidrate" },
        {
            title: "Wishlist", field: "bidfinalize", render: rowData => (
                <div>
                    {rowData.bidwishlist === 1 ? (
                      <FavoriteIcon style={{ color: "red" }} />
                    ) : (
                       <FavoriteIcon style={{ color: "gray" }} />
                    )}
                </div>
            )
        },
        {
            title: "Finalized", field: "bidfinalize", render: rowData => (
                <div>
                    {rowData.bidfinalize === 1 ? (
                      <CloseIcon style={{ color: "red" }} />
                    ) : (
                       <CheckSharpIcon style={{ color: "green" }} />
                    )}
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
                    title="Bidding List"
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
                                                    width: '33%',

                                                },
                                            }}
                                        >
                                       <TableContainer component={Paper}>
                                                        <Table >
                                                            <TableHead>
                                                                <TableRow><TableCell align="center" colSpan={2}><Typography variant="h6" display="block" gutterBottom style={{ fontWeight: "bold", fontSize: "14px", color: "#202631" }}>User</Typography></TableCell></TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Full Name</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.userdata.userfullname}</Typography></TableCell></TableRow>
                                                               
                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Email</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.userdata.useremail}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Phone</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.userdata.userphone}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Status</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>
                                                                <div>
                    {rowData.userdata.userstatus === 1 ? (
                      <CloseIcon style={{ color: "red" }} />
                    ) : (
                       <CheckSharpIcon style={{ color: "green" }} />
                    )}
                </div>
                                                               </Typography></TableCell></TableRow>

                                                          </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                    
                                                    <TableContainer component={Paper}>
                                                        <Table >
                                                            <TableHead>
                                                                <TableRow><TableCell align="center" colSpan={2}><Typography variant="h6" display="block" gutterBottom style={{ fontWeight: "bold", fontSize: "14px", color: "#202631" }}>Vendor</Typography></TableCell></TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Full Name</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.userfullname}</Typography></TableCell></TableRow>
                                                               
                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Email</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.useremail}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Phone</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.userphone}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Status</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>    <div>
                    {rowData.vendordata.userstatus === 1 ? (
                      <CloseIcon style={{ color: "red" }} />
                    ) : (
                       <CheckSharpIcon style={{ color: "green" }} />
                    )}
                </div></Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Vendor Services</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>
                                                                <GetServices vendordata={rowData.vendordata.vendorservices} /></Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>About </Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.vendoraboutus}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Company Name</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.vendorcompanyname}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Company Number</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.vendorcompanynumber}</Typography></TableCell></TableRow>


                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Company Location</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.vendorcompanylocation}</Typography></TableCell></TableRow>

                                                                <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Gallery</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{rowData.vendordata.vendorgalery}</Typography></TableCell></TableRow>

                                                          </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                    <><BiddingEventDetail eventdata={rowData.event}/></>
                                               
                                                  

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