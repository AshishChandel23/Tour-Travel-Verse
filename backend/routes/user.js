import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const Router = express.Router();

//update User
Router.put("/:id", verifyUser, updateUser);
//delte User
Router.delete("/:id", verifyUser, deleteUser);
//get one User
Router.get("/:id", verifyUser, getSingleUser);
//get all User
Router.get("/", verifyAdmin, getAllUser);

export default Router;