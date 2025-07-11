// Importing the authentication services which handle the business logic
import { createToken } from "../helpers/token.js";
import authServices from "../services/authServices.js";

// Importing JWT library for generating authentication tokens
import jwt from 'jsonwebtoken';

// ====================== REGISTER CONTROLLER ======================
const register = async (req, res) => {
    try {
        // Destructuring user details from the request body
        const { email, password, phone, confirmPassword, userName } = req.body;

        // Check if any required field is empty
        if (!password || !email || !phone || !confirmPassword || !userName) {
            return res.status(400).json({ message: "Field cannot be empty" });
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password Didn't Match" });
        }

        // Calling register function from service layer to create the user
        const data = await authServices.register(req.body);

        // Sending success response with user data
        return res.status(200).json({
            message: "User Registered Successfully",
            data
        });

    } catch (error) {
        // Logging the error for debugging purposes
        console.log(error.message);

        // Sending conflict response if user already exists or other error occurs
        return res.status(409).json({ message: error.message });
    }

    // ❌ This line is unreachable and unnecessary — safe to remove
    // res.send(500).json({ message: "Error occurred While Registering" })
};

// ====================== LOGIN CONTROLLER ======================
const login = async (req, res) => {
    try {
        // Destructuring login credentials from request body
        const { email, password } = req.body;

        // Checking if email or password is missing
        if (!email || !password) {
            throw new Error("Fields cannot be empty"); // Better to use res.status(400)
        }

        // Calling login function from service layer to authenticate user
        const data = await authServices.login({ email, password });

        // Creating a payload for the JWT token
        const payload = {
            id: data._id,
            userName: data.userName,
            role: data.role,
            email: data.email,
            phone: data.phone
        };

        // Signing a JWT token using a secret key
        const token = createToken(payload); // ❗ Replace "secretKey" with env variable

        // Setting auth token in a cookie
        res.cookie('authToken', token); // You can add secure, httpOnly, etc. options here

        // Sending successful login response
        return res.status(200).json({
            message: "Login Successful",
            data,
            token
        });

    } catch (error) {
        // Logging the error
        console.log(error.message);

        // Sending failed login response
        return res.status(409).json({ message: "Couldn't Login, Please try again later" });
    }
};



const forgotPassword = async (req, res) => {
    try {

        const { email } = req.body
        console.log("email received", email)
        if (!email) {

            return res.status(400).json({
                message: "Email is required",
                success: false
            })
        }
        const data = await authServices.forgotPassword({ email })
        res.status(200).json({
            message: "OTP sent to your email",
            data,
            success: true
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

// Exporting the controller functions for use in route files
export { register, login, forgotPassword };
