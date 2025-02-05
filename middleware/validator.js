const { z } = require("zod")

//TEST validator

exports.registerSchema = z.object({
    email: z.string().email("Invalid email"),
    firstname: z.string().min(3, "Firstname too short"),
    lastname: z.string().min(3, "Lastname too short"),
    password: z.string().min(6, "Password too short"),
    confirmPassword: z.string().min(6, "ConfirmPassword too short")

}).refine((data) => data.password === data.confirmPassword, {
    message: "password not match",
    path: ["confirmPassword"]
})

exports.loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password too short"),
})

exports.validatewithZod = (schema) => (req, res, next) => {
    try {
        console.log("hello middleware");
        schema.parse(req.body)
        next();
    } catch (error) {
        const errMsg = error.errors.map((item) => item.message)
        const errTxt = errMsg.join(",")
        const meargeError = new Error(errTxt)
        next(meargeError);

    }
}
