import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils.js";
import nodemailer from "nodemailer";
import AccessHash from "../models/accessHashModel.js";
import PendingUser from "../models/pendingUserModel.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

userRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
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
    res.status(401).send("invalid username or password");
  })
);

userRouter.post("/signup", async (req, res) => {
  const rUser = await User.find({ email: req.body.email });
  const pUser = await PendingUser.find({ email: req.body.email });
  try {
    if (rUser.length || pUser.length) {
      return res.status(422).send("Email is already registered");
    }
    const newUser = new PendingUser({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    const hash = newUser._id;
    res.send({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user),
    });
    const message = {
      from: process.env.GOOGLE_USER,
      // to: toUser.email // in production uncomment this
      to: newUser.email,
      subject: "Corek Team - Activate your account",
      html: `
            <h3> Hello ${newUser.username} </h3>
            <p>Thank you for registering into this wonderful elearning website, just one more step...</p>
            <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/register/activate?hashs=${hash}">Activate Account</a></p>
            <p>Cheers!!</p>
            <p>Corek Team</p>
          `,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
    // await sendResetPasswordEmail({toUser: user.data, hash: hash.data._id})
    // return res.json({message: "Please check your email to reset the password"})
  } catch (error) {
    return res.status(422).send("Oooops, Something went wrong!");
  }
});

userRouter.get("/activate/:hash", async (req, res) => {
  const hash = req.params.hash;
  try {
    const user = await PendingUser.find({_id: hash});
    const mainUser = user[0]
    const newUser = new User({
      username: mainUser.username,
      email: mainUser.email,
      password: mainUser.password
    });
    await newUser.save();
    await PendingUser.deleteOne({_id: mainUser._id})
    // await user.remove();
    return res.status(200).send("Congrats, Your account has been activated");
  } catch {
    // return res.status(422).send("User cannot be activated");
  }
});

userRouter.post("/reset-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(422).send("User doesn't exist");
    }
    const hasHash = await AccessHash.findOne({ userId: user._id });
    if (hasHash) {
      return res.status(422).send("Email to reset password was already sent!");
    }
    const hash = new AccessHash({ userId: user._id });
    await hash.save();

    const message = {
      from: process.env.GOOGLE_USER,
      // to: toUser.email // in production uncomment this
      to: user.email,
      subject: "Your App - Reset Password",
      html: `
            <h3> Hello ${user.username} </h3>
            <p>To reset your password please follow this link: <a target="_" href="${process.env.DOMAIN}?hash=${hash._id}">reset password link</a></p>
            <p>Cheers</p>
            <p>Corek Team</p>
          `,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
    // await sendResetPasswordEmail({toUser: user.data, hash: hash.data._id})
    return res.json({
      message: "Please check your email to reset the password",
    });
  } catch (error) {
    return res.status(422).send("Oooops, Something went wrong!");
  }
});

userRouter.post("/reset-password/confirmation", async (req, res) => {
  const { password, hash } = req.body;
  try {
    const aHash = await AccessHash.findOne({ _id: hash });
    if (!aHash) {
      return res.status(422).send("cannot reset the password");
    }
    const user = await User.updateOne(
      { _id: aHash.userId },
      { $set: { password: bcrypt.hashSync(password) } }
    );
    // await user.save()
    const removehash = await AccessHash.remove({ _id: aHash._id });
    return res.json({
      message:
        "password has been changed successfully, you can now login again",
    });
  } catch (error) {
    return res.status(422).send("Ooooops, Something went wrong");
  }
});

userRouter.post("/removeUser", async (req, res) => {
  const id = req.body.id;
  await User.deleteOne({ _id: id });
});

export default userRouter;
