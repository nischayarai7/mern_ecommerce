import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "../components/TextField";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅ Add navigation hook

  const handleRequestOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      return setErrorMsg("Please enter your email.");
    }

    try {
      setLoading(true);
      setErrorMsg("");
      setMessage("");

      const res = await axios.post(
        "http://localhost:3000/api/auth/forgotPassword",
        { email },
        { withCredentials: true }
      );

      if (res.status === 200) {
        setMessage("OTP sent to your email.");
        alert("OTP Sent");
        // ✅ Navigate to OTP page
        navigate("/verify-otp", { state: { email } });
      } else {
        setErrorMsg(res.data.message || "Failed to send OTP.");
        throw new Error("Error sending OTP");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Server error. Try again.";
      setErrorMsg(msg);
      alert("Error Sending OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email to receive a password reset OTP.
        </p>

        {errorMsg && (
          <p className="text-red-600 text-sm text-center mb-4">{errorMsg}</p>
        )}
        {message && (
          <p className="text-green-600 text-sm text-center mb-4">{message}</p>
        )}

        <form onSubmit={handleRequestOtp} className="flex flex-col gap-4">
          <TextField
            label="Email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "opacity-60" : "hover:bg-blue-700"
            } bg-blue-600 text-white py-2 rounded-md font-semibold transition`}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Remembered password?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
