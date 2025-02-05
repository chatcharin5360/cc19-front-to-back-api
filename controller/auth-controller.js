exports.register =(req, res, next) => {
    try {
        //step1 req.body
        //step2 validate
        //step3 check if user already exists
        //step4 encrypt bcrypt
        //step5 insert to db
        //step6 response
        res.json({message: "Hello register"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

exports.login =(req, res, next) => {
    try {
        res.json({message: "Hello login"})
    } catch (error) {
        console.log(error)
        next(error)
    }
}