import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import path from 'path'
import courseRouter from './routes/courseRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/seed', seedRouter)
app.use('/api/courses', courseRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, "/frontend/build")))

app.get("*", function(req, res) {
  res.sendFile(
    path.join(__dirname, "/frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  )
})

app.use((err,req,res,next) => {
    res.status(500).send({message:err.message})
})

const port = process.env.PORT || 4000;
app.listen(port, () =>{
    console.log(`server at http://localhost:${port}`)
})









































































