import express from "express"
import { isLoggedIn } from "../middleware/isLoggedIn.js"
// import { getAllProduct } from "../controllers/productControllers.js"
import { createOrder, getAllOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus } from "../controllers/orderControllers.js"



const router = express.Router()
router.post('/create', isLoggedIn, createOrder)
router.get('/', getAllOrder)
router.get("/getOrderById/:id", getOrderById)
router.get("/getOrderByUserId", isLoggedIn, getOrderByUserId)
router.post("/updateOrderStatus/:id", updateOrderStatus)//add isLoggedIn,isAdmin
router.post("/updatePaymentStatus/:id", updatePaymentStatus)//add isLoggedIn,isAdmin

export default router