import React from 'react';
import Button from '@mui/material/Button';

const PhotoScanPricingComponent = (props) => {

    const {pricingHeader, price, organizing, editing, storage, cloudStorage} = props;

    console.log("storage: " + storage);

    return (
        <div style={{boxShadow: "2px 4px 8px 0px rgba(46, 61, 73, 0.2", borderRadius: "10px", background: '#fcfeff', height: "500px"}} class="w-80 p-6 text-center flex flex-col items-center">
            <p class="font-serif m-4 font-bold">
                {pricingHeader}
            </p>
            <p class="font-serif text-5xl flex flex-col font-bold">
                <span>{price}</span> <span class="text-xl"> per photo</span>
            </p>
            <p class="font-bold font-serif mt-4">With<br/>Available Additions</p>
            <ul class="m-0 p-0 w-1/2 m-auto h-full flex flex-col justify-evenly font-serif font-bold">
                <li class="m-1 border-t-2">
                    <p class="mt-4">{organizing}</p>
                </li>
                <li class="m-1 border-t-2">
                    <p class="mt-4">{editing}</p>
                </li>
                <li class="m-1 border-t-2">
                    <p class="mt-4">{storage}</p>
                </li>
                <li class="m-1 border-t-2 mb-4">
                    <p class="mt-4">{cloudStorage}</p>
                </li>
            </ul>
            <Button variant="contained">Get Started</Button>
        </div>
    );
};

export default PhotoScanPricingComponent;
