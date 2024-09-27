const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email address"
        }
    },
    phoneNumber: {type: Number},
    address: {type: String},
    prefDateTime: {type: Date},
    additionalInfo: {type: String},
    package: {type: String},
    numOfPhotos: {type: Number},
    editing: {type: Boolean},
    organizing: {type: Boolean},
    thumbDrive: {type: Boolean},
    cloudDrive: {type: Boolean},
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);