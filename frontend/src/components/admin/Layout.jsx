import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen grid grid-cols-[280px_1fr] grid-rows-[100px_1fr]">
      <div className="row-span-2">
        <Sidebar />
      </div>

      <div className="col-span-1">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
