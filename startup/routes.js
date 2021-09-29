const express = require('express')
const ordersRouter = require('../routes/orders')
const errorHandler = require('../middleware/errorHandler')
const cors = require('cors')
const morgan = require('morgan')


module.exports = (app) => {
    app.use(cors());
    app.use(express.json())
    app.use(errorHandler)
    app.use('/api/orders', ordersRouter)
    if (app.get('env') === 'development') {
        app.use(morgan('tiny'))
        console.log('Morgan enabled...')
    }
}