const app = require('express')();
const server = require('http').Server(app);
const connectDB = require('./DB/index');
require('./routes')(app);
connectDB();
server.listen(process.env.PORT, () => {
    console.log('Application running on port no', server.address().port);
});