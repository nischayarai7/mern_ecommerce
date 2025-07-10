// Importing necessary modules and middleware
import express from "express";
import {
  createProduct,         // Controller function to create a new product
  getAllProduct,         // Controller function to fetch all products
  getProductById,        // Controller function to fetch a product by its ID
  deleteProductById,     // Controller function to delete a product by its ID
  updateProduct          // Controller function to update a product by its ID
} from "../controllers/productControllers.js";

import { isLoggedIn } from "../middleware/isLoggedIn.js"; // Middleware to verify user is authenticated
import { isAdmin } from "../middleware/isAdmin.js";       // Middleware to check if authenticated user is an admin

const router = express.Router(); // Creating an Express router instance

// Route to create a new product (protected: only logged-in admin users can access)
router.post('/createProduct', isLoggedIn, isAdmin, createProduct);

// Route to get a list of all products (public access)
router.get('/getAllProduct', getAllProduct);

// Route to get a single product by its ID (public access)
router.get('/getProductById/:id', getProductById);

// Route to delete a product by its ID (protected: only logged-in admin users can access)
router.delete('/deleteProduct/:id', isLoggedIn, isAdmin, deleteProductById);

// Route to update a product by its ID (protected: only logged-in admin users can access)
router.put('/updateProduct/:id', isLoggedIn, isAdmin, updateProduct);

export default router; // Exporting the router to be used in the main app
