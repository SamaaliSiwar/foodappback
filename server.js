import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/products',productRouter);
app.use("/api/users", userRouter);



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
app.get('/', (req, res) => {
    console.log('Server is ready');
  });
  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  const port = process.env.PORT || 8088;
  app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
  });