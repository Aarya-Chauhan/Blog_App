const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


//env config
dotenv.config();

//router import
const userRoute = require('./Routes/userRoutes');
const blogRoute = require('./Routes/blogRoutes');

//mongoDB connection
connectDB();

//rest API
const app = express()


//MIddlewares

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/blog',blogRoute);

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, ()=>{
    console.log("server started ");
})