import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Username is required"]
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"]
    },

    role: {
        type: String,
        enum: ["ADMIN", "EMPLOYEE", "CUSTOMER"],
        default: "CUSTOMER"
    }

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)
export default User;