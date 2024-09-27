import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PhotoScanPricing from '../pricing-component/PhotoScanPricing';
import ServiceOption from './ServiceOption';

import './style.css';

import arrowSimple from '../icons/arrowSimple.png';
import serviceBg from '../img/rootService.png';
import serviceImage from '../icons/rm2.webp';
import smallDiagram from '../img/smallDiagram.png';
import cat from '../img/cat.jpg';
import dog from '../img/dog.jpeg';
import transparentLines from '../img/transparentLines.png';
import purpleLines from '../img/purpleLines.png';
import enhanceBadge from '../img/enhanceBadge.png';
import organizeBadge from '../img/organizeBadge.png';
import scanBadge from '../img/scanBadge.png';
import scanBadgeGold from '../img/scanBadgeGold.png';
import organizeBadgeGold from '../img/organizeBadgeGold.png';
import enhanceBadgeGold from '../img/enhanceBadgeGold.png';
import rootPhrase from '../img/rootPhrase.png';
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
import arrow from '../steps-img/arrow.png';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

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
                    <div className="h-[200px] md:h-[300px] lg:h-[400px] 2xl:h-[500px] backgroundImageService pt-16 pb-16 text-black flex flex-col justify-evenly items-center " style={{ backgroundImage: `url(${serviceBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: "top", backgroundAttachment: "", backgroundSize: "contain, cover"}}>
                    </div>
                        <div style={{backgroundImage: `url(${transparentLines})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'}} class="flex flex-row justify-evenly flex-wrap">
                            <p  class='mt-8 text-black'>
                                {/* <img class="w-5/6 m-auto" src={rootPhrase} /> */}
                                <br/>
                                <div class="border border-4 mr-8 ml-8 flex flex-col justify-evenly flex-wrap just lg:flex-row ">
                                    {/* <img src={digitization} class="w-1/2" /> */}
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
