import React from "react";
import { useUser } from "../../../contexts/UserContext";

export default function UserDetails() {
  const { user } = useUser();

  return (
    <div className="w-full min-h-full bg-gray-100 p-6 flex justify-center  items-center">
      <div className="flex flex-col justify-center items-center md:flex-row bg-white rounded-lg shadow-lg p-6 w-full h-full max-w-4xl">
        {/* User Image */}
        <div className="flex justify-center items-center md:justify-start w-full md:w-1/3">
          <img
            src={user.image}
            alt="User Profile"
            className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover"
          />
        </div>

        {/* User Details */}
        <div className="flex flex-col justify-center mt-4 md:mt-0 md:ml-6 w-full md:w-2/3 text-gray-800">
          <p className="text-lg">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Number:</span> +91-{user.number}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Date of Birth:</span> {user.dob}
          </p>
        </div>
      </div>
    </div>
  );
}
