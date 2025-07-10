
import userServices from "../services/userServices.js"


const createUser = async (req, res) => {


    try {
        const { userName, password, email, role, confirmPassword } = req.body;

        //basic Validation
        if (!userName) {
            return res.status(400).json({ message: "Username Required" })
        }

        if (!password) {
            return res.status(400).json({ message: "Password cannot be empty" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password Didn't Match" })
        }

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const data = await userServices.createUser(req.body)
        res.status(200).json({
            message: "Product created successfully", data
        })

    } catch (error) {

        res.status(400).json({
            message: "error occurred",
            error: error.message
        })
    }
}

export { createUser }