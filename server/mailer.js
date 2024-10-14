const nodemailer = require('nodemailer');

// Create transporter object using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cole.j.jesse@gmail.com',
        pass: process.env.EMAIL_PASS
    }
});

// Send email when an order is placed
const sendOrderNotification = async (orderDetails) => {
    const mailOptions = {
        from: process.env.TEMP_EMAIL,
        to: process.env.TEMP_EMAIL,
        subject: "New Order Placed!",
        text: `A new order has been placed.\n\nOrder Details:\n${JSON.stringify(orderDetails, null, 2)}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email order notification sent successfully to admin");
    } catch (err) {
        console.log("Error sending email:", err);
    }
};

// Send Confirmation Email to Customer
const sendOrderNotificationToCustomer = async (orderDetails) => {
    const mailOptions = {
        from: process.env.TEMP_EMAIL,
        to: process.env.TEMP_EMAIL,
        subject: 'We Received Your Order!',
        text:  `Thank you for your order! We will reach out shortly.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email order confirmation sent successfully to client")
    } catch (err) {
        console.log("Error sending email to customer:", err)
    }
}

module.exports = sendOrderNotification;
module.exports = sendOrderNotificationToCustomer;