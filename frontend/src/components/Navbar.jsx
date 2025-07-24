import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons for mobile toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Forgot Password", path: "/forgot-password" },
    { name: "Reset Password", path: "/reset-password" },
    { name: "Verify OTP", path: "/verify-otp" },
  ];

  return (
    <nav className="bg-[#0a1f44] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-white">
          OUR <span className="text-blue-400">SHOP</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div
          className={`md:flex gap-6 font-medium items-center ${
            isOpen ? "block mt-4 md:mt-0" : "hidden md:flex"
          }`}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="relative group px-2 py-1 hover:text-blue-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
