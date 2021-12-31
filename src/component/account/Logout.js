import React from 'react';
import { useNavigate } from "react-router";
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

export default function Logout() {
    const navigate = useNavigate();
    localStorage.removeItem("token");

    return( 
    <Container component="main" maxWidth="xs">

        <Link href="#" variant="body2" onClick={navigate("/")}>
       Logout
        </Link>
</Container>);
 }