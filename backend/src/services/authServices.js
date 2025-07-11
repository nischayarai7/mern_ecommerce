// Import bcrypt for hashing and verifying passwords
import bcrypt from 'bcrypt';

// Import the User model (MongoDB schema)
import User from '../model/User.js';
import { hashPassword } from '../helpers/utility.js';
import { generateOtp } from '../helpers/generateOtp.js';
import { sendMail } from '../helpers/sendMail.js';



// ========================= REGISTER ============================
const register = async (data) => {
    // Destructure user info from request data
    const { email, password, userName, phone } = data;

    // Calling the hashPassword function to securely hash the user's plain-text password before storing it
    const hashedPassword = hashPassword(data.password);

    // 🔎 Check if a user with the same email already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
        // 🚫 Prevent duplicate user registration
        throw new Error("User Already Exists");
    }

    // ✅ Create and save a new user in the database
    const newUser = await User.create({
        email: email,
        password: hashedPassword,
        userName: userName,
        phone: phone
    });

    // 📤 Return the newly created user
    return newUser;
};

// ❌ This log will always print whether user exists or not — should be removed or moved
console.log("user exists");


// ========================== LOGIN ==============================
const login = async (data) => {

    // 🔍 Find user(s) with the given email (returns array)
    const douserExist = await User.findOne({ email: data.email });

    if (!douserExist) {
        // If no user found, throw error
        throw new Error("User does't exists");
    }

    // Extract hashed password from first found user
    const dbPassword = douserExist.password;

    // ✅ Compare input password with hashed password from DB
    const isPasswordMatched = bcrypt.compareSync(data.password, dbPassword);

    if (isPasswordMatched) {
        // ✅ Login success: return user data
        return douserExist;
    } else {
        // ❌ Login failed: invalid password
        throw new Error("Invalid Login");
    }
};

const forgotPassword = async (data) => {

    const userRegistered = await User.findOne({ email: data.email });

    if (!userRegistered) {
        throw new Error("Email is Required");
    }

    const otp = generateOtp();

    // Assuming sendMail is imported or defined elsewhere
    await sendMail(data.email, otp);

    return (data.email);
};
// Export both register and login functions from this module
export default { register, login, forgotPassword };
