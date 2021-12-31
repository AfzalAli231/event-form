import React from 'react';

import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
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
import Box from '@mui/material/Box';
import MaterialTable from '@material-table/core';
import { ExportCsv } from '@material-table/exporters';
import { useNavigate } from "react-router";
//API Import
import { useGetvendorsQuery, useStatusVendorMutation } from '../../services/vendors';





export default function Vendors() {
    const navigate = useNavigate();

    // Get All Data with RTK Query
    const responseInfo = useGetvendorsQuery();

    //Initial State
    const [values, setValues] = React.useState({
        id: 0,
        is_deleted: 0,

    });

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

        {
            title: "Avatar", field: "userprofileimage",
            render: rowData => <img src={rowData.userprofileimage} style={{ width: 50, borderRadius: '50%' }} alt='' />
        },
        { title: "Name", field: "userfullname" },
        { title: "Email", field: "useremail" },
        { title: "Phone", field: "userphone" },
        {
            title: "Status", field: "userstatus", render: rowData => (
                <div onClick={() => UpdateStatus(rowData)}>
                    {rowData.userstatus === 1 ? (
                        <IconButton><CloseIcon style={{ color: "red" }} /></IconButton>
                    ) : (
                        <IconButton><CheckSharpIcon style={{ color: "green" }} /></IconButton>
                    )}
                </div>
            )
        },


    ];

    // Mutation of RT QUERY
    const [statusVendor] = useStatusVendorMutation();

    //Update Function
    const UpdateStatus = async (status) => {
        if (status.userstatus === 0) {
            status.userstatus = 1;
        } else {
            status.userstatus = 0;
        }
        await statusVendor(status);
        responseInfo.refetch();
    };


    //Delete Function
    const DeleteStatus = async (status) => {
        status.is_deleted = 1;
        await statusVendor(status);
        handleClose();
        responseInfo.refetch();
    };


    //Styling
    const useStyles = makeStyles((theme) => ({
        marginb: {
            marginBottom: "30px !important",
        },
    }));
    const classes = useStyles();


    return (
        <>
            <Box className={classes.marginb}>
                <Button href="/admin/addvendor" variant="contained" size="large" align="left">Add Vendor</Button>
            </Box>
            {responseInfo.isFetching ? '...Loading' : (
                <MaterialTable
                    title="Vendors List"
                    columns={columns}
                    data={responseInfo.data}

                    actions={[

                        rowData => ({
                            icon: () => <EditIcon />,
                            tooltip: 'Edit Vendor',
                            onClick: (event, rowData) => navigate("/admin/edituser/" + rowData.id),

                        }),
                        rowData => ({
                            icon: () => <DeleteIcon />,
                            tooltip: 'Delete Vendor',
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
                        exportMenu: [{
                            label: 'Export CSV',
                            exportFunc: (columns, datas) => ExportCsv(columns, responseInfo.data, 'myCsvFileName')
                        }],

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
                aria-describedby="alert-dialog-description"

            >
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