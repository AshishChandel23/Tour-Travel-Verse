import express from 'express';
import { addReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const Router = express.Router();

Router.post("/:id/:tourId", verifyUser, addReview);

export default Router;