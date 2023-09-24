const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors  =require('cors')
const multer = require('multer')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')


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
app.use(cookieParser())
app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

// Image upload
const storage = multer.diskStorage({
    destination:(req, file, fn) => {
        fn(null,"images")
    },
    filename:(req, file, fn) => {
        fn(null, req.body.img)
        // fn(null, 'image.jpg')
    }
})

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("Image has been uploaded successfully!")
})

app.listen(process.env.PORT, ()=> {
    connectDB()
    console.log("App is running on port " + process.env.PORT)
})