const express = require('express');
const dotenv =  require('dotenv');
const bootcamps = require('./routes/bootcamps');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({ path: './config/config.env'})

//connect to database
connectDB();

const app = express();

// Dev logging middlware
if ( process.env.NODE_ENV === 'development')
    {
        app.use(morgan('dev'));
    }


// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

//Lunch the server
const server = app.listen(
    PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold)
)

//Handdle Errors
process.on('unhandledRejection', (err, message) => {
    console.log(`Error: ${err.message}`.red.bold);
    //Close server & exit
    server.close(() => process.exit(1));
})