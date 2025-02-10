import React from "react";
import NavbarWr from "../components/navbar/NavbarWR";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div
      id="main-container"
      className="w-full min-h-screen flex flex-col items-center p-5"
    >
      <NavbarWr />
      <div className="w-full h-full flex flex-col justify-center items-center mt-20 rounded-3xl">
        <div className="flex justify-start items-start w-4/5 border-b-1 border-gray-400">
          <h1 className="text-3xl font-pacifico mb-2">Profile Details</h1>
        </div>
        <div className="m-0 flex flex-row justify-start items-center w-4/5 h-full">
          {/* Sidebar */}
          <div className="border-r-1 h-[500px] pr-2 mr-2 flex flex-col justify-start items-start gap-5 py-5 max-w-32 border-gray-400 font-kanit">
            <Link to={"/profile/"}>Profile</Link>
            <Link to={"/profile/updateProfile"}>Update Profile</Link>
            <Link to={"/profile/resetPassword"}>Change Password</Link>
            <Link to={"/profile/theme"}>Theme</Link>
            <Link to={"/profile/policies"}>Policies</Link>
          </div>
          {/* Content Section */}
          <div className="w-full h-[490px]">
            <div className="border-1 border-gray-400 w-full h-full mt-1 rounded-md overflow-y-auto scrollbar-hide">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
