import otpGenerator from 'otp-generator'

const generateOtp = () => {

    // otpGenerator = require('otp-generator')

    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    console.log(otp)
    return otp
}
export { generateOtp }