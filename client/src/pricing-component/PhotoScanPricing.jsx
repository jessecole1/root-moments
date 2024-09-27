import React from 'react';

import PhotoScanPricingComponent from './PhotoScanPricingComponent';

const PhotoScanPricing = () => {



    return (
        <div>
            <label class="flex justify-evenly flex-row items-start" style={{height: "700px"}}>
                <PhotoScanPricingComponent
                    pricingHeader="Starting at"
                    price={"¢0.25"}
                    organizing={`Organizing`}
                    editing={`Editing`}
                    storage={`Thumb Drive`}
                    cloudStorage={`Cloud Storage`}
                />

                {/* <PhotoScanPricingComponent
                    pricingHeader="Premium"
                    price={"¢0.50"}
                    organizing={`Organizing`}
                    editing={`Editing`}
                    storage={[`Thumb Drive`, 
                        `Cloud Upload`
                    ]}
                /> */}
            </label>




            {/* <h3>Pricing</h3>
            <p>Choose which services you would like to include with your order</p>
            
            <table style={{width: "600px", height: "500px"}} class="mb-8 m-auto bg-slate-500 text-white">
                <tr>
                    <th></th>
                    <th>Standard</th>
                    <th>Premium</th>
                </tr>
                <tr>
                    <th>Scan</th>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                </tr>
                <tr>
                    <th>Organize</th>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                </tr>
                <tr>
                    <th>Editing</th>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                </tr>
                <tr>
                    <th>Thumb Drive</th>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                </tr>
                <tr>
                    <th>Upload to Cloud</th>
                    <td></td>
                    <td><svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></td>
                </tr>
            </table> */}
        </div>
    );
};

export default PhotoScanPricing;
