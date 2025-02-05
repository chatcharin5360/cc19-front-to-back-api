const e = require("cors");
const prisma = require("../config/prisma");
const createError = require("../utils/createrror")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res, next) => {
    try {
        //step1 req.body
        const { email, firstname, lastname, password, confirmPassword } = req.body;

        //step2 validate
        const checkEmail = await prisma.profile.findFirst({
            where: {
                email: email,

            }
        })
        console.log(checkEmail)

        //step3 check if user already exists
        if (checkEmail) {
            return createError(400, "Email is already exists")
        }
        //step4 encrypt bcrypt
        const hashedPassword = bcrypt.hashSync(password, 10)
        console.log(hashedPassword)
        //step5 insert to db
        const profile = await prisma.profile.create({
            data: {
                email: email,
                firstname: firstname,
                lastname: lastname,
                password: hashedPassword,
            }
        })
        //step6 response
        res.json({ message: "Register Suscess" })
    } catch (error) {
        console.log("step 2 catch error")
        next(error)
    }
}




exports.login = async (req, res, next) => {
    try {

        //step 1 req.body
        const { email, password } = req.body
        console.log(email, password)
        //step 2 Check email and password
        const profile = await prisma.profile.findFirst({
            where: {
                email: email,
            }
        })
        if (!profile) {
            return createError(400, "Email, Password is invalid")
        }
        const isMatch = bcrypt.compareSync(password, profile.password)

        if (!isMatch) {
            return createError(400, "Email, Password is invalid")
        }
        //step 3 Generate token
        const payload = {
            id: profile.id,
            email: profile.email,
            firstname: profile.firstname,
            lastname: profile.lastname,
            role: profile.role
        }
        const token = jwt.sign(payload, process.env.SECRECT, {
            expiresIn: "1d",
        })
        //step 4 Response
        res.json({
            message: "Login Success",
            payload: payload,
            token, token
        })
    } catch (error) {
        next(error)
    }
}


exports.currentUser = async (req, res, next) => {
    try {
        res.json({ message: "Hello, Current user" })
    } catch (error) {
        next(error)
    }
}