import express from "express";
import {
    register,
    login,
    forgotPassword,
    verifyOtp,
} from "../controllers/authControllers.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/reset-password", async (req, res) => {
    try {
        const { password } = req.body;
        const email = req.cookies.userEmail;

        if (!email) return res.status(400).json({ message: "No email found in cookie." });

        const hashed = await bcrypt.hash(password, 10);
        const user = await User.findOneAndUpdate({ email }, { password: hashed });

        if (!user) return res.status(404).json({ message: "User not found." });

        res.clearCookie("userEmail");
        res.status(200).json({ success: true, message: "Password reset successful." });
    } catch (err) {
        res.status(500).json({ message: "Server error." });
    }
});

router.post("/verify-otp", verifyOtp);

router.post("/reset-password", async (req, res) => {
    try {
        // const {email, password} = req.body

        const { password } = req.body;
        const email = req.cookies.userEmail;

        if (!email || !password) {
            throw new Error("Email and password required");
        }

        const doesUserExist = await User.findOne({ email });

        if (!doesUserExist) {
            throw new Error("User not registered");
        }

        if (!doesUserExist.otpExpiresAt || doesUserExist.otpExpiresAt < new Date) {
            throw new Error("PLease verify OTP first");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const data = await User.findOneAndUpdate(
            { email },
            { password: hashedPassword, otpExpiresAt: null },
            { new: true }
        );

        res.clearCookie("userEmail");

        res.status(200).json({
            message: "Password changed successfully",
            data,
        });
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
});

export default router;