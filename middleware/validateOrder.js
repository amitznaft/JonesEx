const Joi = require('joi')

const schema = Joi.object(
    {
        orderDate : Joi.date().required(),
        customerId : Joi.string().required(),
        items : Joi.array().items( Joi.string().required()).required(),
        price : Joi.number().required(),
        comments : Joi.string()
    }
) 

const validateOrder = (req,res,next) => {

        const {error} = schema.validate(req.body)
        if (error) {
            const {details} = error
            const message = details.map(i => i.message).join(',')
            console.error("validation error: " + message)
            res.status(400).json({error : message})
        } 
        else {
            next()
        }
    }

module.exports = validateOrder