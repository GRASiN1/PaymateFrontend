import React from "react";
import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Groups() {
  return (
    <div
      id="main-container"
      className="w-full min-h-screen flex flex-col items-center p-5"
    >
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center mt-20 border-1 rounded-3xl">
        <Outlet />
      </div>
    </div>
  );
}
