// Importing the Express framework to create routes
import express from "express";

// Importing the User model (not directly used here but likely useful in controller logic or future updates)
import User from "../model/User.js";

// Importing the controller function that handles user creation
import { createUser } from "../controllers/userControllers.js";

// Importing middleware that verifies if a user is authenticated using JWT
import { isLoggedIn } from "../middleware/isLoggedIn.js";
import { isAdmin } from "../middleware/isAdmin.js";

// Creating a new router instance from Express to define route endpoints
const router = express.Router();

// Defining a GET route at the base path ('/')
// This route is protected with `isLoggedIn` middleware to ensure only authenticated users can access it
router.get('/', isLoggedIn, isAdmin, (req, res) => {

    // Accessing the decoded user data injected by the isLoggedIn middleware
    const user = req.user;

    // Logging the decoded user info to the console for debugging
    console.log("i am decoded", user);

    // Sending a response back to the client
    res.send('Route Page');
});

// Defining a POST route to '/createUser'
// This route uses the `createUser` function from the controller to add a new user to the database
router.post('/createUser', createUser);


// Exporting the router so it can be mounted in the main application (usually in app.js or server.js)
export default router;
