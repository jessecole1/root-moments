import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';

const Input = ({ label, type, name, value, onChange, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

const OrderForm = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numberOfPhotographs: '',
    package: '',
    serviceType: '',
    address: '',
    unit: '',
    city: '',
    zip: '',
    startDate: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const packageOptions = [
    { value: 'classic', label: 'Classic Preservation' },
    { value: 'memory', label: 'Memory Keeper' },
    { value: 'premium', label: 'Premium Archival' }
  ];

  const serviceOptions = [
    { value: 'inHome', label: 'In Home' },
    { value: 'pickUp', label: 'Pick Up' },
    { value: 'dropOff', label: 'Drop Off' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://root-moments.onrender.com/place-order", formData, {withCredentials: true})
      .then((response) => {
        console.log("Form submitted: ", response.data);
        navigate("/order-success");  // Redirect to the success page
      })
      .catch((err) => {
        console.log("Error submitting the form: ", err);
        // You might want to show an error message to the user here
      });
  };

  return (
    <form style={{ fontFamily: "IBM Plex Mono" }} onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Order Form</h2>
      
      <div className="flex gap-4 mb-4">
        <Input label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <Input label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      
      <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
      <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      <Input label="Number of Photographs" type="number" name="numberOfPhotographs" value={formData.numberOfPhotographs} onChange={handleChange} required />
      
      <Select label="Package" name="package" value={formData.package} onChange={handleChange} options={packageOptions} required />
      
      {formData.package && (
        <div className="mb-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold mb-2">Package Details:</h3>
          {formData.package === 'classic' && <p>Includes organization, scanning, and editing. For Loose Photos, Pocket style albums, and memorabilia.</p>}
          {formData.package === 'memory' && <p>Includes everything in Classic Preservation plus denoising using Lightroom. For everything in Classic Preservation, Adhesive style albums, and photo backs with annotations.</p>}
          {formData.package === 'premium' && <p>Includes everything in Memory Keeper plus uploading to Google Photos for easy access and organization into digital albums. For anything in Memory Keeper and full page scrapbooks.</p>}
        </div>
      )}
      
      <Select label="Service Type" name="serviceType" value={formData.serviceType} onChange={handleChange} options={serviceOptions} required />
      
      {(formData.serviceType === 'inHome' || formData.serviceType === 'pickUp') && (
        <div className="mb-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold mb-2">Address:</h3>
          <Input label="Street" type="text" name="address" value={formData.address} onChange={handleChange} required />
          <Input label="Unit Number" type="text" name="unit" value={formData.unit} onChange={handleChange} />
          <Input label="City" type="text" name="city" value={formData.city} onChange={handleChange} required />
          <Input label="ZIP Code" type="text" name="zip" value={formData.zip} onChange={handleChange} required />
        </div>
      )}
      
      <Input label="Preferred Start Date" type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
        ></textarea>
      </div>
      
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Submit Order
      </button>
    </form>
  );
};

const OrderPage = () => {
  // ... [Previous HowItWorksPage component code]
  
  return (
    <div style={{ fontFamily: "IBM Plex Mono" }}>
        <Navbar />
        <div className="bg-[#F3EDE4] font-sans min-h-screen flex flex-col">
        <div className="max-w-3xl mx-auto p-8 flex-grow">
            <h1 className="text-4xl font-bold mb-8">Place an Order</h1>
            
            {/* ... [Previous steps rendering code] */}
            
            <div className="mt-12">
            <OrderForm />
            </div>
        </div>
        <Footer />
        </div>
    </div>
  );
};

export default OrderPage;