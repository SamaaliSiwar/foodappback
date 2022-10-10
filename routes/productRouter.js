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
/* Add Product */
router.post("/addproduct", productservices.addProduct);
/* Get One Product */
router.get("/getoneproduct/:id", productservices.getOneProduct);
/* List Product */
router.get("/listproduct", productservices.listProduct);
/* Update Product */
router.put("/updateproduct/:id", productservices.updateProduct);
 /* Delete a Product with id */
 router.delete("/deleteoneproduct/:id", productservices.deleteOneProduct);
  /* Delete All Product */
 router.delete("/", productservices.deleteAllProduct);
export default router;
