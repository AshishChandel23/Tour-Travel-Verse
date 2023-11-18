import express from 'express';
import { addBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'  
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const Router = express.Router();

Router.post("/:id", verifyUser, addBooking);
Router.get("/:id", verifyUser, getBooking);
Router.get("/", verifyAdmin, getAllBooking);

export default Router;