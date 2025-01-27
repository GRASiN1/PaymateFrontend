import React from "react";
import NavbarWr from "../components/navbar/NavbarWR";

export default function Profile() {
  return (
    <div
      id="main-container"
      className="w-full min-h-screen flex flex-col items-center p-5"
    >
      <NavbarWr />
      <div className="w-full h-full flex flex-col justify-center items-center mt-20 border-1 rounded-3xl">
        <h1>Profile page</h1>
      </div>
    </div>
  );
}
