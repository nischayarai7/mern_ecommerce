import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import TextField from "../components/TextField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      const { token } = res.data;

      // Save token and navigate
      localStorage.setItem("token", token);
      setErrorMsg("");
      alert("Login successful!");
      navigate("/dashboard"); // or navigate("/")
    } catch (error) {
      const message =
        error.response?.data?.message || "Invalid credentials or server error.";
      setErrorMsg(message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        {errorMsg && (
          <div className="mb-4 text-red-600 text-sm text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            label="Email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="password"
            label="Password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export  {Login};
