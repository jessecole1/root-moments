import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';

const OrderSuccessPage = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-[#F3EDE4] min-h-screen flex flex-col  items-center p-4" style={{ fontFamily: "IBM Plex Mono" }}>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-6">
            Thank you for your order. We've received your information and will process it shortly.
            </p>
            <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What's Next?</h2>
            <ul className="text-left list-disc list-inside">
                <li className="mb-2">You'll receive a confirmation email with your order details.</li>
                <li className="mb-2">Our team will review your order and contact you to confirm the start date.</li>
                <li className="mb-2">We'll also keep you updated on the progress of your order via email.</li>
            </ul>
            </div>
            <div className="flex flex-col space-y-3">
            <Link
                to="/facts"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
                Learn More About Our Process
            </Link>
            <Link
                to="/"
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
                Return to Home
            </Link>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default OrderSuccessPage;