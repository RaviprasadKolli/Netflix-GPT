import React from "react";
import Logo2 from "../utils.js/Netflix-removebg-preview.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2">
      <img
        src={Logo2}
        alt="Logo"
        className="w-44 bg-gradient-to-b from-gray-800 h-24 z-10"
      />
    </div>
  );
};

export default Header;
