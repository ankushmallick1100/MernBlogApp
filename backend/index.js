const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const dotenv = require('dotenv')

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

app.listen(process.env.PORT, ()=> {
    connectDB()
    console.log("App is running on port " + process.env.PORT)
})