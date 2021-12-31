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
import Box from '@mui/material/Box';
import MaterialTable from '@material-table/core';
import { useNavigate } from "react-router";
//API Import
import { useGetpackageQuery } from '../../services/package';





export default function Packages() {
    const navigate = useNavigate();

    // Get All Data with RTK Query
    const responseInfo = useGetpackageQuery();

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
        { title: "ID", field: "id" },
        { title: "Type", field: "servicetype" },
        { title: "Event Type", field: "extra.extradata" },
        { title: "Package Name", field: "packagename" },
        
    ];

    // Mutation of RT QUERY
    const [statusPackage] = useStatusPackageMutation();


    //Delete Function
    const DeleteStatus = async (status) => {
        status.is_deleted = 1;
        await statusExtra(status);
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
                <Button href="/admin/addextra" variant="contained" size="large" align="left">Add Extra Setting</Button>
            </Box>
            {responseInfo.isFetching ? '...Loading' : (
                <MaterialTable
                    title="Extra Setting List"
                    columns={columns}
                    data={responseInfo.data}

                    actions={[

                        rowData => ({
                            icon: () => <EditIcon />,
                            tooltip: 'Edit Extra',
                            onClick: (event, rowData) => navigate("/admin/editextra/" + rowData.id),

                        }),
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