import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PhotoScanPricing from '../pricing-component/PhotoScanPricing';
import ServiceOption from './ServiceOption';

import './style.css';


import serviceBg from '../img/rootService.png';
import transparentLines from '../img/transparentLines.png';
import enhanceBadge from '../img/enhanceBadge.png';
import organizeBadge from '../img/organizeBadge.png';
import scanBadge from '../img/scanBadge.png';
import scanBadgeGold from '../img/scanBadgeGold.png';
import organizeBadgeGold from '../img/organizeBadgeGold.png';
import enhanceBadgeGold from '../img/enhanceBadgeGold.png';
import digitization from '../img/digitization.png';
import clouds from '../img/clouds.png';

import deliverButton from '../steps-img/deliverButton.png';
import dropOffButton from '../steps-img/dropOffButton.png';
import enhanceButton from '../steps-img/enhanceButton.png';
import inHomeButton from '../steps-img/inHomeButton.png';
import orderButton from '../steps-img/orderButton.png';
import organizeButton from '../steps-img/organizeButton.png';
import pickUpButton from '../steps-img/pickUpButton.png';
import saveButton from '../steps-img/saveButton.png';
import scanButton from '../steps-img/scanButton.png';

const PhotoScanService = () => {

    let scanRef = useRef();
    let organizeRef = useRef();
    let enhanceRef = useRef();

    const [currentScanBadge, setCurrentScanBadge] = useState(scanBadge)
    const [scanSlide, setScanSlide] = useState(false);

    const [badgeHovered, setBadgeHovered] = useState();
    const [badgeClicked, setBadgeClicked] = useState('');
    const [amount, setAmount] = useState(0);

    const handleMouseEnter = (val) => {
        setBadgeHovered(val)
        setScanSlide(true);
        
    }

    const handleMouseLeave = () => {
        setScanSlide(false);
        setBadgeHovered();
    }

    const handleBadgeClick = (val) => {
        setBadgeClicked(val);
    }

    const handleStep = (val) => {
        if (amount - val < -1200) {
            setAmount(0);
        } else if (amount - val > 0) {
            setAmount(-1200);
        } else {
            setAmount(amount - val);
        }
    }

    return (
        <div class="flex flex-row h-screen">
            <Navbar />
            <div class="overflow-x-hidden w-full h-full" style={{ marginLeft: "20%"}}>
                <div style={{}}  className="">
                    <div style={{backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}}>
                        <img src={serviceBg} className={`w-2/3 rounded-2xl shadow-2xl m-auto`}/>
                    </div>
                    {/* <div className="h-[200px] md:h-[300px] lg:h-[400px] 2xl:h-[500px] backgroundImageService pt-16 pb-16 text-black flex flex-col justify-evenly items-center " style={{ backgroundImage: `url(${serviceBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: "top", backgroundAttachment: "", backgroundSize: "contain, cover"}}>
                    </div> */}
                        <div style={{backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}} class="flex flex-row justify-evenly flex-wrap">
                            <p  class='mt-8 text-black'>
                                {/* <img class="w-5/6 m-auto" src={rootPhrase} /> */}
                                <br/>
                                <div class=" mr-8 ml-8 flex flex-col justify-evenly flex-wrap just lg:flex-row ">
                                    {/* <img src={digitization} class="w-1/2" /> */}

                                    <div class="bg-sky-100 rounded-2xl w-full shadow-2xl">
                                        <div class="w-full p-8 flex flex-row justify-between mb-8">
                                            <div>
                                                <h2 class="mb-4 text-6xl font-bold">Your memories, <br/>flawlessly digitized.</h2>
                                                <p class=" w-3/4 font-bold text-gray-600 text-2xl">Digitize your old photos, share cherished memories with family and friends, and us restore every detail to perfection.</p>
                                            </div>
                                            <div class="flex flex-row">
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
                                        <div class="pb-8 rounded-b
                                        -2xl bg-gray-50">
                                            <div class="flex-wrap pt-16 flex flex-row justify-evenly" >
                                                <ServiceOption serviceHeader="Classic Preservation" photoTypes={["Loose Photos", "Pocket Albums"]} thumbDrive={"Included"} cloudStorage={"Unavailable"} organization={"Available"} enhancing={"Available"} />
                                                <ServiceOption serviceHeader="Memory Keeper" photoTypes={["Loose Photos", "Pocket Albums"]} thumbDrive={"Included"} cloudStorage={"Included"} organization={"Available"} enhancing={"Available"} />
                                                <ServiceOption serviceHeader="Premium Archival" photoTypes={["Loose Photos", "Pocket Albums", "Adhesive", "Memorabilia", "Photo backs"]} thumbDrive={"Included"} cloudStorage={"Included"} organization={"Available"} enhancing={"Available"} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="flex-wrap flex justify-evenly mt-8">
                                        <div className="text-gray-800 bg-gradient-to-r from-cyan-100 to-blue-100 shadow-2xl mr-2 mb-8 rounded-2xl p-8 flex flex-col items-center">
                                            <h3 className="text-3xl font-bold">Scanning</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M699.56-479.78 127.35-707.91l26.52-71.87 623.48 247.39q48.39 19.78 67.11 49.47 18.72 29.69 18.72 77.14V-220q0 32.51-23.53 55.86-23.52 23.36-56.26 23.36H176.61q-32.51 0-55.86-23.36Q97.39-187.49 97.39-220v-180q0-32.74 23.36-56.26 23.35-23.52 55.86-23.52h522.95ZM783.39-220v-180H176.61v180h606.78Zm-406.78-60h346.78v-60H376.61v60Zm-109.83 0q12.83 0 21.33-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.67 21.32 8.68 8.5 21.5 8.5Zm-90.17 60v-180 180Z"/></svg>
                                            <p className="font-bold italic text-center" style={{width: "200px"}}>Quickly scan and digitize your photos for easy storage and sharing.</p>
                                        </div>
                                        <div className="text-gray-800 bg-gradient-to-r from-cyan-100 to-blue-100 mr-2 mb-8 bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center">
                                            <h3 className="text-3xl font-bold">Physical Storage</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M146.78-267.91h666.44v-263.05H146.78v263.05Zm535.03-81.52q20.89 0 35.39-14.34 14.5-14.33 14.5-35.78 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.61-14.5 14.62-14.5 35.5 0 21.45 14.61 35.67 14.62 14.22 35.5 14.22ZM893-606.22H780.3l-88.13-88.13H267.83l-88.13 88.13H67.56l143.7-143.69q10.87-10.88 25.45-17.27 14.58-6.39 31.12-6.39h424.34q16.27 0 31.01 6.42 14.73 6.41 26.12 17.24L893-606.22ZM146.78-188.13q-33.25 0-56.23-23.15-22.99-23.14-22.99-56.63v-338.31H893v338.31q0 33.49-23.15 56.63-23.14 23.15-56.63 23.15H146.78Z"/></svg>
                                            <p className="font-bold italic text-center" style={{width: "200px"}}>Store your important photos on a thumb drive for easy offline access.</p>
                                        </div>
                                        <div className="text-gray-800 bg-gradient-to-r from-cyan-100 to-blue-100 mr-2 mb-8 bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center">
                                            <h3 className="text-3xl font-bold">Cloud Service</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M251.13-145.87q-91.84 0-157.99-65.77Q27-277.42 27-368.87 27-450.26 77.06-514q50.07-63.74 130.9-76.87 22.26-98.7 98.61-160.76 76.36-62.07 175.6-62.07 115.09 0 194.42 82.07 79.32 82.06 83.85 197.76v24q73.69 3.09 123.13 54.53Q933-403.9 933-327.87q0 75.17-54.24 128.59-54.24 53.41-128.89 53.41H526.39q-32.46 0-56.12-23.64-23.66-23.65-23.66-55.58v-232l-85.83 86.4-47.52-46.96L480-584.96l167.3 167.31-48.08 46.96-85.83-86.4v232h236.68q41.97 0 72.84-30.79 30.87-30.8 30.87-73.12 0-42.74-30.79-73.33-30.8-30.58-73.12-30.58h-68.09v-90.22q0-86.42-58.6-148.6-58.61-62.18-144.92-62.18-87.56 0-146.3 64.28-58.74 64.28-58.74 152.72h-24.09q-59.89 0-101.4 41.98-41.51 41.97-41.51 103.82 0 59.85 42.52 102.94 42.52 43.08 102.67 43.08h135.2v79.22H251.13ZM480-440.39Z"/></svg>
                                            <p className="font-bold italic text-center" style={{width: "200px"}}>Your files saved to the cloud for secure, instant access.</p>
                                        </div>
                                        <div className="text-gray-800 bg-gradient-to-r from-cyan-100 to-blue-100 mr-2 mb-8 bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center">
                                            <h3 className="text-3xl font-bold">Organize Service</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M620-151.09 453.78-317.3l54.31-54.87L620-260.26l233.91-233.91 54.31 54.87L620-151.09ZM854.7-573h-79.79v-201.91h-57.17v96.78H242.26v-96.78h-57.17v589.82H431v79.22H185.09q-33.93 0-56.58-22.38-22.64-22.37-22.64-56.84v-589.82q0-34.47 22.38-57.13 22.37-22.66 56.84-22.66h186.17q9.26-35.56 39.42-58.63 30.16-23.06 69.32-23.06 38.26 0 68.59 23.06 30.32 23.07 40.71 58.63h185.61q34.47 0 57.13 22.66 22.66 22.66 22.66 57.13V-573ZM480-781.13q17 0 28.5-11.78Q520-804.7 520-821.13q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5q0 16.43 11.5 28.22 11.5 11.78 28.5 11.78Z"/></svg>
                                            <p className="font-bold italic text-center" style={{width: "200px"}}>Let us help you organize your files, or follow our expert guide.</p>
                                        </div>
                                        <div className="text-gray-800 bg-gradient-to-r from-cyan-100 to-blue-100 mr-2 mb-8 bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center">
                                            <h3 className="text-3xl font-bold">Photo Enhance Service</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M240.11-360.61q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm0 162q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm0-318q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-119.03-17q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm119.03-145q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-119.03 301q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm281 281q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm0-718q-10.78 0-17.62-6.77-6.85-6.76-6.85-17.54t6.77-17.62q6.76-6.85 17.54-6.85t17.62 6.77q6.85 6.76 6.85 17.54t-6.77 17.62q-6.76 6.85-17.54 6.85Zm.03 136q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73Zm-.11 334q-23.63 0-40.51-16.88T344.61-402q0-23.63 16.88-40.51T402-459.39q23.63 0 40.51 16.88T459.39-402q0 23.63-16.88 40.51T402-344.61Zm0-156q-23.63 0-40.51-16.88T344.61-558q0-23.63 16.88-40.51T402-615.39q23.63 0 40.51 16.88T459.39-558q0 23.63-16.88 40.51T402-500.61Zm.11 302q-18.03 0-29.77-11.63-11.73-11.63-11.73-29.65 0-18.03 11.63-29.77 11.63-11.73 29.65-11.73 18.03 0 29.77 11.63 11.73 11.63 11.73 29.65 0 18.03-11.63 29.77-11.63 11.73-29.65 11.73ZM490-115.87v-79.22q115.3-5 195.11-87.03 79.8-82.04 79.8-197.83t-79.73-197.88Q605.44-759.91 490-764.91v-79.79q73.83 2 138.13 31.69 64.3 29.68 112.47 78.63 48.17 48.95 76.13 114.33 27.97 65.38 27.97 139.97 0 73.91-27.97 139.71-27.96 65.8-76.13 114.75-48.17 48.95-112.47 78.63-64.3 29.69-138.13 31.12ZM490-480Z"/></svg>
                                            <p className="font-bold italic text-center" style={{width: "200px"}}>Enhance your photos for better clarity, color, and visual appeal.</p>
                                        </div>
                                    </div>
                                    


                                    <p class=" italic lg:ml-8 lg:mr-8 w-full lg:w-1/2 m-auto text-black p-8 shadow-2xl rounded-2xl font-bold"  >
                                        <img src={digitization} class="w-1/2" />
                                        We offer scanning, enhancement, and organization services for your photos. Whether sorted by date, event, or person, we create systems that make your memories easy to find. You can receive your photos on a thumb drive or have them securely uploaded to the cloud for access anytime, anywhere.
                                        <p class="mt-8 mb-8 flex flex-row justify-evenly flex-wrap">
                                            <div class="flex flex-row justify-evenly flex-wrap">
                                                <img onClick={() => handleBadgeClick('scan')} onMouseEnter={() => handleMouseEnter('scan')} onMouseLeave={() => handleMouseLeave()} className={`scanBadgeClass cursor-pointer ${badgeHovered === 'scan' ? 'scanSlideClass' : ''}`} style={{width: "25%"}} src={badgeHovered === 'scan' ? scanBadgeGold : scanBadge} ref={scanRef} />
                                                <img onClick={() => handleBadgeClick('organize')} onMouseEnter={() => handleMouseEnter('organize')} onMouseLeave={() => handleMouseLeave()} className={`scanBadgeClass cursor-pointer ${badgeHovered === 'organize' ? 'scanSlideClass' : ''}`} style={{width: "25%"}} src={badgeHovered === 'organize' ? organizeBadgeGold : organizeBadge} ref={organizeRef} />
                                                <img onClick={() => handleBadgeClick('enhance')} onMouseEnter={() => handleMouseEnter('enhance')} onMouseLeave={() => handleMouseLeave()} className={`scanBadgeClass cursor-pointer ${badgeHovered === 'enhance' ? 'scanSlideClass' : ''}`} style={{width: "25%"}} src={badgeHovered === 'enhance' ? enhanceBadgeGold : enhanceBadge} ref={enhanceRef} />
                                            </div>
                                            <div className={`${badgeClicked !== '' ? "badgeDescriptionOpen" : "badgeDescriptionClose"}`}>
                                                {
                                                    badgeClicked === 'scan' ? (
                                                        <p>
                                                            Our photo scanning service meticulously captures each photo one by one using high-resolution scanners. Each image is then digitally saved in your preferred format, ensuring quality preservation. Clients receive organized digital files, making it easy to share and store cherished memories while protecting them from deterioration over time.
                                                        </p> 
                                                    ) : (
                                                        <span></span>
                                                    )
                                                }
                                                {
                                                    badgeClicked === 'organize' ? (
                                                        <p>
                                                            We offer a hands-on approach to photo organization, assisting you directly in sorting and categorizing your images. Alternatively, we provide a detailed organization guide for those who prefer to do it themselves. Our goal is to make the process seamless and enjoyable, tailored to your preferences.
                                                        </p>
                                                    ) : (
                                                        <span></span>
                                                    )
                                                }
                                                {
                                                    badgeClicked === 'enhance' ? (
                                                        <p>
                                                            Our photo enhancement service revitalizes your images by adjusting color, contrast, and brightness for a polished look. We utilize advanced editing techniques to remove blemishes and improve clarity, ensuring your cherished memories shine. Each photo is carefully enhanced to capture the essence of the moment, making them even more memorable.
                                                        </p>
                                                    ) : (
                                                        <span></span>
                                                    )
                                                }
                                            </div>
                                        </p>
                                    </p>


                                    <div style={{maxHeight: "300px", overflow: "hidden"}} class=" rounded-2xl m-auto w-5/6 p-8 ">
                                        {/* <div style={{marginLeft: "-4%"}} class="mt-20 absolute flex flex-row justify-between">
                                            <img onClick={() => handleStep(-300)} src={arrowSimple} class="opacity-25 hover:opacity-100 cursor-pointer z-10" style={{width: "5%", transform: "rotate(180deg)"}} />
                                            <img onClick={() => handleStep(300)} src={arrowSimple} class="opacity-25 hover:opacity-100 cursor-pointer z-10 mr-16" style={{width: "5%"}} />
                                        </div> */}
                                        <div style={{transform: `translateY(${amount}px)`}} class="flex flex-col ">

                                            <span className={`m-auto step ${amount === 0? "stepActive" : ""}`} style={{height: "234px", marginBottom: "64px"}}>
                                                <img class="w-1/2 m-auto" src={orderButton} />
                                                <p class="text-center text-black font-bold">Start by filling out and submiting your form!</p>
                                            </span>

                                            <span className={`step ${amount === -300? "stepActive" : ""} m-auto flex flex-col justify-evenly`} style={{height: "234px", marginBottom: "64px"}} >
                                                <span class="flex flex-row justify-evenly">
                                                    <img class="w-1/4 m-auto" src={inHomeButton} />
                                                    <img class="w-1/4 m-auto" src={pickUpButton} />
                                                    <img class="w-1/4 m-auto" src={dropOffButton} />
                                                </span>
                                                <p class="text-center m-auto text- font-bold">
                                                    Select where your photos will be worked on.
                                                </p>
                                            </span>
                                            
                                            <span className={`step ${amount === -600? "stepActive" : ""} m-auto flex flex-col justify-evenly`} style={{height: "234px", marginBottom: "64px"}}>
                                                <img class="w-1/4 m-auto" src={scanButton} />
                                                <p class="text-center text-black font-bold">
                                                    Enjoy the convenience of preserving your cherished memories.
                                                </p>
                                            </span>
                                            
                                            <span className={`step ${amount === -900? "stepActive" : ""} m-auto flex flex-col justify-evenly`} style={{height: "234px", marginBottom: "64px"}}>
                                                <span class="flex flex-row justify-evenly">
                                                    <img class="w-1/4 m-auto" src={organizeButton} />
                                                    <img class="w-1/4 m-auto" src={enhanceButton} />
                                                    <img class="w-1/4 m-auto" src={saveButton} />
                                                </span>
                                                <p class="text-center text-black font-bold">
                                                    Select a range of personalized services to bring your memories to life.
                                                </p>
                                            </span>
                                            
                                            <span className={`flex flex-col justify-evenly m-auto step ${amount === -1200? "stepActive" : ""}`} style={{height: "234px", marginBottom: "64px"}}>
                                                <p class="text-center text-black font-bold">
                                                    Receive the digital copies of your beautiful photographs. 
                                                </p>
                                                <img class="w-1/4 m-auto" src={deliverButton} />
                                                <p class="text-center text-black font-bold">Ready to be enjoyed and shared for years to come.</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div  class="relative w-5/6 pr-16 pl-16 text-stone-50 "  >
                                        <p style={{backgroundImage: `url(${clouds})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat', backgroundSize: '1000px'}} class="h-full p-4 rounded-2xl text-black flex flex-col justify-evenly items-center">
                                            <p class="font-bold text-xl">We offer flexible storage options</p>
                                            <ol class="font-bold text-lg">
                                                <li class="">1. Securely saved in your Google account for easy access from any device</li>
                                                <li class="">2. Transfer files to a thumb drive for convenient offline storage.</li>
                                            </ol>
                                            <p class="font-bold text-xl">You will have the option to choose one or both, whichever is more convenient to meet your needs.</p>
                                        </p>
                                    </div>
                                </div>
                                <div style={{backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}} className="border pb-12 container">
                        
                       
                                </div>
                                <div class=" w-5/6  relative flex flex-col items-center" >
                            {/* <img style={{backgroundImage: `url(${clouds})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: '1000px'}} class=" bg-gray-950 border border-white rounded-2xl m-auto w-5/6 p-8 " src={serviceImage} /> */}
                            
                            
                        </div>
                            <br />
                            <br/><br/>
                            {/* At Root Moments, we’re committed to making it easy for you to preserve your memories for generations to come. Our service is perfect for families looking to safeguard their history, professionals who want to organize their work portfolios, or anyone looking to give new life to their printed photographs. Let us take care of your memories, so you can relive them again and again. Contact us today to get started! */}
                            </p>
                        </div>
                    
                </div>

                {/* <div style={{backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}} class='h-72  flex flex-row justify-evenly items-center'>
                    <img src={smallDiagram} class="w-5/6" />
                </div> */}
                <div class="flex-wrap pt-16 flex flex-row justify-evenly" style={{backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}} >
                    <ServiceOption serviceHeader="In Home" thumbDrive={"Included"} cloudStorage={"Available"} organization={"Included"} enhancing={"Available"} />
                    <ServiceOption serviceHeader="Pick Up" thumbDrive={"Included"} cloudStorage={"Available"} organization={"Available"} enhancing={"Available"} />
                    <ServiceOption serviceHeader="Drop Off" thumbDrive={"Included"} cloudStorage={"Available"} organization={"Available"} enhancing={"Available"} />
                </div>
                
                <div style={{height: "200px", backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}} class=" text-black flex flex-col justify-evenly items-center">
                    <p class="italic font-bold text-xl">Manage, organize and reflect.</p>
                    <p class="italic font-bold text-xl">Enjoy peace of mind knowing your cherished moments are safely preserved and easily accessible.</p>
                </div>
                <div style={{backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}} class="">

                    {/* Wants to do price per hour, not price per photo  */}

                    <PhotoScanPricing />
                </div>

            
            </div>
        </div>
    );
};

export default PhotoScanService;
