import express from "express";
import { register } from "../controllers/authControllers.js";
import { login } from '../controllers/authControllers.js'
import Otp from "../model/Otp.js"
import { generateOtp } from "../helpers/generateOtp.js";
import { sendMail } from "../helpers/sendMail.js";
import { forgotPassword } from '../controllers/authControllers.js'
import { generate } from "otp-generator";
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/forgotPassword', async (req, res) => {
    try {
        const { email } = req.body
        console.log("email", email)
        if (!email) {
            throw new Error("Email is required")
        }
        const otp = generateOtp()
        const newOtp = await Otp.create({
            email: email,
            otp: otp
        })
        // Assuming sendMail is imported or defined elsewhere
        sendMail(email, otp);
        res.send(newOtp)

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            message: "Error occurred",
            success: false
        })
    }
})

router.post("/verify-otp", async (req, res) => {
    try {
        const { email, otp } = req.body

        const doesEmailExists = await Otp.findOne({ email })

        if (!doesEmailExists) {
            throw new Error("Email doesn't Exists")
        }
        if (doesEmailExists.otp !== otp) {
            throw new Error("Invalid OTP")
        }

        res.json({
            message: "Otp validated",
            data: doesEmailExists
        })
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})


export default router