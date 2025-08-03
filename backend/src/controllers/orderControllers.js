// Import the orderServices module which contains logic to handle order-related operations
import { orderServices } from "../services/orderServices.js";

// Define the createOrder controller function to handle order creation
const createOrder = async (req, res) => {
    try {
        // Get the authenticated user's ID from the request (attached via middleware)
        const userId = req.user?.id;

        // Get order data from the request body
        const order = req.body;

        // Attach the user's ID to the order data
        order.user = userId;

        // Call the order service to create the order in the database
        const data = await orderServices.createOrder(order);

        // Log the created order (optional for debugging)
        console.log(data);

        // Send a success response with the created order data
        res.status(200).json({ data, message: "Order Created Successfully" });

    } catch (error) {
        // Log the error message for debugging
        console.log(error.message);

        // Send an error response with details
        res.status(400).json({
            error: error.message,
            message: "Error Creating Order",
            success: false
        });
    }
}
const getAllOrder = async (req, res) => {
    try {
        const data = await orderServices.getAllOrder()
        res.status(200).json({ data })
    }
    catch (error) {
        console.log(error.message)
        res.status(400).json({

            message: "Error Getting All Orders",
            error: error.message,
            success: false
        })
    }
}

const getOrderById = async (req, res) => {
    try {

        const data = await orderServices.getOrderById(req.params.id)
        res.status(200).json({ data })
    }
    catch (error) {
        console.log(error.message)
        res.status(400).json({
            error: error.message,
            message: "Error fetching the order with this id",
            success: false,
            error: error.message
        })
    }
}

const getOrderByUserId = async (req, res) => {
    try {

        const userId = req.user.id
        const data = await orderServices.getOrderByUserId(userId)
        res.status(200).json({
            data,
            message: "Fetched Successfully",
            success: true
        })
    }

    catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message, message: "Error Getting Order By User Id", success: false })
    }
}

const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.id
        const status = req.body.OrderStatus
        const data = await orderServices.updateOrderStatus(orderId, status)
        res.status(200).json({ data })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message, message: "Error Updating Order Status", success: false })
    }
}

const updatePaymentStatus = async (req, res) => {
    try {
        const id = req.params.id
        const status = req.body.PaymentStatus
        const data = await orderServices.updatePaymentStatus(id, status)
        res.status(200).json({ data })
    } catch (error) {
        res.status(400).json({
            message: "Failed to update Payment Status",
            error: error.message
        })
    }
}


// Export the createOrder controller so it can be used in routes
export { createOrder, getAllOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus }