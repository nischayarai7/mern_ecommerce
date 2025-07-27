import authServices from "../services/authServices.js";
import { createToken } from "../helpers/token.js";

const register = async (req, res) => {
    try {
        const { email, phone, userName, password, confirmPassword } = req.body;

        if (!password || !email || !phone || !confirmPassword || !userName) {
            return res.status(400).json({ message: "User credential is missing." });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password and confirm password does not match.",
            });
        }

        const data = await authServices.register({
            email: email,
            phone: phone,
            userName: userName,
            password: password,
        });

        res.status(200).json({
            message: "User registered successful",
            data,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Error occured to register",
            error: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        //login function
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("User credential is missing.");
        }

        const data = await authServices.login({ email, password });

        const payload = {
            id: data._id,
            userName: data.userName,
            role: data.role,
            phone: data.phone,
            email: data.email,
        };

        //Webtoken generation
        // const token = jwt.sign(payload, "secretkey")
        const token = createToken(payload);
        res.cookie("authToken", token);

        res.status(200).json({
            message: "Login successful",
            data,
            token,
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
};

// const forgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log("email", email);
//     if (!email) {
//       throw new Error("Email is required");
//     }

//     const data = await authService.forgotPassword({ email });

//     res.status(200).json({ message: "Successfully sent Email", data });
//   } catch (error) {
//     console.log(error.message);
//     console.log("first");
//     res.status(400).json({
//       message: error.message,
//     });
//   }
// };

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;


        if (!email) {
            throw new Error("Email is required");
        }

        const data = await authServices.forgotPassword({ email });
        res.cookie("userEmail", email, {
            httpOnly: true,
            secure: true
        });
        res.send(data);
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
};

const verifyOtp = async (req, res) => {
    try {
        const { otp } = req.body;
        const email = req.cookies.userEmail;

        if (!email || !otp) {
            return res.status(400).json({ message: "Email and OTP required" });
        }

        const isValid = await authServices.verifyOtp({ email, otp });

        if (!isValid) {
            return res.status(401).json({ message: "Invalid or expired OTP" });
        }

        // Optional: clear the email cookie after success
        res.clearCookie("userEmail");

        return res.status(200).json({ success: true, message: "OTP verified" });
    } catch (error) {
        console.error("OTP verification error:", error.message);
        return res.status(500).json({
            success: false,
            message: error.message || "Server error during OTP verification",
        });
    }
};

export { register, login, forgotPassword, verifyOtp };