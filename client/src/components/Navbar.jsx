import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import logo from '../icons/rootmoments_logo.png';
import menu from '../icons/hamburger_menu.png';


const Navbar = () => {

    // Handle width change for hamburger menu display
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle Menu List Display when Clicking
    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = (val) => {
        if (val === false && menuClicked === false) {
            return;
        }
        else {
            setMenuClicked(!menuClicked);
        }
    }

    return (
        <div class=" h-full">
            <div class="h-24 flex flex-row items-center justify-between">
                <h1 class="text-lg font-bold mt-4 sm:text-3xl w-72"><Link to="/"><img className="h-[96px] ml-4" src={logo} /></Link></h1>
                <div className={`flex flex-row space-evenly w-[540px] ${windowWidth < 1024? "hidden" : ""}`}>
                    <Button sx={{width: "50%", margin: "auto", color: ""}} size="large" variant="text"><Link to="/order/photo-scanning">Order</Link></Button>
                    <Button sx={{width: "50%", margin: "auto", color: ""}} size="large" variant="text"><Link to="/facts">Facts</Link></Button>
                    <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text"><Link to="/pricing">Pricing</Link></Button>
                    <Button sx={{width: "50%", margin: "auto"}} size="large" variant="text"><Link to="/solutions">Solutions</Link></Button>
                    <Button sx={{width: "100%", margin: "auto"}} size="large" variant="text"><Link to="/how-it-works">How It Works</Link></Button>
                </div>
                <div class={`flex flex-row justify-evenly items-center w-72 ${windowWidth < 1024? "hidden" : ""}`}>
                    <Button sx={{width: "40%", margin: "auto", color: ""}} size="large" variant="outlined">Log In</Button>
                    <Button sx={{width: "50%", margin: "auto", color: ""}} size="large" variant="contained">Get Started</Button>
                </div>
                <div onMouseLeave={() => handleMenuClick(false)} onClick={() => handleMenuClick()} className={`${windowWidth < 1024 ? "block" : "hidden"}`}>
                    <img className="mr-8 cursor-pointer w-[50px]" src={menu} />
                    <div className={`flex flex-col absolute menu_list ${menuClicked === true ? "block" : "hidden"}`} style={{right: "10px"}}>
                        <Button sx={{paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white", width: "150px", margin: "auto", color: "blue", borderBottom: "1px solid black", borderRadius: "0px"}} size="large" variant="text"><Link to="/order/photo-scanning">Order</Link></Button>
                        <Button sx={{paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white", width: "150px", margin: "auto", color: "blue", borderBottom: "1px solid black", borderRadius: "0px"}} size="large" variant="text"><Link to="/services/photo-scanning">Services</Link></Button>
                        <Button sx={{paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white", width: "150px", margin: "auto", color: "blue", borderBottom: "1px solid black", borderRadius: "0px"}} size="large" variant="text">Pricing</Button>
                        <Button sx={{paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white", width: "150px", margin: "auto", color: "blue", borderBottom: "1px solid black", borderRadius: "0px"}} size="large" variant="text">About</Button>
                        <Button sx={{paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white", width: "150px", margin: "auto", color: "blue", borderBottom: "1px solid black", borderRadius: "0px"}} size="large" variant="text">Log In</Button>
                        <Button sx={{paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white", width: "150px", margin: "auto", color: "blue", borderBottom: "1px solid black", borderRadius: "0px"}} size="large" variant="text">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
