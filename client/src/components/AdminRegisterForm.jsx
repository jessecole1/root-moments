import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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

const AdminRegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/admin/register", formData, {withCredentials: true})
      .then((response) => {
        console.log("Registration successful: ", response.data);
        navigate("/admin-login"); // Redirect to admin login page on successful registration
      })
      .catch((err) => {
        console.log("Registration error: ", err);
        if (err.response && err.response.data && err.response.data.errors) {
          // Handle mongoose validation errors
          const backendErrors = err.response.data.errors;
          const formattedErrors = {};
          for (let field in backendErrors) {
            formattedErrors[field] = backendErrors[field].message;
          }
          setErrors(formattedErrors);
        } else if (err.response && err.response.data && err.response.data.message) {
          // Handle custom error messages
          setErrors({ general: err.response.data.message });
        } else {
          setErrors({ general: "An error occurred. Please try again." });
        }
      });
  };

  return (
    <form style={{ fontFamily: "IBM Plex Mono" }} onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Registration</h2>
      
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

      <Input 
        label="Confirm Password" 
        type="password" 
        name="confirmPassword" 
        value={formData.confirmPassword} 
        onChange={handleChange} 
        required 
        error={errors.confirmPassword} 
      />
      
      <button 
        type="submit" 
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
      >
        Register
      </button>

      <p className="mt-4 text-center">
        Already have an account? <Link to="/admin/login" className="text-indigo-600 hover:text-indigo-800">Log in here</Link>
      </p>
    </form>
  );
};

export default AdminRegisterForm;