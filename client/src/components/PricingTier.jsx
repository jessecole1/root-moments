import React from 'react';
import { Check, Camera, Edit, FolderOpen, Upload } from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';

const PricingTier = ({ title, price, features, photoTypes }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal">/hour</span></p>
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Services Included:</h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Types of Photos:</h4>
      <ul className="space-y-2">
        {photoTypes.map((type, index) => (
          <li key={index} className="flex items-center">
            <Camera className="w-4 h-4 text-indigo-600 mr-2" />
            <span>{type}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PricingPage = () => {
  const pricingTiers = [
    {
      title: "Classic Preservation",
      price: "75",
      features: [
        "Organization (Categorizing)",
        "Scanning (600 DPI)",
        "Editing (Enhancements & Color correction)",
      ],
      photoTypes: [
        "Loose Photos",
        "Pocket style Albums",
        "Memorabilia sizes up to 8.5\" x 11\"",
      ],
    },
    {
      title: "Memory Keeper",
      price: "80",
      features: [
        "Organization (Categorizing)",
        "Scanning (600 DPI)",
        "Editing (Enhancements & Color correction)",
        "Denoising using Lightroom",
      ],
      photoTypes: [
        "Loose Photos",
        "Pocket style Albums",
        "Memorabilia sizes up to 8.5\" x 11\"",
        "Adhesive style Albums",
        "Photo backs with Annotations",
      ],
    },
    {
      title: "Premium Archival",
      price: "100",
      features: [
        "Organization (Categorizing)",
        "Premium Scanning (600 DPI - 1,200 DPI)",
        "Editing (Enhancements & Color correction)",
        "Denoising using Lightroom",
        "Uploading to Google Photos for easy access",
        "Organization into digital albums within Google Photos",
      ],
      photoTypes: [
        "Loose Photos",
        "Pocket style Albums",
        "Memorabilia sizes up to 8.5\" x 11\"",
        "Adhesive style Albums",
        "Photo backs with Annotations",
        "Full page Scrapbooks",
      ],
    },
  ];

  return (
    <div>
        <Navbar />
        <div className="bg-[#F3EDE4] text-gray-800 min-h-screen p-8">
        <div className="bg-white shadow-2xl p-8 rounded-2xl max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 mt-8">
            <span className="text-7xl">
                <span className="text-indigo-600">Preserve your memories</span> with our scanning services
            </span>
            </h1>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
                <PricingTier key={index} {...tier} />
            ))}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                Why Choose Our Services?
            </h2>
            <ul className="space-y-3">
                <li className="flex items-center">
                <FolderOpen className="w-5 h-5 text-indigo-600 mr-2" />
                <span>Professional organization and categorization of your photos</span>
                </li>
                <li className="flex items-center">
                <Camera className="w-5 h-5 text-indigo-600 mr-2" />
                <span>High-quality scanning up to 1,200 DPI</span>
                </li>
                <li className="flex items-center">
                <Edit className="w-5 h-5 text-indigo-600 mr-2" />
                <span>Expert editing and enhancement of your images</span>
                </li>
                <li className="flex items-center">
                <Upload className="w-5 h-5 text-indigo-600 mr-2" />
                <span>Optional upload and organization in Google Photos (Premium tier)</span>
                </li>
            </ul>
            </div>

            <div className="mt-12 text-center">
            <p className="text-xl mb-4">Ready to preserve your precious memories?</p>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Started Today
            </button>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default PricingPage;