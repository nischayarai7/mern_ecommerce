// Import the jsonwebtoken library used for creating and verifying tokens
import jwt from 'jsonwebtoken'

// Function to create/sign a JWT token
export const createToken = (payload) => {
    // Signs the payload (user data) with a secret key stored in the environment variable JWT
    // This generates a token that can be used to authenticate the user in future requests
    return jwt.sign(payload, process.env.JWT)
}

// Function to verify and decode a JWT token
export const verifyToken = (token) => {
    // Verifies that the token is valid and untampered using the same secret key
    // If valid, returns the decoded payload; if not, it throws an error
    return jwt.verify(token, process.env.JWT)
}
