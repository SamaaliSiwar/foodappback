import Joi from 'joi';
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
  password: { type: String, required: true },
  resetPasswordToken:{
    type: String,
    default: ""
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

 const User = mongoose.model("user", userSchema);

export const validate = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().password().required(),

  });
  return schema.validate(user);
};
export default User;


/*const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber:{type:String,required:true},
    password: { type: String, required: true },
    resetPasswordToken:{
      type: String,
      default: ""
    },
    isAdmin: { type: Boolean, default: false, required: true },
    emailVerified: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
*/