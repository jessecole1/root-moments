import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Image, FileText, PhoneCall, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import Navbar from './Navbar';
import Footer from './Footer';


const ToggleableSection = ({ number, title, content, subSteps }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6 border-b border-gray-200 pb-4">
      <div
        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className="w-5 h-5 mr-2 text-gray-500" />
        ) : (
          <ChevronRight className="w-5 h-5 mr-2 text-gray-500" />
        )}
        <span className="text-2xl font-bold mr-3 text-gray-400">{number}.</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {isOpen && (
        <div className="pl-12 mt-3 text-gray-600">
          <p>{content}</p>
          {subSteps && (
            <ul className="list-disc pl-5 mt-2">
              {subSteps.map((subStep, index) => (
                <li key={index} className="mt-1">{subStep}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const HowItWorksPage = () => {

  const navigate = useNavigate();

  const steps = [
    {
      icon: <Image className="w-8 h-8 text-indigo-600" />,
      title: "Select Your Photos",
      content: "Decide which photos you want to be worked on. This is your opportunity to choose the memories you want to preserve digitally."
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: "Place Your Order",
      content: "Go to the order page, fill out information and place your order.",
      subSteps: [
        "Choose which package will fit your needs from classic preservation, memory keeper and premium archival."
      ]
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-indigo-600" />,
      title: "Order Confirmation",
      content: "We will contact you to confirm your order and decide on when to start the scanning process."
    },
    {
      icon: <Camera className="w-8 h-8 text-indigo-600" />,
      title: "Start Scanning",
      content: "Depending on your needs, we will work with you on site, have them be picked up or drop them off. Our flexible options ensure we can accommodate your preferences."
    }
  ];

  const handleClickPricing = () => {
    navigate("/pricing");
  }

  const handleClickOrder = () => {
    navigate('/order/photo-scanning');
  }

  return (
    <div style={{ fontFamily: "IBM Plex Mono" }}>
      <Navbar />
      <div className="bg-[#F3EDE4] pb-8 pt-8">

        <div className="bg-white shadow-2xl p-8 rounded-2xl max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-8">How It Works</h1>
          <div className="flex flex-row">
            <p className="text-xl w-2/3 mb-8">Effortlessly preserve your memories through our simple photo scanning process.</p>
            <div className="flex flex-col items-center w-1/4 mb-8">
              <p className="text-center font-bold">Check Out our Pricing</p>
              <Button variant="contained" onClick={handleClickPricing} className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold transition-colors">
                    Pricing
              </Button>
            </div>
          </div>
          
          {steps.map((step, index) => (
            <ToggleableSection
              key={index}
              number={index + 1}
              title={
                <div className="flex items-center">
                  {step.icon}
                  <span className="ml-3">{step.title}</span>
                </div>
              }
              content={step.content}
              subSteps={step.subSteps}
            />
          ))}
          <div className=" text-gray-800 ">
            <div className="mt-8 mb-8 bg-white shadow-inner p-8 rounded-2xl max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                </div>
        
        
                <div className="w-1/2 m-auto space-y-8 mb-16">
                  <div className="flex items-center justify-between">
                      <p className="text-xl">Ready to Order? Go here and choose your tier!</p>
                      <Button onClick={handleClickOrder} variant="contained" className="w-[10rem] flex items-center">
                      Order
                      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                      </Button>
                  </div>
                
                  <div className="flex items-center justify-between">
                      <p className="text-xl">Check out our pricing for which option aligns with your needs.</p>
                      <Button onClick={handleClickPricing} variant="contained" className="w-[12rem] flex items-center">
                      Pricing
                      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                      </Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;