import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const NotionInspiredLayoutTwo = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-[#F3EDE4] text-gray-800  p-8">
            <div className="mt-8 mb-8 bg-white shadow-2xl p-8 rounded-2xl max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
            </div>
        
        
            <div className="w-1/2 m-auto space-y-8 mb-16">
            <div className="flex items-center justify-between">
                <p className="text-xl">View our services that best meet your needs.</p>
                <Button onClick={() => navigate("/how-it-works")} variant="contained" className="w-[12rem] flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
            
            {/* <div className="flex items-center justify-between">
                <p className="text-xl">Read what other people have shared about their experience.</p>
                <Button variant="contained" className="w-[12rem] flex items-center">
                Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div> */}
        </div>
      </div>
    </div>
    );
};

export default NotionInspiredLayoutTwo;
