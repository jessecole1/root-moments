import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

import check from '../icons/check.svg';
import box from '../icons/box.svg';
import bgClouds1 from '../img/bgClouds1.png';

import './style.css';

import Navbar from './Navbar';
import Practice from './practice';

const Order = () => {

    const inHomeRef = useRef(null);
    const pickUpRef = useRef(null);
    const dropOffRef = useRef(null);

    const [serviceType, setServiceType] = useState("");
    const [clicked, setClicked] = useState("");

    // Service Type Handling and Switching
    const handleSelectServiceType = (val) => {
        if (clicked !== val) {
            if (clicked === "") {
                setClicked(val);
            } else if (clicked !== "") {
                setClicked(val);
            } else {
                setClicked("");
            }
        } else {
            setClicked("");
        }
    }

    

    return (
        <div>
            <Navbar />
            <div style={{marginLeft: "20%", width: "full", height: "auto"}} class="m-auto" >
                <div id='bg1' style={{backgroundImage: `url(${bgClouds1})`}} className={"parallax bg-slate-800"}>
                    <br></br>
                    <div class="rounded-xl bg-slate-100 sm:w-3/4 h-full m-auto w-full" style={{ boxShadow: "2px 4px 8px 0px", fontFamily: "arial" }}>
                        <form class="w-3/4 p-4 flex flex-col m-auto h-full" >
                            <span class="flex flex-col justify-evenly h-72">
                                <label class="text-xl text-[#4C2197] font-bold">Name</label>
                                <span class="flex flex-row w-3/4 justify-start">
                                    <input class="font-serif flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="First"/>
                                    <input class="font-serif flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Last"/>
                                </span>
                                <label class="text-xl text-[#4C2197] font-bold">Email</label>
                                <input class="font-serif flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" />
                                <label class="text-xl text-[#4C2197] font-bold">Phone Number</label>
                                    {/* <td><input class="rounded-lg p-1 border w-96" type="tel" pattern="[0-9]" /></td> */}
                                <PhoneInput class="" country={"us"} />
                                
                            </span>
                            <span class=''>
                                <label class="text-xl text-[#4C2197] mt-12 font-bold">Number of Photographs</label>
                                <input class="font-serif flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="number" placeholder="Approximate or Exact" />
                                <p class="text-[#4C2197] text-xl mb-4 mt-4 font-bold">Service Type</p>
                                <span className={`${clicked === 'inHome' ? "widthOpen" : "widthClose"} cursor-pointer flex flex-col border`}
                                    style={{maxWidth: clicked === 'inHome' ? `100%` : "20%"}}
                                    >
                                    <span onClick={() => {
                                    handleSelectServiceType('inHome');
                                    }} className={` hover:bg-slate-300 hover:contrast-125 p-4 cursor-pointer ${clicked === 'inHome' ? "bg-slate-300 contrast-125" : ""} flex flex-row justify-between`}>
                                        <label className={`cursor-pointer text-xl font-bold`}>In Home</label>
                                        <img className={`w-4 ${clicked === 'inHome' ? "opacity-100" : "opacity-60"}`} src={clicked === 'inHome' ? check : box} />
                                    </span>
                                    {/* <input  type="radio" name="service-type" value="inHome" /> */}
                                        <span class="flex flex-col justify-evenly" className={`${clicked === 'inHome' ? "heightOpen" : "heightClose"}`} ref={inHomeRef}>
                                            <span class="h-64 flex flex-col justify-evenly">
                                                <label class="ml-4 mr-4">Address</label>
                                                <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Street Number & Name"/>
                                                <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Floor, unit,..."/>
                                                <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="City" />
                                                <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="number" placeholder="Zip" />
                                            </span>
                                            <br></br>
                                            <label>Preferred Day</label>
                                            <DateTimePicker />
                                            <span class="w-full flex flex-row justify-evenly mt-4 mb-4">
                                                <span class="flex flex-col justify-evenly h-32">
                                                    <span class="flex flex-col items-center">
                                                        <label>Organization</label>
                                                        <input type="checkbox" checked disabled />
                                                    </span>
                                                    <span class="flex flex-col justify-evenly items-center">
                                                        <label>Editing</label>
                                                        <input type="checkbox" />
                                                    </span>
                                                </span>
                                                <span class="flex flex-col justify-evenly h-32">
                                                    <span class="flex flex-col items-center">
                                                        <label>Thumb Drive</label>
                                                        <input type="checkbox" checked disabled />
                                                    </span>
                                                    <span class="flex flex-col justify-evenly items-center">
                                                        <label>Upload to Cloud</label>
                                                        <input type="checkbox" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                <span 
                                className={`${clicked === 'pickUp' ? "widthOpen" : "widthClose"} cursor-pointer flex flex-col border`}
                                style={{maxWidth: clicked === 'pickUp' ? `100%` : "20%"}}
                                >
                                    <span onClick={() => {
                                    handleSelectServiceType("pickUp");
                                }} 
                                 className={`hover:bg-slate-300 hover:contrast-125 p-4 cursor-pointer ${clicked === 'pickUp' ? "bg-slate-300 contrast-125" : ""} flex flex-row justify-between`}>
                                        <label className={`cursor-pointer text-xl font-bold`}>Pick Up</label>
                                        <img className={`w-4 ${clicked === 'pickUp' ? "opacity-100" : "opacity-60"}`} src={clicked === 'pickUp' ? check : box} />
                                    </span>
                                    <span id="pickUpId" className={`${clicked === 'pickUp' ? "heightOpen" : "heightClose"} flex flex-col justify-evenly`} ref={pickUpRef}>
                                        <span class="h-64 flex flex-col justify-evenly">
                                            <label>Address</label>
                                            <input class="rounded-lg p-1 border w-full" type="text" placeholder="Street Number & Name"/>
                                            <input class="rounded-lg p-1 border w-full" type="text" placeholder="City" />
                                            <input class="rounded-lg p-1 border w-full" type="text" placeholder="Floor, unit,..."/>
                                            <input class="rounded-lg p-1 border w-full" type="number" placeholder="Zip" />
                                        </span>
                                        <label>Preferred Day for Pick Up</label>
                                                <DateTimePicker />
                                        <span class="w-full">
                                            <label>Organization</label>
                                            <input type="checkbox" />
                                            <label>Editing</label>
                                            <input type="checkbox" />
                                            <label>Thumb Drive</label>
                                            <input type="checkbox" checked disabled />
                                            <label>Upload to Cloud</label>
                                            <input type="checkbox" />
                                        </span>
                                    </span>
                                    {/* <input type="radio" name="service-type" value="pickUp" /> */}
                                </span>
                                <span 
                                    className={`${clicked === 'dropOff' ? "widthOpen" : "widthClose"} cursor-pointer flex flex-col border mb-8`}
                                    style={{maxWidth: clicked === 'dropOff' ? `100%` : "20%"}}
                                    >
                                    <span onClick={() => {
                                    handleSelectServiceType("dropOff");
                                    }}  className={`hover:bg-slate-300 hover:contrast-125 p-4 cursor-pointer ${clicked === 'dropOff' ? "bg-slate-300 contrast-125" : ""} flex flex-row justify-between`}>
                                        <label className={`cursor-pointer text-xl font-bold`}>Drop Off</label>
                                        <img className={`${clicked === 'dropOff' ? "opacity-100" : "opacity-60"} w-4`} src={clicked === 'dropOff' ? check : box} />
                                    </span>
                                    <span className={`${clicked === 'dropOff' ? "heightOpen" : "heightClose"} flex flex-col justify-evenly`} ref={dropOffRef}>
                                        <label>Preferred Day to Drop Off</label>
                                        <DateTimePicker />
                                        <span class="w-full">
                                            <label>Organization</label>
                                            <input type="checkbox" />
                                            <label>Editing</label>
                                            <input type="checkbox" />
                                            <label>Thumb Drive</label>
                                            <input type="checkbox" checked disabled />
                                            <label>Upload to Cloud</label>
                                            <input type="checkbox" />
                                        </span>
                                    </span>
                                    {/* <input type="radio" name="service-type" value="dropOff" /> */}
                                </span>
                            </span>
                            {/* IN HOME */}
                            <span>
                                <label class="text-xl text-[#4C2197] font-bold">Anything You'd Like to Share</label>
                                <textarea style={{resize: 'none'}} class="rounded-lg p-1 border m-auto w-full h-40" />
                                <Button variant="contained">Request Service</Button>
                            </span>
                        </form>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default Order;
