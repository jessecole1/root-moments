import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="w-1/5 h-full border-r-4 fixed">
            <div class="flex flex-col items-center space-evenly h-1/2">
                <h1 class="text-lg font-bold mt-4 sm:text-3xl"><Link to="/">Root Moments</Link></h1>

                <Button sx={{width: "50%", margin: "auto", color: ""}} size="large" variant="text"><Link to="/order/photo-scanning">Order</Link></Button>
                <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text"><Link to="/services/photo-scanning">Services</Link></Button>
                <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text">Pricing</Button>
                <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text">About</Button>
            </div>
        </div>
    );
};

export default Navbar;
