import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">
          MyApp
        </div>
        <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Register
          </Link>
          <Link
            to="/forgot-password"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Forgot Password
          </Link>
          <Link
            to="/reset-password"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Reset Password
          </Link>
          <Link
            to="/verify-otp"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Verify OTP
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
