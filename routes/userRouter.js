import express from "express";
// import Token from "../Models/Token.js";
// import User, { validate } from "../Models/User.js";
// import sendEmail from "../utils.js";
// import crypto from "crypto";
import { usersservices } from "../services/userService.js";
const router = express.Router();
router.post("/signup", usersservices.createuser);

router.get("/confirm/:token", usersservices.verifeteuser);

export default router;
