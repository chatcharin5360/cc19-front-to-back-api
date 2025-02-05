const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const handleError = require("./middleware/error")

const authRoute = require("./Route/auth-route")
const app = express()


//middlewares
app.use(cors()); // to allow cross domain requests
app.use(morgan("dev")); // show log terminal
app.use(express.json()); // for read json


//routing
app.use("/api", authRoute)

//Handle errors
app.use(handleError)


const PORT = 8000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))