const express = require('express');
const app = express();
const server = require('http').Server(app);
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./DB/index');
const path = require('path');



dotenv.config();
app.use(cors());
// app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json({extended:false}));
require('./user/route')(app);
connectDB();

server.listen(process.env.PORT, () => {
    console.log('Application running on port no', server.address().port);
});