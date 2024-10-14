const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const allowedOrigins = [
    'https://rootmoments.netlify.app',
    'http://localhost:3000'
]

app.use(cookieParser());
// app.use(cors({ 
//     credentials: true, 
//     origin: function (origin, callback) {
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             return callback(new Error("CORS policy doesn't allow this origin"), false);
//         }
//         return callback(null, true);
//     }, 
//     methods: ['GET', 'POST'] }));

app.use(cors({
    origin: 'https://your-frontend.netlify.app',  // Replace with your Netlify domain
    credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config');

require('dotenv').config();

const port = 8000;

require('./routes/user.routes')(app);

app.listen(port, () => {console.log(`Listening on port ${port}`)});