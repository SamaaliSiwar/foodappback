import express from "express";

import { senddata } from "../controller/productControler.js";

const router = express.Router();


  router.get('/seed', senddata);
  router.get(
    '/:id',
    
  );
  export default router;
