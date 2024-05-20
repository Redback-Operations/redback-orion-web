// src/components/Dashboard.js
import React from "react";
import d3 from "./assets/d3.png";
import d4 from "./assets/d4.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Airport = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <Sidebar />
      <div className="flex flex-1 pt-20">
        <div className="bg-black text-white p-4 flex-1">
          <div className="text-center mb-4">
            <h1 className="text-6xl font-bold">132</h1>
            <p className="text-2xl">People Identified</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d3}
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d4}
                alt="Placeholder"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airport;
