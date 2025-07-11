import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const sendMail = async (email, otp) => {

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.APP_PASS
            }
        })


        const info = await transporter.sendMail({
            from: `"Ronaldo" <${"raichamlingnischaya@gmail.com"}>`,
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