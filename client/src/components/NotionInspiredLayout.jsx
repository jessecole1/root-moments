import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@mui/material/Button';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import dog from '../img/dog.jpeg';
import cat from '../img/cat.jpg';

import '../embed.css';
import '../components/style.css';

const NotionInspiredLayout = () => {
  return (
    <div className=" bg-[#F3EDE4] text-gray-800 min-h-screen p-8">
      <div className="bg-white shadow-2xl p-8 rounded-2xl max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-8"><span class="text-7xl"><span class="text-indigo-600">Take control</span> of your photography.</span><br/><br/></h1>
        
        {/* <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 class="text-4xl font-bold">Digitally Enhanced.</h1>
            <br/>
            <h2 className="text-2xl font-semibold mb-4">Manage With Ease.</h2>
            <br/>
            <p className="text-xl mb-8">Keep Your Photos With You. Anytime, Anywhere.</p>

          </div>
          <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400">
            <ReactCompareSlider class="shadow-2xl m-auto mt-8 mb-8 rounded-2xl  " itemOne={<ReactCompareSliderImage src={dog} />}
            itemTwo={<ReactCompareSliderImage src={cat} />} />
          </div>
          
        </div> */}

        <div className=" flex flex-col justify-evenly">
          <div className="flex flex-row justify-evenly flex-wrap">
            <div className="notion_class min-w-[425px] md:w-2/5 flex flex-col justify-evenly">
              <div class="flex flex-col justify-evenly h-1/3">
                <p className="text-4xl font-bold">Digitally Enhance</p>
                <p className="notion_text">
                  Improve sharpness and overall image quality.
                </p>
              </div>
              <div class="flex flex-col justify-evenly h-1/3">
                <p className="text-4xl font-bold">Denoising</p>
                <p className="notion_text">
                  Visual noise and grain reduction for clean and sharper images.
                </p>
              </div>
            </div>
            <div className="notion_class flex items-center justify-center text-gray-400">
              <ReactCompareSlider class="shadow-2xl m-auto mt-8 mb-8 rounded-2xl  " itemOne={<ReactCompareSliderImage src={dog} />}
              itemTwo={<ReactCompareSliderImage src={cat} />} />
            </div>
          </div>
          <div className="flex flex-row-reverse flex-wrap justify-evenly">
            <div className="notion_class pl-8 min-w-[425px] md:w-2/5 flex flex-col justify-evenly">
              <div class="flex flex-col justify-evenly h-1/3">
                <p className="text-4xl font-bold">Auto-Correction</p>
                <p className="notion_text">
                  Adjusting exposure, contrast, and color balance for stunning quality.
                </p>
              </div>
            </div>
            <div className="notion_class flex items-center justify-center text-gray-400">
              <ReactCompareSlider class="shadow-2xl m-auto mt-8 mb-8 rounded-2xl  " itemOne={<ReactCompareSliderImage src={dog} />}
              itemTwo={<ReactCompareSliderImage src={cat} />} />
            </div>
          </div>
        </div>
        
        
        {/* <div className="w-1/2 m-auto space-y-8 mb-16">
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
        </div> */}
      </div>
    </div>
  );
};

export default NotionInspiredLayout;