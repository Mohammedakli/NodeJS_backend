const mongoose = require('mongoose');

const connectDB = async () => {
    const conn =await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    });
    console.log(`DB CONNECTED ON: ${conn.connection.host}`.cyan.underline.bold)
    //console.log("connected")
}

module.exports = connectDB;