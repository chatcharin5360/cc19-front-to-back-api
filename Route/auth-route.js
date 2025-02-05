const express = require("express")
const router = express.Router()
const authController = require("../controller/auth-controller")
const { validatewithZod, registerSchema, loginSchema } = require("../middleware/validator")




//@ENDPOINT: http://localhost:8000/api/register
router.post("/register", validatewithZod(registerSchema), authController.register)
router.post("/login", validatewithZod(loginSchema) ,authController.login)
router.get("/current-user",authController.currentUser)



module.exports = router