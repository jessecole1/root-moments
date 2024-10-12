const User = require('../models/user.model');
const Order = require("../models/order.model");
const jwt = require('jsonwebtoken');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello, World!"
    })
}

module.exports.placeOrder = (request, response) => {
    Order.create(request.body)
    .then((placedOrder) => {
        response.status(200).json({ message: "Order successfully placed.", placedOrder: placedOrder });
    })
    .catch((err) => {
        response.status(500).json({ message: "Order unsuccessful in backend", err });
    })
}