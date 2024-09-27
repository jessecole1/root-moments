const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello, World!"
    })
}