//Done by Mehak and Mihir//
// src/components/Dashboard.js
import React from "react";
import map from "./assets/map.png";
import Navbar from "./Navbar";

const data = [
  {
    id: 1,
    title: "Main Stage",
    value: "7144",
    unit: "Occupants",
    bgColor: "bg-green-600",
  },
  {
    id: 2,
    title: "Stage 1 Barrier",
    value: "0.70",
    unit: "m²/🧍",
    bgColor: "bg-purple-700",
  },
  {
    id: 3,
    title: "Main Stage Bar",
    value: "11:26",
    unit: "Average Dwell",
    bgColor: "bg-purple-800",
  },
  {
    id: 4,
    title: "Pepsi Stage",
    value: "1176",
    unit: "Occupants",
    bgColor: "bg-green-600",
  },
  {
    id: 5,
    title: "Stage 2 Barrier",
    value: "1.48",
    unit: "m²/🧍",
    bgColor: "bg-purple-700",
  },
  {
    id: 6,
    title: "Pepsi Bar",
    value: "15:27",
    unit: "Average Dwell",
    bgColor: "bg-purple-800",
  },
  {
    id: 7,
    title: "Boombox Stage",
    value: "352",
    unit: "Occupants",
    bgColor: "bg-green-600",
  },
  {
    id: 8,
    title: "Stage 3 Barrier",
    value: "3.33",
    unit: "m²/🧍",
    bgColor: "bg-purple-700",
  },
  {
    id: 9,
    title: "Entrance Bar",
    value: "27:44",
    unit: "Average Dwell",
    bgColor: "bg-purple-800",
  },
  {
    id: 10,
    title: "Entrance Toilets",
    value: "10:06",
    unit: "Average Dwell",
    bgColor: "bg-purple-800",
  },
  {
    id: 11,
    title: "Upper Toilets",
    value: "11:53",
    unit: "Average Dwell",
    bgColor: "bg-purple-800",
  },
  {
    id: 12,
    title: "Perimeter",
    value: "18874",
    unit: "Attendants",
    bgColor: "bg-green-600",
  },
  {
    id: 13,
    title: "Metro ➔ Entrance Queue",
    value: "9:35",
    unit: "Travel Time",
    bgColor: "bg-purple-800",
  },
  {
    id: 14,
    title: "Entrance Queue",
    value: "9:41",
    unit: "Average Dwell",
    bgColor: "bg-purple-800",
  },
];

const CrowdStatistics = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 p-4 min-h-screen w-full bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="lg:col-span-3 xl:col-span-4 mb-4 lg:mb-0 order-first lg:order-none">
            <img
              src={map}
              alt="Map"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col h-[175px] justify-center items-center p-4 rounded-lg ${item.bgColor} text-white hover:border`}
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-5xl font-bold">{item.value}</p>
              <p className="text-sm">{item.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrowdStatistics;
