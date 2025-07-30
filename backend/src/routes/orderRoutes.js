import express from "express"
import { isLoggedIn } from "../middleware/isLoggedIn.js"
// import { getAllProduct } from "../controllers/productControllers.js"
import { createOrder } from "../controllers/orderControllers.js"



const router = express.Router()
router.post('/create', isLoggedIn, createOrder)
// router.get('/', getAllOrder)

export default router