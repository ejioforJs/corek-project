import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import path from 'path'
import courseRouter from './routes/courseRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import cors from "cors"
const port = process.env.PORT || 4000;

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .then(() => {
    app.listen(port, () =>{
      console.log(`server at http://localhost:${port}`)
  })
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/seed', seedRouter)
app.use('/api/courses', courseRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, "./frontend/build")))

app.get("*", (req, res) =>
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html")
  )
)

app.use((err,req,res,next) => {
    res.status(500).send({message:err.message})
})









































































