import bcrypt from 'bcrypt'
// Exporting a utility function to hash a plain-text password
export const hashPassword = (password) => {
    // Using bcrypt's hashSync method to synchronously hash the password
    // The second argument '10' is the salt rounds — the higher the number, the more secure but slower
    return bcrypt.hashSync(password, 10);
}
