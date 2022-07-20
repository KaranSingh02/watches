const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:WRqu1qQTlOpSqn8E@luxerangedb.lvzn9xu.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {

    await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    console.log("db connected");

}



module.exports = connectDB;


