const mongoose = require('mongoose')

module.exports = () => {
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error('error: ' + err)
        }
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
    console.log('MongoDB database connction established successfully')

})
}