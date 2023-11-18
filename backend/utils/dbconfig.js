import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

//database connection
export const dbConnection = async ()=>{
    const MONGO_URI = process.env.MONGO_URI;
    try {
        await mongoose.connect(MONGO_URI)
        .then(()=>{
            console.log(":---- MongoDB Connected Successfully ----:");
        })
        .catch((error)=>{
            throw new Error(error);
        })
    } catch (error) {
        console.log(":---- MongoDB Connetion Failed ----:");
        console.log(":---- Connection Error ----:", error);
    }
}