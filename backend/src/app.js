
import dotenv from "dotenv"
import express from "express";
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import constant from "./config/constant.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

dotenv.config()
connectDB()




app.get('/', (req, res) => {

    res.status(200).json({
        message: "Success"
    })
})


app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/auth', authRoutes)


const port = constant.PORT



app.listen(port, () => {

    console.log("Port 3000 is running")


})