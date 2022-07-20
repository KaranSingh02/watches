const app = require('express')();
const expressip = require('express-ip');
const server = require('http').Server(app);
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./DB/index');
dotenv.config();
require('./user/route')(app);
app.use(expressip().getIpInfoMiddleware);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

Util = require('./shared/util');
server.listen(process.env.PORT, () => {
    console.log('Application running on port no', server.address().port);
});