import express  from "express";
import { login, register } from "../controllers/authController.js";

const Router = express.Router();

//register
Router.post("/register", register);
//login
Router.post("/login", login);

export default Router;