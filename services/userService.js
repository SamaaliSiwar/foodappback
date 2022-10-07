import User from "../Models/User.js";
import sendEmail from "../utils.js";
import bcrypt from "bcrypt";
import Token from "../Models/Token.js";
import crypto from "crypto"
export const usersservices={
  createuser:async (req,res)=>{

    // Insert the new user if they do not exist yet.
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send("User with given email already exist!");

    user = await new User({
      name: req.body.name,
      email: req.body.email,
      password:req.body.password
    }).save();

    // Hash the password before saving into database.
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    // Generating the token for user verification
    const token = new Token({ userId: user._id, token: crypto.randomBytes(16).toString('hex') });
    await token.save();
    console.log('$token')

    // Send varification email
    const link = `${process.env.BASE_URL}/users/confirm/${token.token}`;
    await sendEmail(user.email, "Email Verification\n", link);
    console.log(token)
    res.status(200).send({
        message: "Email Verification link sent to your email",
    });
  },
  verifeteuser:async (req, res) => {
    try {
      const token = await Token.findOne({
        token: req.params.token,
      });
      console.log(token.userId);
      if (!token) return res.status(400).send("Invalid link");
  
      await User.updateOne({ _id: token.userId }, { $set: { verified: true } });
      await Token.findByIdAndRemove(token._id);
  
      res.send("email verified sucessfully");
    } catch (error) {
      res.status(400).send("An error occured");
    }
  }

}


