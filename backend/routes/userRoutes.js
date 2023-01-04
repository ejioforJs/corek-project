import express from "express";
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';

const userRouter = express.Router()

userRouter.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            username: user.name,
            email: user.email,
            token: generateToken(user),
          });
          return;
        }
        else{
            res.status(401).send({message: "wrong password"})
        }
      }
      res.status(401).send({ message: 'Invalid username or password' });
    })
  );

  userRouter.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
      const newUser = new User({
        username: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
      });
      const user = await newUser.save();
      res.send({
        _id: user._id,
        username: user.name,
        email: user.email,
        token: generateToken(user),
      });
    })
  );

  export default userRouter