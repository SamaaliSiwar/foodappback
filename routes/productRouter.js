import express from "express";

import { getcategories, senddata } from "../controller/productControler.js";
import Product from "../Models/Product.js";
import productservices from "../services/productService.js";
import expressAsyncHandler from "express-async-handler";

const router = express.Router();


router.get("/cat", async (req, res) => {
  console.log(req.body)
  const products = await Product.find().distinct("categorie");
  res.send(products);
});
router.get("/seed", senddata);
router.get("/:id", productservices.prodbyid);


export default router;
