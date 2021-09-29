const Joi = require('joi')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderDate : {type : Date, required : true},
    customerId  : {type : String, required : true},
    items : {type : [{type : String, required : true}], required : true},
    price : {type : Number, required : true} ,
    comments : String
})

const validateOrder = (order) => {
    const schema = {
        orderDate : Joi.date().required(),
        customerId : Joi.string().required(),
        items : Joi.array().items(Joi.string().required()),
        price : Joi.number().required(),
        comments : Joi.string()
    }
    return Joi.validate(order, schema)
}

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
