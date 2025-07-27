import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!otp.trim()) {
      return setError("Please enter the OTP.");
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/verify-otp",
        { otp }, // 👈 only otp — session (cookie) holds the rest
        { withCredentials: true } // required to send cookies
      );

      if (res.data.success) {
        setMessage("OTP verified! Redirecting...");
        setTimeout(() => navigate("/reset-password"), 1500);
      } else {
        setError(res.data.message || "Invalid or expired OTP.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Verification failed. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <form
        onSubmit={handleVerify}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-2">{message}</p>}

        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full mb-4 p-2 border rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
