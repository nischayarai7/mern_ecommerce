import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-3 justify-center md:justify-between lg:justify-around border-2 border-gray-400  px-8 py-8 bg-red-400 md:bg-green-400">
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}> Register</Link>
      <Link to={"/forgot-password"}> ForgotPassword</Link>
      <Link to={"/reset-password"}> ResetPassword</Link>
      <Link to={"/verify-otp"}> VerifyOtp</Link>
    </nav>
  );
};

export default Navbar;
