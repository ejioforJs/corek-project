import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from 'nodemailer'

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'invalid token' });
      } else {
        req.user = decode;
        next();
      }
    });
  }
  else{
      res.status(401).send({message: 'No token'})
  }
};