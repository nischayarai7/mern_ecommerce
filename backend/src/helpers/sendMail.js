import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import constant from '../config/constant.js'; // ✅ default import

dotenv.config()
const sendMail = async (email, otp) => {

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: constant.EMAIL_USER,
                pass: constant.EMAIL_PASS
            }
        })


        const info = await transporter.sendMail({
            from: `"Ronaldo" <${constant.EMAIL_USER}>`,
            to: email,
            subject: "Your OTP CODE",
            html: `<b>Your OTP ${otp}</b>`, // HTML body
        });
        console.log(info)

    } catch (error) {

        console.log("Error sending email", error.message)
        throw new Error("Failed to send OTP email")
    }
}

export { sendMail }