//done by mihir khatana//
// src/components/Dashboard.js
import React from "react";
import d9 from "./assets/d9.png";
import d10 from "./assets/d10.png";

const Stadium2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-black to-gray-700">
      <div className="flex flex-1 pt-20">
        <div className="text-white p-4 flex-1">
          <div className="text-center mb-4">
            <h1 className="text-6xl font-bold">450</h1>
            <p className="text-2xl">People Identified Entrance</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d9}
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d10}
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

export default Stadium2;
