import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar/AppBar';
import { Link as RouterLink, useParams, NavLink, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';

import Button from '@mui/material/Button/Button';
import axios from 'axios';
import { Stack, Typography, colors } from '@mui/material';

export default function BasicTabs() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const token = `Bearer ${sessionStorage.getItem("token")}`

    const logged = sessionStorage.getItem("token");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, [location.pathname]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setLoading(true);
    };

    return (
        <>
            <AppBar position="relative" sx={{ backgroundColor: '#3E61EF' }}>
                <Container maxWidth="xl" >
                    <Toolbar sx={{ justifyContent: 'space-between', alignContent: 'end' }} >
                        <Typography variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                color: 'inherit',
                                textDecoration:'none'
                            }}>NFQ</Typography>


                        <Button href='/info' color='inherit'>Visit info</Button>

                        {logged ? (<Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: 1 }}>
                            <Button >
                                Atsijungti
                            </Button>
                        </Box>) : (<Box>

                            <Button size="large" href='/login' sx={{ color: 'white' }}> Login</Button>


                        </Box>)}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}