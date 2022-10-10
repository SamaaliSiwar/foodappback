import express from "express";

import { getcategories, senddata } from "../controller/productControler.js";
import productservices from "../services/productService.js";

const router = express.Router();


  router.get('/seed', senddata);
  router.get('/:id',productservices.prodbyid);
  router.get('/categories' , getcategories);
  export default router;
