import React, { useState } from 'react';

const InHome = (props) => {

    const {serviceHeader, thumbDrive, cloudStorage, organization, enhancing} = props;

    return (
        <div style={{boxShadow: "2px 4px 8px 0px rgba(46, 61, 73, 0.2", borderRadius: "10px", background: '#fcfeff', height: "350px"}} class="font-serif w-64 text-center flex flex-col items-center">
            <div class="rounded-lg w-full bg-rose-800">
                <p class="text-white border-gray-700 p-0 text-3xl font-serif m-4 font-bold">
                    {serviceHeader}
                </p>
            </div>
            <div class="italic font-bold p-4 flex flex-col justify-evenly h-full">
                <p class="mt-4">
                    Thumb Drive: {thumbDrive}
                </p>
                <hr></hr>
                <p class=" ">
                    Cloud Storage: {cloudStorage}
                </p>
                <hr></hr>
                <p class="">
                    Organization: {organization}
                </p>
                <hr></hr>
                <p class="">
                    Photo Enhancement: {enhancing}
                </p>
            </div>
        </div>
    );
};

export default InHome;
