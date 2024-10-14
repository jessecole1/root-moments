import React, { useEffect, useState } from 'react';
import "../embed.css";
import "./style.css";
import Button from '@mui/material/Button';

import newBg from '../img/rootmoments-background.webp';
// import loosePhotos from '../icons/loose_photographs.svg';

import NotionInspiredLayout from './NotionInspiredLayout';
import NotionInspiredLayoutTwo from './NotionInspiredLayoutTwo';
import ServiceOption from './ServiceOption';
import Footer from './Footer';
import Navbar from './Navbar';
import AdminDashboard from './AdminDashboard';

const Main = () => {

    const [hover, setHover] = useState("");

    const handleHover = (val) => {
        setHover(val);
    }

    return (
        <div style={{ fontFamily: "IBM Plex Mono" }} class="flex flex-col h-screen">
            <Navbar />
            <div class=" w-full">
                <div style={{backgroundImage: `url(${newBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '700px', backgroundPosition: 'top'}}>
                    <div class="h-24"></div>
                    <div class="p-4  m-auto rounded-2xl" style={{}}>
                        <h1 className="mainHeader rounded-2xl text-neutral-900 text-center h-min m-auto leading-none" style={{ fontFamily: "Lilita", fontWeight: "bolder", width: '70%', height: "80%"}}><span class="text-[#0B192C]">RELIVE</span><br/><span class="text-[#FF650E]">PAST MOMENTS</span></h1>
                        <h1 className="mainHeader rounded-2xl text-neutral-900 font-bold text-center h-min m-auto" style={{width: '75%'}}></h1>
                    </div>
                    <p style={{ fontFamily: "IBM Plex Mono" }} className="text-center hero_sub shadow-2xl text-[#1E3E62] bg-gray-100/70 p-4 rounded-2xl mt-4 m-auto font-bold text-2xl">
                    Transform your old photos and share your cherished memories with friends and family. We’ll manage every memory so they are never lost.
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
                <div class="flex flex-col justify-center" style={{backgroundImage: `url(${newBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '', backgroundPosition: 'center'}}>
                    <div class="mt-8 mb-8 nil_container m-auto bg-gray-100/80 rounded-2xl w-2/3 h-4/5 shadow-2xl">
                        <div className="h-full p-8 flex flex-col md:flex-row justify-between mb-8">
                            <div className="w-full h-full">
                                <h2 className="nil_style mb-4 font-bold">Your memories, <br/>flawlessly <span>preserved.</span></h2>
                                <div className='option_container w-full flex flex-col md:flex-row flex-wrap justify-evenly items-center' >
                                    <div className="option_serv h-1/3 text-gray-800 bg-gray-200/70 shadow-2xl mr-2 mb-8 bg-white flex flex-col items-center justify-center">
                                        <h3 className="option_title font-bold">SCAN</h3>
                                        <p className="option_text font-bold italic text-center">Scan your photos for easy storage and sharing.</p>
                                    </div>
                                    <div className="option_serv h-1/3 text-gray-800 bg-gray-200/70 mr-2 mb-8 bg-white shadow-2xl p-8 flex flex-col items-center justify-center">
                                        <h3 className="option_title font-bold">ORGANIZE</h3>
                                        <p className="option_text font-bold italic text-center">Let us help you organize your files, or follow our expert guide.</p>
                                    </div>
                                    <div className="option_serv h-1/3 text-gray-800 bg-gray-200/70 mr-2 mb-8 bg-white shadow-2xl p-8 flex flex-col items-center justify-center">
                                        <h3 className="option_title font-bold">ENHANCE</h3>
                                        <p className="option_text font-bold italic text-center">Enhance your photos for better clarity, color, and visual appeal.</p>
                                    </div>
                                </div>
                                {/* <p className="nil_style_sub w-3/4 font-bold text-gray-600 ">Rediscover your cherished moments with our service. We scan and enhance old photos, making them look new and accessible on any device.
                                </p> */}
                            </div>
                            <div class="flex flex-row items-center">
                                {/* <div class="w-1/2 mr-2 flex flex-col">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-8 pb-8 rounded-b
                        -2xl bg-[#F3EDE4]">
                            <h2 className="text-center package_title">Choose From the Following Packages</h2>
                            <h2 className="text-center package_title">To Best Fit Your Needs</h2>
                            <div class="max-w-[1200px] m-auto flex-wrap pt-16 flex flex-row justify-evenly" >
                                <ServiceOption serviceHeader="Classic Preservation" photoTypes={["Loose Photos", "Pocket Albums"]} scanType={"Scanning at 600 DPI"} cloudStorage={"Unavailable"} organization={"Available"} enhancing={"Available"} />
                                <ServiceOption serviceHeader="Memory Keeper" photoTypes={["Loose Photos", "Pocket Albums"]} scanType={"Scanning at 600 DPI"} cloudStorage={"Included"} organization={"Available"} enhancing={"Available"} />
                                <ServiceOption serviceHeader="Premium Archival" photoTypes={["Loose Photos", "Pocket Albums", "Adhesive", "Memorabilia", "Photo backs"]} scanType={"Scanning at 600-1,200 DPI"} cloudStorage={"Included"} organization={"Available"} enhancing={"Included"} />
                            </div>
                        </div>
                <div className='overflow-y-scroll flex flex-wrap justify-evenly' style={{backgroundImage: `url(${newBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '700px', backgroundPosition: 'bottom'}}>
                    <div className="bg-white/80 shadow-2xl p-8 bg-gray-100/80 m-auto rounded-2xl photo_type_container h-full">
                        <h2 className="photo_type_title text-black "><span className=""><span className="text-indigo-600">Our Focus</span> </span>is<br/> Quality <span className="">and Privacy.</span></h2>
                        <div className=" flex flex-row flex-wrap justify-evenly mt-24 h-fit ">
                            <div onMouseLeave={() => handleHover("")} onMouseEnter={() => handleHover('photos')} className="cursor-pointer option_serv h-1/3 text-gray-800 bg-gray-200/80 mr-2 mb-8  flex flex-col items-center justify-end">
                                <h3 className="picture_type_title">Photos</h3>
                                <svg className="svg_option" xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill={`${hover === 'photos' ? "#1F2937" : "#4B5563"}`}><path d="M699.56-479.78 127.35-707.91l26.52-71.87 623.48 247.39q48.39 19.78 67.11 49.47 18.72 29.69 18.72 77.14V-220q0 32.51-23.53 55.86-23.52 23.36-56.26 23.36H176.61q-32.51 0-55.86-23.36Q97.39-187.49 97.39-220v-180q0-32.74 23.36-56.26 23.35-23.52 55.86-23.52h522.95ZM783.39-220v-180H176.61v180h606.78Zm-406.78-60h346.78v-60H376.61v60Zm-109.83 0q12.83 0 21.33-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.67 21.32 8.68 8.5 21.5 8.5Zm-90.17 60v-180 180Z"/></svg>
                                <p>...</p>
                                {/* <p className="font-bold italic text-center" style={{width: "200px"}}>
                                    <ul>
                                        <li>Loose Photos</li>
                                        <li>Film Prints</li>
                                        <li>Wallet Prints</li>
                                        <li>Instant Prints</li>
                                    </ul>
                                </p> */}
                            </div>
                            <div onMouseLeave={() => handleHover("")} onMouseEnter={() => handleHover('albums')} className="cursor-pointer option_serv h-1/3 text-gray-800 bg-gray-200/80 mr-2 mb-8  flex flex-col items-center justify-end">
                                <h3 className="picture_type_title">Albums</h3>
                                <svg className="svg_option" xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill={`${hover === 'albums' ? "#1F2937" : "#4B5563"}`}><path d="M699.56-479.78 127.35-707.91l26.52-71.87 623.48 247.39q48.39 19.78 67.11 49.47 18.72 29.69 18.72 77.14V-220q0 32.51-23.53 55.86-23.52 23.36-56.26 23.36H176.61q-32.51 0-55.86-23.36Q97.39-187.49 97.39-220v-180q0-32.74 23.36-56.26 23.35-23.52 55.86-23.52h522.95ZM783.39-220v-180H176.61v180h606.78Zm-406.78-60h346.78v-60H376.61v60Zm-109.83 0q12.83 0 21.33-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.67 21.32 8.68 8.5 21.5 8.5Zm-90.17 60v-180 180Z"/></svg>
                                <p>...</p>
                                {/* <p className="font-bold italic text-center" style={{width: "200px"}}>
                                    <ul>
                                        <li>Scrap Books</li>
                                        <li>Adhesive Albums</li>
                                        <li>Pocket Albums</li>
                                    </ul>
                                </p> */}
                            </div>
                            <div onMouseLeave={() => handleHover("")} onMouseEnter={() => handleHover('mem')} className="cursor-pointer option_serv h-1/3 text-gray-800 bg-gray-200/80 mr-2 mb-8  flex flex-col items-center justify-end">
                                <h3 className="picture_type_title">Memorabilia</h3>
                                <svg className="svg_option" xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill={`${hover === 'mem' ? "#1F2937" : "#4B5563"}`}><path d="M699.56-479.78 127.35-707.91l26.52-71.87 623.48 247.39q48.39 19.78 67.11 49.47 18.72 29.69 18.72 77.14V-220q0 32.51-23.53 55.86-23.52 23.36-56.26 23.36H176.61q-32.51 0-55.86-23.36Q97.39-187.49 97.39-220v-180q0-32.74 23.36-56.26 23.35-23.52 55.86-23.52h522.95ZM783.39-220v-180H176.61v180h606.78Zm-406.78-60h346.78v-60H376.61v60Zm-109.83 0q12.83 0 21.33-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.67 21.32 8.68 8.5 21.5 8.5Zm-90.17 60v-180 180Z"/></svg>
                                <p>...</p>
                                {/* <p className="font-bold italic text-center" style={{width: "200px"}}>
                                    <ul>
                                        <li>Photo backs</li>
                                        <li>Signatures</li>
                                    </ul>
                                </p> */}
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="option_serv h-1/3 text-gray-800 bg-gray-200/70 mr-2 mb-8 bg-white shadow-2xl p-8 flex flex-col items-center justify-end">
                        <h3 className="text-4xl font-bold">STORE</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M146.78-267.91h666.44v-263.05H146.78v263.05Zm535.03-81.52q20.89 0 35.39-14.34 14.5-14.33 14.5-35.78 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.61-14.5 14.62-14.5 35.5 0 21.45 14.61 35.67 14.62 14.22 35.5 14.22ZM893-606.22H780.3l-88.13-88.13H267.83l-88.13 88.13H67.56l143.7-143.69q10.87-10.88 25.45-17.27 14.58-6.39 31.12-6.39h424.34q16.27 0 31.01 6.42 14.73 6.41 26.12 17.24L893-606.22ZM146.78-188.13q-33.25 0-56.23-23.15-22.99-23.14-22.99-56.63v-338.31H893v338.31q0 33.49-23.15 56.63-23.14 23.15-56.63 23.15H146.78Z"/></svg>
                        <p className="font-bold italic text-center" style={{width: "200px"}}>Store your photos on a thumb drive for easy offline access.</p>
                    </div>
                    <div className="option_serv h-1/3 text-gray-800 bg-gray-200/70 mr-2 mb-8 bg-white shadow-2xl  p-8 flex flex-col items-center justify-end">
                        <h3 className="text-4xl font-bold">CLOUD</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M251.13-145.87q-91.84 0-157.99-65.77Q27-277.42 27-368.87 27-450.26 77.06-514q50.07-63.74 130.9-76.87 22.26-98.7 98.61-160.76 76.36-62.07 175.6-62.07 115.09 0 194.42 82.07 79.32 82.06 83.85 197.76v24q73.69 3.09 123.13 54.53Q933-403.9 933-327.87q0 75.17-54.24 128.59-54.24 53.41-128.89 53.41H526.39q-32.46 0-56.12-23.64-23.66-23.65-23.66-55.58v-232l-85.83 86.4-47.52-46.96L480-584.96l167.3 167.31-48.08 46.96-85.83-86.4v232h236.68q41.97 0 72.84-30.79 30.87-30.8 30.87-73.12 0-42.74-30.79-73.33-30.8-30.58-73.12-30.58h-68.09v-90.22q0-86.42-58.6-148.6-58.61-62.18-144.92-62.18-87.56 0-146.3 64.28-58.74 64.28-58.74 152.72h-24.09q-59.89 0-101.4 41.98-41.51 41.97-41.51 103.82 0 59.85 42.52 102.94 42.52 43.08 102.67 43.08h135.2v79.22H251.13ZM480-440.39Z"/></svg>
                        <p className="font-bold italic text-center" style={{width: "200px"}}>Your files saved to the cloud for secure, instant access.</p>
                    </div>
                    <div className="option_serv h-1/3 text-gray-800 bg-gray-200/70 mr-2 mb-8 bg-white shadow-2xl p-8 flex flex-col items-center justify-end">
                        <h3 className="text-4xl font-bold">ORGANIZE</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M620-151.09 453.78-317.3l54.31-54.87L620-260.26l233.91-233.91 54.31 54.87L620-151.09ZM854.7-573h-79.79v-201.91h-57.17v96.78H242.26v-96.78h-57.17v589.82H431v79.22H185.09q-33.93 0-56.58-22.38-22.64-22.37-22.64-56.84v-589.82q0-34.47 22.38-57.13 22.37-22.66 56.84-22.66h186.17q9.26-35.56 39.42-58.63 30.16-23.06 69.32-23.06 38.26 0 68.59 23.06 30.32 23.07 40.71 58.63h185.61q34.47 0 57.13 22.66 22.66 22.66 22.66 57.13V-573ZM480-781.13q17 0 28.5-11.78Q520-804.7 520-821.13q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5q0 16.43 11.5 28.22 11.5 11.78 28.5 11.78Z"/></svg>
                        <p className="font-bold italic text-center" style={{width: "200px"}}>Let us help you organize your files, or follow our expert guide.</p>
                    </div>
                    <div className="option_serv h-1/3 text-gray-800 bg-gray-200/70 mr-2 mb-8 bg-white shadow-2xl p-8 flex flex-col items-center justify-end">
                        <h3 className="text-4xl font-bold">ENHANCE</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M240.11-360.61q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm0 162q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm0-318q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-119.03-17q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm119.03-145q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-119.03 301q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm281 281q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm0-718q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm.03 136q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-.11 334q-23.63 0-40.51-16.88T344.61-402q0-23.63 16.88-40.51T402-459.39q23.63 0 40.51 16.88T459.39-402q0 23.63-16.88 40.51T402-344.61Zm0-156q-23.63 0-40.51-16.88T344.61-558q0-23.63 16.88-40.51T402-615.39q23.63 0 40.51 16.88T459.39-558q0 23.63-16.88 40.51T402-500.61Zm.11 302q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73ZM490-115.87v-79.22q115.3-5 195.11-87.03 79.8-82.04 79.8-197.83t-79.73-197.88Q605.44-759.91 490-764.91v-79.79q73.83 2 138.13 31.69 64.3 29.68 112.47 78.63 48.17 48.95 76.13 114.33 27.97 65.38 27.97 139.97 0 73.91-27.97 139.71-27.96 65.8-76.13 114.75-48.17 48.95-112.47 78.63-64.3 29.69-138.13 31.12ZM490-480Z"/></svg>
                        <p className="font-bold italic text-center" style={{width: "200px"}}>Enhance your photos for better clarity, color, and visual appeal.</p>
                    </div> */}
                </div>
                <NotionInspiredLayoutTwo />
            <Footer />
            </div>
        </div>
    );
};

export default Main;
