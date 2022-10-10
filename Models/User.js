import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
   
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  resetPasswordToken:{
    type: String,
    default: ""
  },
  verified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("user", userSchema);
export default User;


