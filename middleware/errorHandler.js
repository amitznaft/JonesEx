const errorHandler = (err, req, res, next) => {
    console.error("error: " + err.message)
    res.status(500).json({error : err.message})
}

module.exports = errorHandler