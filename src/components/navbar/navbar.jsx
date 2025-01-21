import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full h-16 flex flex-row justify-around items-center fixed top-0 z-10 font-pacifico">
      <div className="w-4/5 h-14 flex flex-row justify-around items-center fixed top-0 z-10 pt-8 pb-8 border-1 m-1 rounded-full">
        <div id="brandLogo" className="w-full flex justify-center items-center">
          <NavLink to="/">
            <img src="/images/logoNoBg2.png" alt="brand" width={150} />
          </NavLink>
        </div>
        <div id="menu" className="w-full flex justify-center items-center">
          <ul className="w-full flex flex-row justify-around items-center font-semibold text-xl">
            <NavLink to="/">
              <li className="cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="cursor-pointer">About</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="cursor-pointer">Contact</li>
            </NavLink>
          </ul>
        </div>
        <div id="profile" className="w-full flex justify-center items-center">
          <div className="relative group">
            <NavLink to="/">
              <img
                src="/images/avatar.png"
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer"
                onMouseEnter={() => setIsOpen(!isOpen)}
              />
            </NavLink>
            {isOpen && (
              <div
                className="absolute right-0 mt-2 bg-white text-black p-4 rounded-lg shadow-lg"
                onMouseLeave={() => setIsOpen(!isOpen)}
              >
                <ul className="flex flex-col items-center justify-center">
                  <NavLink to="/profile">
                    <li className="cursor-pointer hover:text-blue-500">
                      Profile
                    </li>
                  </NavLink>

                  <NavLink to="/groups">
                    <li className="cursor-pointer hover:text-blue-500">
                      Groups
                    </li>
                  </NavLink>
                </ul>
                <button
                  className="mt-4 text-white bg-red-600 px-3 py-1 rounded hover:bg-blue-500 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
