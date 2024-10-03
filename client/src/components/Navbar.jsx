import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class=" h-full">
            <div class="flex flex-row items-center justify-between">
                <h1 class="text-lg font-bold mt-4 sm:text-3xl w-72"><Link to="/">Root Moments</Link></h1>
                <div class="flex flex-row space-evenly w-1/4">
                    <Button sx={{width: "50%", margin: "auto", color: ""}} size="large" variant="text"><Link to="/order/photo-scanning">Order</Link></Button>
                    <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text"><Link to="/services/photo-scanning">Services</Link></Button>
                    <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text">Pricing</Button>
                    <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text">About</Button>
                </div>
                <div class="flex flex-row justify-evenly items-center w-72">
                    <Button sx={{width: "50%", margin: "auto", color: ""}} size="large" variant="outlined">Log In</Button>
                    <Button sx={{width: "70%", margin: "auto", color: ""}} size="large" variant="contained">Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
