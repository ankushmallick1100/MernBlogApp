const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')

// Database
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected successfully.")
    } catch (err) {
        console.log(err)
    }
}

// Middlewares
dotenv.config()
app.use(express.json())
app.use("/api/auth",authRoute)

app.listen(process.env.PORT, ()=> {
    connectDB()
    console.log("App is running on port " + process.env.PORT)
})