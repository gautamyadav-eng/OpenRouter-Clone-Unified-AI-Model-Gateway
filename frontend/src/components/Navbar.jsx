import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-12">

        <div className="flex items-center ml-15">
          <img
            src={logo}
            alt="OpenRouter"
            className="h-7 w-full"
          />
        </div>

        <div>
          <h1>pages</h1>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;