const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "https://rootmoments.netlify.app", methods: ['GET', 'POST'] }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config');

require('dotenv').config();

const port = 8000;

require('./routes/user.routes')(app);

app.listen(port, () => {console.log(`Listening on port ${port}`)});