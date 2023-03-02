import express from 'express'
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router()

orderRouter.post(
    '/',isAuth,
    (async (req, res) => {
        const newOrder = new Order({
          orderItems: req.body.orderItems.map((x) => ({ ...x, course: x._id })),
          user: req.user._id
        });
        const order = await newOrder.save()
        res.status(201).send({message: 'New Order Created', order})
    })
  );

  orderRouter.get('/mine',isAuth,(async (req,res) =>{
    const orders = await Order.find({user: req.user._id})
    res.send(orders)
  }))

export default orderRouter