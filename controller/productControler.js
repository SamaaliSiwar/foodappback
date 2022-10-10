
import Product from "../Models/Product.js";
import productservices from "../services/productService.js";


export const senddata = async (req, res) => {
  let finisheddata = await productservices.send();
  res.send(finisheddata);
};

export const getProdById =async(req,res)=>{
  let finisheddata = await productservices.prodbyid();
  res.send(finisheddata);
 
  };
  export const getcategories =async(req,res)=>{
    let finisheddata = await productservices.  getcategories();
    res.send(finisheddata);
   
    }
