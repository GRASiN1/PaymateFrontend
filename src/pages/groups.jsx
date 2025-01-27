import React from "react";
import NavbarWR from "../components/navbar/NavbarWR";
import { Outlet } from "react-router-dom";

export default function Groups() {
  return (
    <div
      id="main-container"
      className="w-full min-h-screen flex flex-col items-center p-5"
    >
      <NavbarWR />
      <div className="w-full min-h-192 flex flex-col justify-start items-center mt-20 border-1 rounded-3xl">
        <Outlet />
      </div>
    </div>
  );
}
