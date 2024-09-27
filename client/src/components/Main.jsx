import React, { useEffect } from 'react';
import "../embed.css";
import img from '../img/info@rootmoments.com.png';
import blueLines from '../icons/bluelines.svg';
import main from '../img/main.png';
import Button from '@mui/material/Button';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import dog from '../img/dog.jpeg';
import cat from '../img/cat.jpg';
import NotionInspiredLayout from './NotionInspiredLayout';

import Navbar from './Navbar';

const Main = () => {

    useEffect(() => {
        console.log(window.scrollY);
    })

    return (
        <div class="flex flex-row h-screen">
            <Navbar />
            <div style={{marginLeft: "20%"}} class=" w-full">
                <div class="h-[64rem] sm:h-[32rem] border-b-2 flex flex-row justify-evenly">
                    <div class="w-1/2 flex flex-row justify-center items-center">
                        <img class="rounded-xl shadow-2xl w-1/2 m-0 " src={main} />
                    </div>
                    <div class="w-1/2 flex flex-col">
                        {/* <div class="h-1/5 bg-[#3847EF] flex flex-col justify-center items-center">
                            <p class="ml-4 text-center text-white text-4xl font-bold">
                                DIGITAL MEMORIES TRANSFORMATION
                            </p>
                        </div> */}
                        <div style={{backgroundImage: `url(${blueLines})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right', backgroundAttachment: ''}} class=" flex flex-col justify-evenly h-full bg-violet-500210120">
                            <p style={{fontFamily: "fantasy"}} class="tracking-widest text-black ml-4 text-5xl w-2/3">
                                TRANSFORM YOUR PHOTOS, RELIVE MOMENTS
                            </p>
                            <p class="ml-4 text-black text-xl ">
                                A place to recapture your precious moments through digital recreations. Our service leverages advanced technology to restore and enhance your old photos, making them look brand new and accessible across all your devices. 
                                <div class="flex flex-row items-center justify-evenly mt-8 w-1/2 m-auto">
                                    <Button variant="contained">Get Started</Button>
                                    <Button variant="outlined">Learn More</Button>
                                </div>
                            </p>
                            
                        </div>
                    </div>
                </div>
                
                <NotionInspiredLayout />
            </div>
        </div>
    );
};

export default Main;
