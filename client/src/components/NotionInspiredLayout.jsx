import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@mui/material/Button';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import dog from '../img/dog.jpeg';
import cat from '../img/cat.jpg';

const NotionInspiredLayout = () => {
  return (
    <div className=" bg-white text-gray-800 min-h-screen p-8">
      <div className=" shadow-2xl p-8 rounded-2xl max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-16"><span class="text-7xl"><span class="text-indigo-600">Take control</span> of your photography.</span><br/><br/></h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 class="text-4xl font-bold">Manage it with ease.</h1>
            <br/>
            <h2 className="text-2xl font-semibold mb-4">Digitally enhanced copies with accurate color matching.</h2>
            <br/>
            <p className="text-xl mb-8">Easy to keep track, store in one consolidated thumb-drive / flash-drive, Google Cloud account, or hard drive.</p>

          </div>
          <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400">
            <ReactCompareSlider class="shadow-2xl m-auto mt-8 mb-8 rounded-2xl  " itemOne={<ReactCompareSliderImage src={dog} />}
            itemTwo={<ReactCompareSliderImage src={cat} />} />
          </div>
        </div>
        
        
        <div className="w-1/2 m-auto space-y-8 mb-16">
          <div className="flex items-center justify-between">
            <p className="text-xl">See our services that best meet your needs.</p>
            <Button variant="contained" className="w-[10rem] flex items-center">
              Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-xl">Read what other people have shared about their experience.</p>
            <Button variant="contained" className="w-[12rem] flex items-center">
              Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotionInspiredLayout;