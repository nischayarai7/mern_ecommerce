import mongoose from "mongoose";
const otpSchema = new mongoose.Schema({

    otp: {
        type: String,
        required: true


    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: new Date(),
        expires: 60
    }

})

export default mongoose.model("Otp", otpSchema)