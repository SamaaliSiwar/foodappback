import { usersservices } from "../services/userService.js";


export const senduser = async (req, res) => {
  let finisheddata = await usersservices.createuser();
  res.send(finisheddata);
};

export const verification = async (req, res) => {
    let finisheddata = await usersservices.verifeteuser();
    res.send(finisheddata);
  };
  export const signin = async (req, res) => {
    let finisheddata = await usersservices.signin();
    res.send(finisheddata);
  };
  export const signinphone = async (req, res) => {
    let finisheddata = await usersservices.signinphone();
    res.send(finisheddata);
  };
export const forgetpass= async(req,res)=>{
  let finisheddata=await usersservices.forgot();
  res.send(finisheddata);
}