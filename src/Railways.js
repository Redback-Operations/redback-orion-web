//Done by Mehak Beniwal//
// src/components/Dashboard.js
import React from "react";
import d7 from "./assets/d7.png";
import d8 from "./assets/d8.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Railways = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <Sidebar />
      <div className="flex flex-1 pt-20">
        <div className="bg-black text-white p-4 flex-1">
          <div className="text-center mb-4">
            <h1 className="text-6xl font-bold">300</h1>
            <p className="text-2xl">People Identified</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d7}
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d8}
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

export default Railways;
