require('dotenv').config();
const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/root-moments", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("Established a connection to the database."))
// .catch(err => console.log("Something went wrong when connecting to the database", err))

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((error) => console.error('Error connecting to MongoDB:', error));