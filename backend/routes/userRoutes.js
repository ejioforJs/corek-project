import express from "express";
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import {generateToken} from '../utils.js';
import nodemailer from 'nodemailer'
import AccessHash from "../models/accessHashModel.js";

const userRouter = express.Router()

userRouter.get("/", async(req, res) => {
  const users = await User.find()
  res.send(users)
})

userRouter.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ username: req.body.username});
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid username or password' });
    })
  );

  userRouter.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
      });
      const user = await newUser.save();
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user),
      });
    })
  );

  userRouter.post("/reset-password", async(req, res) => {
    const {email} = req.body
    try {
      const user = await User.findOne({email})
      if(!user) {
        return res.status(422).send("User doesn't exist")
      }
        const hasHash = await AccessHash.findOne({userId: user._id})
        if(hasHash){
          return res.status(422).send("Email to reset password was already sent!")
        }
        const hash = new AccessHash({userId: user._id})
        await hash.save()

        const message = {
          from: process.env.GOOGLE_USER,
          // to: toUser.email // in production uncomment this
          to: user.email,
          subject: 'Your App - Reset Password',
          html: `
            <h3> Hello ${user.username} </h3>
            <p>To reset your password please follow this link: <a target="_" href="${process.env.DOMAIN}?hash=${hash._id}">reset password link</a></p>
            <p>Cheers</p>
            <p>Your Application Team</p>
          `
        };

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GOOGLE_USER,
            pass: process.env.GOOGLE_PASSWORD
          }
        })

        transporter.sendMail(message, function(err, info) {
          if (err) {
            console.log(err)
          } else {
            console.log(info)
          }
        })
        // await sendResetPasswordEmail({toUser: user.data, hash: hash.data._id})
        return res.json({message: "Please check your email to reset the password"})
    } catch (error) {
      return res.status(422).send("Oooops, Something went wrong!")
    }
  })

  userRouter.post('/reset-password/confirmation', async(req, res) => {
    const {password, hash} = req.body
    try {
      const aHash = await AccessHash.findOne({_id: hash})
      if(!aHash){
        return res.status(422).send("cannot reset the password")
      }
      const user = await User.updateOne({"_id": aHash.userId}, {$set: {"password": bcrypt.hashSync(password)}})
      // await user.save()
      const removehash = await AccessHash.remove({_id: aHash._id})
      return res.json({message: "password has been changed successfully, you can now login again"})
    } catch (error) {
      return res.status(422).send("Ooooops, Something went wrong")
    }
  })

  userRouter.post('/removeUser', async(req,res) => {
    const id = req.body.id
    await User.deleteOne({_id: id})
  })

  export default userRouter