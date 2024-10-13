import React from 'react';
import { Camera, HardDrive, Clock, Shield } from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';


const FactBox = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FactsPage = () => {
  return (
    <div style={{ fontFamily: "IBM Plex Mono" }} className="">
      <Navbar />
      <div className="bg-[#F3EDE4] text-gray-800 min-h-screen p-8">
        <div className="bg-white bg-[#F3EDE4] shadow-2xl p-8 rounded-2xl max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 mt-8">
            <span className="text-7xl">
                <span className="text-indigo-600">Fast Facts</span> about our Photo Scanning Service
            </span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6">
            <FactBox 
                icon={<Camera className="w-8 h-8 text-indigo-600" />}
                title="High-Quality Scanning"
                description="We use state-of-the-art scanners to ensure your photos are digitized at the highest possible quality, preserving every detail."
            />
            <FactBox 
                icon={<HardDrive className="w-8 h-8 text-indigo-600" />}
                title="Secure Storage"
                description="Your scanned photos are safely stored on encrypted hard drives, ensuring the security and longevity of your precious memories."
            />
            <FactBox 
                icon={<Clock className="w-8 h-8 text-indigo-600" />}
                title="Quick Turnaround"
                description="Most orders are completed within 5-7 business days, so you can start enjoying your digital photos in no time."
            />
            <FactBox 
                icon={<Shield className="w-8 h-8 text-indigo-600" />}
                title="Guaranteed Satisfaction"
                description="We offer a 100% satisfaction guarantee. If you're not happy with the quality of our scans, we'll re-scan your photos for free."
            />
            </div>

            <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Did You Know?</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Our scanning process includes basic color correction and dust removal.</li>
                <li>We can handle photos of various sizes, from wallet-sized to large format prints.</li>
                <li>All your original photos are returned to you along with the digital files.</li>
            </ul>
            </div>
        </div>
        </div>
        <Footer />
      </div>
  );
};

export default FactsPage;