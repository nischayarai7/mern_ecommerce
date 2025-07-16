import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
        },
        role: {
            type: String,
            enum: ["ADMIN", "EMPLOYEE", "CUSTOMER"],  // fixed from "anum" to "enum"
            default: "CUSTOMER",
        },
        otpExpiresAt: {
            type: Date,
            default: null
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt automatically
    }
);

export default mongoose.model("User", userSchema);