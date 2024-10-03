import React, { useEffect } from 'react';
import "../embed.css";
import img from '../img/info@rootmoments.com.png';
import blueLines from '../icons/bluelines.svg';
import main from '../img/main.png';
import Button from '@mui/material/Button';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import dog from '../img/dog.jpeg';
import cat from '../img/cat.jpg';
import newBg from '../img/rootmoments-background.webp';
import svgBg from '../img/rootmoments-background.svg';
import NotionInspiredLayout from './NotionInspiredLayout';
import NotionInspiredLayoutTwo from './NotionInspiredLayoutTwo';
import ServiceOption from './ServiceOption';

import Navbar from './Navbar';

const Main = () => {

    useEffect(() => {
        console.log(window.scrollY);
    })

    return (
        <div class="flex flex-col h-screen">
            <Navbar />
            <div class=" w-full">
                <div style={{backgroundImage: `url(${newBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '700px', backgroundPosition: 'top'}}>
                    <div class="h-24"></div>
                    <div class="p-4  m-auto rounded-2xl" style={{}}>
                        <h1 class="rounded-2xl text-neutral-900 font-bold text-center h-min m-auto leading-none" style={{width: '70%', height: "80%", fontSize: "150px"}}><span class="text-[#0B192C]">RELIVE</span><br/><span class="text-[#FF650E]">PAST MOMENTS</span></h1>
                        <h1 class="rounded-2xl text-neutral-900 font-bold text-center h-min m-auto" style={{width: '75%', fontSize: "150px"}}></h1>
                    </div>
                    <p class="shadow-2xl text-[#1E3E62] bg-gray-100/70 p-4 rounded-2xl mt-4 w-1/3 m-auto font-bold text-2xl">
                        Rediscover your cherished moments with our service. We scan and enhance old photos, making them look new and accessible on any device.
                        <div class="m-auto text-center mt-8">
                            <Button sx={{width: "%", margin: "auto", color: ""}} size="large" variant="contained">Get Started</Button>
                        </div>
                    </p>
                </div>

                {/* <div class="h-[64rem] sm:h-[32rem] border-b-2 flex flex-row justify-evenly">
                    <div class="w-1/2 flex flex-row justify-center items-center">
                        <img class="rounded-xl shadow-2xl w-1/2 m-0 " src={main} />
                    </div>
                    <div class="w-1/2 flex flex-col">
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
                </div> */}
                
                <NotionInspiredLayout />
                <div class="flex flex-col justify-center" style={{backgroundImage: `url(${newBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '700px', backgroundPosition: 'center'}}>
                    <div class=" m-auto bg-gray-100/80 rounded-2xl w-2/3 h-2/3 shadow-2xl">
                        <div class="w-full p-8 flex flex-row justify-between mb-8">
                            <div>
                                <h2 class="mb-4 text-7xl font-bold">Your memories, <br/>flawlessly <span>digitized.</span></h2>
                                <p class=" w-3/4 font-bold text-gray-600 text-2xl">Digitize your old photos, share cherished memories with family and friends, and us restore every detail to perfection.</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <div class="w-1/2 mr-2 flex flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M699.56-479.78 127.35-707.91l26.52-71.87 623.48 247.39q48.39 19.78 67.11 49.47 18.72 29.69 18.72 77.14V-220q0 32.51-23.53 55.86-23.52 23.36-56.26 23.36H176.61q-32.51 0-55.86-23.36Q97.39-187.49 97.39-220v-180q0-32.74 23.36-56.26 23.35-23.52 55.86-23.52h522.95ZM783.39-220v-180H176.61v180h606.78Zm-406.78-60h346.78v-60H376.61v60Zm-109.83 0q12.83 0 21.33-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.67 21.32 8.68 8.5 21.5 8.5Zm-90.17 60v-180 180Z"/></svg>
                                    <h3 class="mb-3 text-2xl font-bold">Scanning</h3>
                                    <p class="text-gray-600 font-bold">Capture each photo, one-by-one using high-resolution scanners.</p>
                                </div>
                                <div class="w-1/2 mr-2 flex flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M620-151.09 453.78-317.3l54.31-54.87L620-260.26l233.91-233.91 54.31 54.87L620-151.09ZM854.7-573h-79.79v-201.91h-57.17v96.78H242.26v-96.78h-57.17v589.82H431v79.22H185.09q-33.93 0-56.58-22.38-22.64-22.37-22.64-56.84v-589.82q0-34.47 22.38-57.13 22.37-22.66 56.84-22.66h186.17q9.26-35.56 39.42-58.63 30.16-23.06 69.32-23.06 38.26 0 68.59 23.06 30.32 23.07 40.71 58.63h185.61q34.47 0 57.13 22.66 22.66 22.66 22.66 57.13V-573ZM480-781.13q17 0 28.5-11.78Q520-804.7 520-821.13q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5q0 16.43 11.5 28.22 11.5 11.78 28.5 11.78Z"/></svg>
                                    <h3 class="mb-3 text-2xl font-bold">Organizing</h3>
                                    <p class="text-gray-600 font-bold">Let us help you sort and organize your images.</p>
                                </div>
                                <div class="w-1/2 mr-2 flex flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M240.11-360.61q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm0 162q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm0-318q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-119.03-17q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm119.03-145q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-119.03 301q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm281 281q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm0-718q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm.03 136q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-.11 334q-23.63 0-40.51-16.88T344.61-402q0-23.63 16.88-40.51T402-459.39q23.63 0 40.51 16.88T459.39-402q0 23.63-16.88 40.51T402-344.61Zm0-156q-23.63 0-40.51-16.88T344.61-558q0-23.63 16.88-40.51T402-615.39q23.63 0 40.51 16.88T459.39-558q0 23.63-16.88 40.51T402-500.61Zm.11 302q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73ZM490-115.87v-79.22q115.3-5 195.11-87.03 79.8-82.04 79.8-197.83t-79.73-197.88Q605.44-759.91 490-764.91v-79.79q73.83 2 138.13 31.69 64.3 29.68 112.47 78.63 48.17 48.95 76.13 114.33 27.97 65.38 27.97 139.97 0 73.91-27.97 139.71-27.96 65.8-76.13 114.75-48.17 48.95-112.47 78.63-64.3 29.69-138.13 31.12ZM490-480Z"/></svg>
                                    <h3 class="mb-3 text-2xl font-bold">Enhancing</h3>
                                    <p class="text-gray-600 font-bold">Adjust color, contrast, and brightness for a polished look.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="pb-8 rounded-b
                        -2xl bg-gray-50">
                            <div class="flex-wrap pt-16 flex flex-row justify-evenly" >
                                <ServiceOption serviceHeader="Classic Preservation" photoTypes={["Loose Photos", "Pocket Albums"]} thumbDrive={"Included"} cloudStorage={"Unavailable"} organization={"Available"} enhancing={"Available"} />
                                <ServiceOption serviceHeader="Memory Keeper" photoTypes={["Loose Photos", "Pocket Albums"]} thumbDrive={"Included"} cloudStorage={"Included"} organization={"Available"} enhancing={"Available"} />
                                <ServiceOption serviceHeader="Premium Archival" photoTypes={["Loose Photos", "Pocket Albums", "Adhesive", "Memorabilia", "Photo backs"]} thumbDrive={"Included"} cloudStorage={"Included"} organization={"Available"} enhancing={"Available"} />
                            </div>
                        </div> */}
                        
                    </div>
                </div>
                <NotionInspiredLayoutTwo />
                    <div style={{backgroundImage: `url(${newBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '700px', backgroundPosition: 'bottom'}}>
                        
                    </div>
            </div>
        </div>
    );
};

export default Main;
