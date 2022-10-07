import express from "express";
import Token from "../Models/Token.js";
import User, { validate } from "../Models/User.js";
import sendEmail from "../utils.js";
import crypto from "crypto";
import { usersservices } from "../services/userService.js";
const userRouter = express.Router();
userRouter.post("/signup", usersservices.createuser);

userRouter.get("/confirm/:token", usersservices.verifeteuser);

export default userRouter;
