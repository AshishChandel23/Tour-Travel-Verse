import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tour.js';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/review.js'
import bookingRoute from './routes/booking.js';
import { dbConnection } from './utils/dbconfig.js';

dotenv.config();
const app = express();

const corsOptions = {
    origin : true,
    credentials : true
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
//Router auth
app.use("/api/auth",authRoute);
//Router Tour
app.use("/api/tour", tourRoute);
//Router User
app.use("/api/user", userRoute);
//Router Review
app.use("/api/review", reviewRoute);
//Router Booking
app.use("/api/booking", bookingRoute);

//error middleware
app.use((error, req, res, next)=>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong on Server::";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack : error.stack
    })
});

const PORT = process.env.PORT || 8001;
app.listen(PORT , ()=>{
    dbConnection();
    console.log(`Server is Running at PORT : ${PORT}`);
});