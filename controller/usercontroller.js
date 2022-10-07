import { usersservices } from "../services/userService.js";


export const senduser = async (req, res) => {
  let finisheddata = await usersservices.createuser();
  res.send(finisheddata);
};
export const verification = async (req, res) => {
    let finisheddata = await usersservices.verifeteuser();
    res.send(finisheddata);
  };