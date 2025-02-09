import React, { useEffect } from "react";
import { useUser } from "../../../contexts/UserContext";

export default function UserDetails() {
  const { user } = useUser();
  useEffect(() => {}, [user]);

  return (
    <div className="w-full h-full bg-gray-100 p-20">
      <div className="flex lg:flex-row flex-col justify-around items-center w-full h-full bg-white rounded-lg shadow-md">
        <div className="lg:w-1/2 w-full lg:h-full h-1/4 flex flex-col justify-center items-center my-2 ">
          <img
            src={user.image}
            alt="userProfile"
            width={220}
            className="rounded-full lg:h-2/3 h-full"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:h-full h-2/3 flex flex-col lg:justify-center justify-start items-start mt-4 px-4 ">
          <p>
            <span className="font-kanit text-lg">Name : </span>
            {user.name}
          </p>
          <p>
            <span className="font-kanit text-lg">Email : </span>
            {user.email}
          </p>
          <p>
            <span className="font-kanit text-lg">Number : </span>+91-
            {user.number}
          </p>
          <p>
            <span className="font-kanit text-lg">Gender : </span>
            {user.gender}
          </p>
          <p>
            <span className="font-kanit text-lg">Date of Birth : </span>
            {user.dob}
          </p>
        </div>
      </div>
    </div>
  );
}
