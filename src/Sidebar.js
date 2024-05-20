//done by mehak beniwal//
// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-black text-white w-[150px] min-h-screen pt-16 p-4 fixed left-0 top-0 hidden sm:block">
      <ul className="space-y-4 mt-16">
        {[
          "Tier1",
          "Tier2",
          "Railway Station",
          "Stadium",
          "Entrance",
        ].map((item, index) => (
          <li
            key={index}
            className="hover:underline hover:scale-105 duration-300"
          >
            <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
