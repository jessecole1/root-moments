import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Image, FileText, PhoneCall, Camera, Mail, Phone } from 'lucide-react';

// ... [Previous ToggleableSection component remains unchanged]

const Footer = () => {
    return (

        <footer className="bg-gray-100 mt-12 py-8 px-4">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-evenly items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
                © 2024 Root Moments. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <a href="tel:+18189127285" className="p-2 w-48 flex items-center text-gray-600 hover:text-indigo-600 mb-2 md:mb-0 md:mr-6">
                <Phone className="w-5 h-5 mr-2" />
                +1 (818) 912-7285
                </a>
                <a href="mailto:contact@photoscanningservice.com" className="p-2 flex items-center text-gray-600 hover:text-indigo-600">
                <Mail className="w-5 h-5 mr-2" />
                contact@photoscanningservice.com
                </a>
            </div>
            </div>
        </footer>
    )
};

export default Footer;