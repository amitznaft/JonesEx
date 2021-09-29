const express = require('express')
const app = express();

require('dotenv').config()
require('./startup/routes')(app)
require('./startup/db')()

const port = process.env.PORT || 3000;

app.all('*', (req, res) => {
    res.status(404).send("request not fonund")
})

const server = app.listen(port, () => console.log("Listening on port " + port));

module.exports = server