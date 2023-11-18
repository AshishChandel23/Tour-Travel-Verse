import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const Router = express.Router();

//create tour
Router.post("/", verifyAdmin, createTour);
//update tour
Router.put("/:id", verifyAdmin, updateTour);
//delte tour
Router.delete("/:id", verifyAdmin, deleteTour);
//get one tour
Router.get("/:id", getSingleTour);
//get all tour
Router.get("/", getAllTour);
//get tour by search
Router.get("/search/getTourBySearch",getTourBySearch);
//get featured tours
Router.get("/search/getFeaturedTours",getFeaturedTours);
//get tour count
Router.get("/search/getTourCount",getTourCount);

export default Router;