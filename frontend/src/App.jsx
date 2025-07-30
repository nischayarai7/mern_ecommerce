import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import Navbar from "./components/Navbar";
import MyContextProvider, { useMyContext } from "./context/MyContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const name = "Nischaya";
  const age = 12;
  const email = "Hello";

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ name, age, email }}>
        <Navbar />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
