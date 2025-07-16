import bcrypt from "bcrypt";
import User from "../model/User.js";
import { generateOtp } from "../helpers/generateOtp.js";
import { sendMail } from "../helpers/sendMail.js";
import Otp from "../model/Otp.js";

const register = async (data) => {
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    // console.log(hashedPassword)

    const email = data.email;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (userExist) {
        throw new Error("user already exists.");
    }

    return await User.create({
        email: data.email,
        password: hashedPassword,
        userName: data.userName,
        phone: data.phone,
    });
};

const login = async (data) => {
    const doEmailExist = await User.findOne({ email: data.email });

    // if (!doEmailExist.length > 0) {
    if (!doEmailExist) {
        throw new Error("Invalid email user doesn't exist");
    }

    const dbPassword = doEmailExist.password;

    const isPasswordMatch = bcrypt.compareSync(data.password, dbPassword);

    if (isPasswordMatch) {
        return doEmailExist;
    } else {
        throw new Error("Invalid password");
    }
};

const forgotPassword = async (data) => {

    const isUserValid = await User.findOne({ email: data.email });

    if (!isUserValid) {
        throw new Error("User is not registered!");
    }

    const otp = generateOtp();

    const doesExist = await Otp.findOne({ email: data.email });

    let newOtp;

    if (!doesExist) {
        newOtp = await Otp.create({
            email: data.email,
            otp: otp,
        });
    } else {
        newOtp = await Otp.findOneAndUpdate(
            { email: data.email },
            {
                otp: otp,
                createdAt: new Date(),
            },
            { new: true }
        );
    }

    sendMail(data.email, otp);

    return newOtp;
};

const verifyOtp = async ({ email, otp }) => {
    const doesExist = await Otp.findOne({ email });

    if (!doesExist) {
        throw new Error("Email doesn't exist");
    }

    if (doesExist.otp !== otp) {
        throw new Error("Invalid OTP");
    }

    await User.findOneAndUpdate(
        { email },
        { otpExpiresAt: new Date(Date.now() + 30 * 1000) }, //minutes sec milliseconds
        { new: true }
    );

    //optional
    await Otp.deleteOne({ email });
    return "verifyOtp";
};

export default { register, login, forgotPassword, verifyOtp };