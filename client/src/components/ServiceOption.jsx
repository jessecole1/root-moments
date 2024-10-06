import React, { useState } from 'react';

const InHome = (props) => {

    const {photoTypes, serviceHeader, thumbDrive, cloudStorage, organization, enhancing} = props;

    return (
        <div style={{borderRadius: "10px", background: '#fcfeff'}} className={`mb-8 servOption h-fit font-serif w-64 text-center flex flex-col items-center`}>
            <div class="rounded-lg w-full bg-[#FF6500]">
                <p class="text-white border-gray-700 p-0 text-3xl font-serif m-4 font-bold">
                    {serviceHeader}
                </p>
            </div>
            <div class="italic font-bold p-4 flex flex-col justify-evenly ">
                <p class="mt-4 h-16">
                    Thumb Drive: {thumbDrive}
                </p>
                {
                    cloudStorage !== "Unavailable" ? (
                        <div>
                            <hr></hr>
                            <br/>
                            <p class="h-16 ">
                                Cloud Storage: {cloudStorage}
                            </p>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
               
                <hr></hr>
                <br/>
                <p class="h-16">
                    Organization: {organization}
                </p>
                <hr></hr>
                <br/>
                <p class="h-16">
                    Photo Enhancement: {enhancing}
                </p>
                <hr></hr>
                <br/>
                <p>
                    <ul class="list-disc">
                        {photoTypes && photoTypes.length > 0 ? (
                            photoTypes.map((type, index) => (
                                <li class="w-1/3 m-auto mb-4" key={index}>{type}</li>
                            ))
                        ) : (
                            <li>No photo types available</li>
                        )}
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default InHome;
