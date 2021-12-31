import React from 'react';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
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

export default function BiddingEventDetail({ eventdata }) {
   
    return (
      <TableContainer component={Paper}>
      <Table >
          <TableHead>
              <TableRow><TableCell align="center" colSpan={2}><Typography variant="h6" display="block" gutterBottom style={{ fontWeight: "bold", fontSize: "14px", color: "#202631" }}>Event</Typography></TableCell></TableRow>
          </TableHead>
          <TableBody>
              <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Event Name</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{eventdata.eventname}</Typography></TableCell></TableRow>

              <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Event Type</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{eventdata.extra.extradata}</Typography></TableCell></TableRow>

              <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Event Date</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{eventdata.eventdate}</Typography></TableCell></TableRow>



              <TableRow><TableCell> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }}>Event Guest</Typography></TableCell><TableCell><Typography  gutterBottom component="div" style={{ fontSize: "11px" }}>{eventdata.eventguest}</Typography></TableCell></TableRow>
              <TableRow><TableCell align="center" colSpan={2}> <Typography  gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "11px" }} > Services</Typography></TableCell></TableRow>
              <TableRow><TableCell  align="center" colSpan={2}> 
              <div>
                    {eventdata.evenue === 1 ? (
                        <Tooltip title="Venue" placement="top"><FestivalOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.efood === 1 ? (
                        <Tooltip title="Food" placement="top"><FastfoodOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.edecoration === 1 ? (
                        <Tooltip title="Decoration" placement="top"><DeckOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.photographypackageid === 1 ? (
                        <Tooltip title="Photography" placement="top"><CameraOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.videographypackageid === 1 ? (
                        <Tooltip title="Videography" placement="top"><VideoCameraFrontOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.efloral === 1 ? (
                        <Tooltip title="Floral" placement="top"><FilterVintageOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonsdancefloor === 1 ? (
                        <Tooltip title="Dance Floor" placement="top"><SportsKabaddiOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonsdisplay === 1 ? (
                        <Tooltip title="Display" placement="top"><TvOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonssound === 1 ? (
                        <Tooltip title="Sound" placement="top"><VolumeUpOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonsphotobooth === 1 ? (
                        <Tooltip title="Photobooth" placement="top"><CameraRearOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonsushers === 1 ? (
                        <Tooltip title="Ushers" placement="top"><WcOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonssinger === 1 ? (
                        <Tooltip title="Singer" placement="top"><LibraryMusicOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonssecurity === 1 ? (
                        <Tooltip title="Security" placement="top"><LocalPoliceOutlinedIcon /></Tooltip>
                    ) : ""}
                    {eventdata.eaddonsgenerator === 1 ? (
                        <Tooltip title="Generator" placement="top"><ElectricalServicesOutlinedIcon /></Tooltip>
                    ) : ""}


                </div>
                </TableCell></TableRow>

        </TableBody>
      </Table>
  </TableContainer>
    );
}

