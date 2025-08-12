import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import Navbar from "./components/Navbar";
import MyContextProvider, { useMyContext } from "./context/MyContext";
import { Toaster } from "react-hot-toast";

//product
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Layout from "./components/admin/Layout";
import Product from "./pages/admin/dashboard/product/Product";
import Welcome from "./pages/Welcome";
import Greetings from "./pages/Greetings";
import TrialLayout from "./components/TrialLayout";

const App = () => {
  const name = "Nischaya";
  const age = 12;
  const email = "Hello";

  return (
    <BrowserRouter>
      <MyContextProvider value={{ name, age, email }}>
        <Navbar />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />

          <Route element={<Layout />}>
            <Route path="/admin/" element={<Dashboard />} />
            <Route path="admin/product" element={<Product />} />
          </Route>

          <Route element={<TrialLayout />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/greeting" element={<Greetings />} />
          </Route>
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
};

export default App;
