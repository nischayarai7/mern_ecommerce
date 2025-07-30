import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/database.js";
import constant from "./config/constant.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"
// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Environment setup
dotenv.config();

// Connect to database
connectDB();
app.get("/test", (req, res) => {
    res.cookie("name", "name2", {
        maxAge: 60 * 1000,
        httpOnly: true
    })
    res.status(200).send("<b><a style='color:white; background: black; padding: 2px'>Hello</a>,Welcome to my App!</b>")
})

// CORS config (frontend should be on localhost:5173 during development)
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Base Route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server running successfully 🚀" });
});

// API Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes)

// Server listener
const port = constant.PORT || 3000;
app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
