import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header className="bg-pink-500 shadow-md relative">
      <div className="flex items-center justify-center mb-4 relative">
        <MenuIcon className="text-gray-700 absolute left-4" />
        <h2 className="text-center  text-2xl text-gray-800">HEADPHONE</h2>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center pl-8 text-left font-mono text-2xl text-white ">
        <h2 className="mb-4">MY HEADPHONE</h2>
        <button className="w-[2cm] h-[1cm] px-1 text-sm bg-blue-500 rounded hover:bg-blue-700">
          BUY NOW
        </button>
      </div>
      <img
        className="w-full h-64 object-cover rounded-md"
        src="https://images.squarespace-cdn.com/content/v1/6143979456eb863cca58e32f/1631848948004-TTGG7P9EUK9WZ7IFK7YK/display-main.JPG"
        alt="Beautiful"
      />
    </header>
  );
}

export default Header;
