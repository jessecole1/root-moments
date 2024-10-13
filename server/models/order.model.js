const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, message="First name required"]
    },
    lastName: {
        type: String,
        required: [true, message="Last name required"]
    },
    email: {
        type: String,
        required: [true, message="Email is required"]
    },
    phone: {
        type: String, 
        required: [true, message="Phone number is required"]
    },
    numberOfPhotographs: {
        type: Number,
        required: [true, message="Approximate number of photos"]
    },
    package: {
        type: String, 
        required: [true, message="Please select a package"]
    },
    serviceType: {
        type: String, 
        required: [true, message="Please select a Service Type"]
    },
    address: {
        type: String
    },
    unit: {
        type: String
    },
    city: {
        type: String
    },
    zip: {
        type: String
    },
    startDate: {
        type: String
    },
    notes: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);