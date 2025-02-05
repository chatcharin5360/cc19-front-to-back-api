const handleError = (err, req, res, next) => {
    console.log("step 3 error handler")
    res.status(err.statusCode ||500)
    .json({message: err.message || "Something went wrong"})
}

module.exports = handleError