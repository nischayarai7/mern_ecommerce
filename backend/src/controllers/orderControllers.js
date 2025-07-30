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
};

// Export the createOrder controller so it can be used in routes
export { createOrder };
