// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex justify-center space-x-6">
        {[
          "Market",
          "Supermarket",
          "Railway Station",
          "Malls",
          "Stadium",
          "Airport",
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
