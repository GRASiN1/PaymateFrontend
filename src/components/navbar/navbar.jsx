import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full h-16 flex flex-row justify-around items-center fixed top-0 z-10 font-pacifico">
      <div className="w-4/5 h-14 flex flex-row justify-around items-center fixed top-0 z-10 pt-8 pb-8 border-1 m-1 rounded-full">
        <div className="w-full flex justify-center items-center">
          <NavLink to="/">
            <img src="/images/logoNoBg2.png" alt="brand" width={150} />
          </NavLink>
        </div>
        <div className="w-full flex justify-center items-center">
          <ul className="w-full flex flex-row justify-around items-center font-semibold text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="relative group">
            <NavLink to="/">
              <img
                src="/images/avatar.png"
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </NavLink>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black p-4 rounded-lg shadow-lg">
                <ul>
                  <li className="cursor-pointer hover:text-blue-500">
                    Profile
                  </li>
                  <li className="cursor-pointer hover:text-blue-500">
                    Settings
                  </li>
                  <li className="cursor-pointer hover:text-blue-500">Logout</li>
                </ul>
                <button
                  className="mt-4 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
