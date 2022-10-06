import express, { Router } from "express";

import { senddata } from "../controller/productControler.js";

const productRouter = express.Router();


  productRouter.get('/seed', senddata);
  productRouter.get(
    '/:id',
    
  );
  export default productRouter;
