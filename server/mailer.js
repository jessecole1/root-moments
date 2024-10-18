const nodemailer = require('nodemailer');

// Create transporter object using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cole.j.jesse@gmail.com',
        pass: process.env.EMAIL_PASS
    }
});

const formatOrderDetails = (details) => {
    return `
        <!DOCTYPE html>
        <html land="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Order Notification</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
                h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
                .order-details { background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 5px; padding: 15px; margin-top: 20px; }
                .order-details p { margin: 10px 0; }
                .label { font-weight: bold; color: #2c3e50; }
                ul {list-style-type: none}
            </style>
        </head>
        <body>
            <div class="container">
                <h1>New Order Placed</h1>
                <p>A new order has been placed. Here are the details:</p>
            
                <div class="order-details">
                    <p><span class="label">First Name:</span> ${details.firstName}</p>
                    <p><span class="label">Last Name:</span> ${details.lastName}</p>
                    <p><span class="label">Email:</span> ${details.email}</p>
                    <p><span class="label">Phone Number:</span> ${details.phone}</p>
                    <p><span class="label">Where: </span></p>
                    <ul>
                        <li>${details.address}</li>
                        <li>${details.unit}</li>
                        <li>${details.city}</li>
                        <li>${details.zip}</li>
                    </ul>
                    <p><span class="label">Number of Photographs:</span> ${details.numberOfPhotographs}</p>
                    <p><span class="label">Package:</span> ${details.package}</p>
                    <p><span class="label">Service Type:</span> ${details.serviceType}</p>
                    <p><span class="label">Preferred Start Date:</span> ${details.startDate}</p>
                    <p><span class="label">Additional Notes:</span></p>
                    <p>${details.notes}</p>
                </div>
                <p>Please review this order and take necessary actions.</p>
                <p>Best regards,<br>Your Order Management System</p>
            </div>
        </body>
        <html>
    `;
}

// Send email when an order is placed
const sendOrderNotification = async (orderDetails) => {
    const mailOptions = {
        from: process.env.TEMP_EMAIL,
        to: process.env.TEMP_EMAIL,
        subject: "New Order Placed!",
        html: formatOrderDetails(orderDetails)
        // text: `A new order has been placed.\n\nOrder Details:\n${JSON.stringify(orderDetails, null, 2)}`
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
// module.exports = sendOrderNotificationToCustomer;