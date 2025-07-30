// Importing the User model to interact with the users collection in the database
import User from "../models/User.js";

// Importing the password hashing utility to securely hash the admin password
import { hashPassword } from "../helpers/utility.js";

// Async function that seeds a default admin account if it doesn't already exist
const adminSeeder = async () => {

    // Searching the database for an existing admin user by email
    const findAdmin = await User.findOne({ email: "admin@gmail.com" });
    console.log(findAdmin); // Logging the result for debugging purposes

    // If no admin user is found, proceed to create one
    if (!findAdmin) {

        // Hashing the default admin password using the utility function
        const password = hashPassword('admin');

        // Creating a new user with admin credentials
        await User.create({
            userName: "admin",       // Admin's username
            password,                // Hashed password
            email: "admin@gmail.com",// Admin email
            role: "ADMIN",           // Role assigned as 'ADMIN'
        });

        // Confirmation message on successful admin creation
        console.log("Admin seeded Successfully");

    } else {
        // If admin already exists, log the message
        console.log("Admin Already Exists");
    }
}

// Exporting the seeder function to be used elsewhere (e.g., in server setup or scripts)
export { adminSeeder };
