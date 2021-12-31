import React from 'react';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

export default function Home() {
   

    return (
        <Container component="main" maxWidth="xs">
            <Link href="/signin" variant="body2">
               SignIn
                </Link>
                <Link href="/logout" variant="body2">
               Logout
                </Link>
      </Container>
    );
    }