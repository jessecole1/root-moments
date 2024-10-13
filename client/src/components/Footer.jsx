import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { ChevronDown, ChevronRight, Image, FileText, PhoneCall, Camera, Mail, Phone } from 'lucide-react';
import GoogleMapReact from 'google-map-react';
import { useAppContext } from './AppProvider';

// ... [Previous ToggleableSection component remains unchanged]

const Footer = () => {

    const {adminLoggedIn} = useAppContext();

    return (

        <footer className="bg-gray-800 py-8 px-4">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-evenly items-center">
                <div style={{height: "100%"}} className="flex flex-col justify-evenly items-center">
                    <div className="text-lg text-white mb-4 md:mb-0">
                        © 2024 Root Moments. All rights reserved.
                    </div>
                    <a href="tel:+18189127285" className="text-white p-2 w-48 flex items-center text-gray-600 hover:text-gray-200 mb-2">
                    <Phone className="text-white w-5 h-5 mr-2" />
                    +1 (818) 912-7285
                    </a>
                    <a href="mailto:contact@photoscanningservice.com" className="text-white p-2 flex items-center text-gray-600 hover:text-gray-200">
                    <Mail className="text-white w-5 h-5 mr-2" />
                    info@rootmoments.com
                    </a>
                    {
                        adminLoggedIn ? (
                            <div>

                            </div>
                        ) : (
                            <Link to="/admin-login">Login</Link>
                        )
                    }
                    {/* <Link to="/admin-register">Register</Link> */}
                </div>
                <div className="flex flex-col items-center">
                    <iframe className="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105647.61310186394!2d-118.69756057942266!3d34.15944121951839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29eecf136f655%3A0xfa86506e44241288!2sWoodland%20Hills%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1728754690721!5m2!1sen!2sus" width="300" height="200" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    )
};

export default Footer;