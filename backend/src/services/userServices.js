// Importing the User model to interact with the MongoDB 'users' collection
import User from "../models/User.js";

// Service function to create a new user in the database
const createUser = async (data) => {
    // Attempting to create a new user using a custom static method 'createUser' on the User model
    // ⚠️ Make sure that `User.createUser` is a defined static method in your User schema
    return await User.createUser(data);
}

// Creating an object to group all user-related service functions (currently just one)
const userServices = { createUser };

// Exporting the userServices object as default to be used in controllers or routes
export default userServices;
