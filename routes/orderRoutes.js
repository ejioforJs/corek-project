import express from "express";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post("/", isAuth, async (req, res) => {
  const orderCheck = await Order.find({ user: req.user._id });
  if (orderCheck.length === 1) {
    const query = { "user": req.user._id };
    const updateDocument = {
      $push: { "orderItems": { $each: req.body.orderItems } },
    };
    const result = await Order.updateMany(query, updateDocument);
    res.status(201).send({ message: "order added successfully", result });
  } else if(orderCheck.length === 0){
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, course: x._id })),
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: "New Order Created", order });
  }
});

orderRouter.get("/mine", isAuth, async (req, res) => {
  const ordersList = await Order.find({ user: req.user._id });
  res.send(ordersList);
});

export default orderRouter;
