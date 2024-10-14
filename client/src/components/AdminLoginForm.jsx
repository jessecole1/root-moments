import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAppContext } from './AppProvider';
import Navbar from './Navbar';

const Input = ({ label, type, name, value, onChange, required, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-300'
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const AdminLoginForm = () => {

  const navigate = useNavigate();
  const { adminLoggedIn, checkIfLoggedIn, backEnd } = useAppContext();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear the error for this field when the user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post(`${backEnd}/admin-login`, formData, {withCredentials: true})
        .then((response) => {
          console.log("Login successful: ", response.data);
          checkIfLoggedIn(); // Update the global state
        })
        .catch((err) => {
          console.log("Login error: ", err);
          if (err.response && err.response.data && err.response.data.error) {
            setErrors({ general: err.response.data.error });
          } else {
            setErrors({ general: "An error occurred. Please try again." });
          }
        });
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  useEffect(() => {
    if (adminLoggedIn) {
      navigate("/dashboard");
    }
  }, [adminLoggedIn, navigate]);

  return (
    <div className=''>
        <Navbar />
        <br/><br/>
        <div className="">
            <form style={{ fontFamily: "IBM Plex Mono" }} onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-2xl max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            
            {errors.general && <p className="text-red-500 mb-4 text-center">{errors.general}</p>}

            <Input 
                label="Email" 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                error={errors.email} 
            />
            
            <Input 
                label="Password" 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                error={errors.password} 
            />
            
            <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
            >
                Log In
            </button>
            </form>
        </div>
    </div>
  );
};

export default AdminLoginForm;