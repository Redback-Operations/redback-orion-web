//done by mihir khatana//
// src/components/Dashboard.js
import React from "react";
import d5 from "./assets/d5.png";
import d6 from "./assets/d6.png";

const Stadium = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-gray-700 to-black">
      <div className="flex flex-1 pt-20">
        <div className="text-white p-4 flex-1">
          <div className="text-center mb-4">
            <h1 className="text-6xl font-bold">900</h1>
            <p className="text-2xl">People Identified</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 gap-10 pt-20">
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d5}
                alt="Placeholder"
                className="w-full h-[400px] object-cover"
              />
              <p className="text-3xl font-semibold text-center pt-4">Tier 1</p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img
                src={d6}
                alt="Placeholder"
                className="w-full h-[400px] object-cover"
              />
              <p className="text-3xl font-semibold text-center pt-4">Tier 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stadium;
