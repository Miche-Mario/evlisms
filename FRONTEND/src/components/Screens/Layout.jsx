import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row justify-start">
      <Sidebar />
    
      <div className="flex-1 bg-gray-100">
      <Navbar/>
      </div>
    </div>
  );
};

export default Layout;