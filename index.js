const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productsRoute = require("./routes/product")

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.log(err)
    })

//app.user loads the middleware. This is the connection from the index to whichever REST apis you have set up
app.use(express.json()) //This is so it can take JSON
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productsRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is running!")
})