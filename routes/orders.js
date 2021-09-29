const router = require('express').Router()
const Order = require('../models/order.model')
const validateOrder = require('../middleware/validateOrder')
const asyncMiddleware = require("../middleware/asyncMiddleware")

router.get('/', asyncMiddleware( async (req, res) => {
    const today = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
    const tomorrow = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() + 1)
    const orders = await Order.find({$and :[{orderDate: {$gt : today}} , {orderDate: {$lt : tomorrow}}]})
    res.status(200).json(orders)
    console.log("orders sent to client")
}))

router.post('/' , validateOrder , asyncMiddleware(async (req, res) => {
    
    const orderDate = new Date(req.body.orderDate)
    const customerId = req.body.customerId
    const items = req.body.items
    const price = Number(req.body.price)
    const comments = req.body.comments

    const newOrder = new Order({
        orderDate,
        customerId,
        items,
        price,
        comments
    })

    const result = await newOrder.save()
    console.log(result)
    res.status(201).json(result)
    console.log("new order saved successfully")
}))

module.exports= router