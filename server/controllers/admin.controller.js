const Admin = require('../models/admin.model');
const Order = require("../models/order.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendOrderNotification = require('../mailer');
const sendOrderNotificationToCustomer = require('../mailer');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello, World!"
    })
}

module.exports.placeOrder = (request, response) => {
    const orderDetails = request.body;
    Order.create(orderDetails)
    .then((placedOrder) => {
        // sendOrderNotificationToCustomer(orderDetails);
        sendOrderNotification(orderDetails);
        response.status(200).json({ message: "Order successfully placed.", placedOrder: placedOrder });
    })
    .catch((err) => {
        response.status(500).json({ message: "Order unsuccessful in backend", err });
    })
}

module.exports.adminRegister = (request, response) => {
    Admin.create(request.body)
    .then((admin) => {
        const adminToken = jwt.sign({
            id: admin._id
        }, process.env.FIRST_SECRET_KEY);

        response.cookie("admintoken", adminToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            // domain: '.rootmoments.netlify.app',
        });
        response.json({ message: "Admin Successfully Registered", admin: admin, cookie: adminToken });
    })
    .catch((err) => {
        response.json(err);
    })
}

module.exports.adminLogin = async (request, response) => {
    try {
        const admin = await Admin.findOne({ email: request.body.email });
        if (!admin) {
            return response.sendStatus(400);
        }
        console.log("adminLogin -> admin: " + admin);
        // Verify the password
        const isPasswordValid = await bcrypt.compare(request.body.password, admin.password);
        if (!isPasswordValid) {
            return response.sendStatus(400);
        }
        console.log("adminLogin -> isPasswordValid: " + isPasswordValid);
        const adminToken = jwt.sign({
            id: admin._id
        }, process.env.FIRST_SECRET_KEY);
        console.log("adminLogin -> adminToken: " + adminToken);
        response.cookie("admintoken", adminToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            domain: '.rootmoments.netlify.app',
            // maxAge: 24 * 60 * 60 * 1000 * 7,
        })
        .json({ message: "Admin Successfully Logged In", admin: admin, cookie: adminToken });
    } catch (err) {
        response.status(500).json({ error: "Server error with login" });
    }
};

module.exports.adminLogout = (request, response) => {
    response.clearCookie("admintoken", {
        // path: '/',  // Ensure this matches how the cookie was set
        domain: '.rootmoments.netlify.app',  // Use the same domain if specified while setting the cookie
        secure: true,  // Same as when the cookie was created
        httpOnly: true,  // If this was set when the cookie was created
        sameSite: 'None'
    });
    console.log("cookie: " + request.cookie);
    response.sendStatus(200);
};

module.exports.getAdmin = async (request, response) => {
    const token = request.cookies.admintoken;
    console.log("TOKEN? : " + token);
    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.FIRST_SECRET_KEY);
            Admin.findOne({ _id: decodedToken.id })
            .then(admin => {
                if (admin) {
                    console.log("Found an admin and responding with it, admin: admin, loggedInStatus: true")
                    response.json({ admin: admin, loggedInStatus: true })
                } else {
                    console.log("Couldn't find an admin and responding without it, admin: null, loggedInStatus: false")
                    response.status(200).json({ admin: null, loggedInStatus: false })
                }
            })
            .catch(err => {
                console.log("Error.", err);
                response.status(500).json({ error: "Server error" })
            });
        } catch (err) {
            response.status(200).json({ admin: null, loggedInStatus: false })
        }
    } else {
        response.status(200).json({ admin: null, loggedInStatus: false })
    }
};

module.exports.getAllOrders = (request, response) => {
    Order.find({})
        .sort({ createdAt: -1 }) // Sort by creation date, newest first
        .then(allOrders => {
            response.json(allOrders);
        })
        .catch(err => {
            response.status(400).json({ message: "Something went wrong", error: err });
        });
};

module.exports.logout = (request, response) => {
    response.clearCookie("admintoken");
    response.sendStatus(200);
}