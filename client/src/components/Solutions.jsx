import React from 'react';
import { Camera, HardDrive, Users, Shield } from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';


const SolutionBox = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const NotionPhotoScanningSolutionsPage = () => {
  return (
    <div style={{ fontFamily: "IBM Plex Mono" }}>
        <Navbar />
        <div className="bg-[#F3EDE4] text-gray-800 min-h-screen p-8">
        <div className="bg-white shadow-2xl p-8 rounded-2xl max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 mt-8">
            <span className="text-7xl">
                <span className="text-indigo-600">Solutions</span> for Photo Scanning Services
            </span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6">
            <SolutionBox 
                icon={<Camera className="w-8 h-8 text-indigo-600" />}
                title="On-Site Scanning"
                description="For larger projects, we provide on-site scanning at your location, ensuring convenience and efficiency."
            />
            <SolutionBox 
                icon={<HardDrive className="w-8 h-8 text-indigo-600" />}
                title="Remote Uploads"
                description="After photo pickup or drop-off, receive secure digital copies remotely for further processing."
            />
            <SolutionBox 
                icon={<Shield className="w-8 h-8 text-indigo-600" />}
                title="Secure Cloud Backup"
                description="Your precious memories are safeguarded in the cloud, accessible anytime, anywhere."
            />
            <SolutionBox 
                icon={<Users className="w-8 h-8 text-indigo-600" />}
                title="Custom File Organization"
                description="We organize your files into folders by date, event, or using customized tags for easy retrieval."
            />
            </div>

            <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Additional Features</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>High-resolution scanning for exceptional quality</li>
                <li>Multiple format options (JPEG, TIFF, PNG)</li>
                <li>Bulk scanning discounts for large projects</li>
                <li>Optional photo restoration services available</li>
            </ul>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default NotionPhotoScanningSolutionsPage;