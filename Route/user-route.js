const express = require("express")
const router = express.Router()
//import controller
const userController = require("../controller/user-controller")

//@ENDPOINT http://localhost:8001/api/user
router.get("/user", userController.listUsers)
router.patch("/user/update-role",userController.updateRole)
router.delete("/user/:id",userController.deleteUser)

module.exports = router