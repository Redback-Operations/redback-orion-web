// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex justify-center space-x-6">
        {[
          "Tier1",
          "Tier2",
          "Railway Station",
          "Stadiums",
          "Entrance",
        ].map((item, index) => (
          <li key={index} className="hover:underline">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
