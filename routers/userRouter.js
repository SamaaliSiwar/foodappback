import express from "express";
import Token from "../Models/Token.js";
import User, { validate } from "../Models/User.js";
import sendEmail, { verified } from "../utils.js";
import crypto from "crypto";
import { usersservices } from "../services/userService.js";
const userRouter = express.Router();
//cration de compte
userRouter.post("/signup", usersservices.createuser);
//validation de compte
userRouter.get("/confirm/:token", usersservices.verifeteuser);
//create singin router
userRouter.post('/signin',verified, usersservices.signin);

export default userRouter;
