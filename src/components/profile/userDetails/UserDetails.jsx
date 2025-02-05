import React from "react";

export default function UserDetails() {
  let User = {
    img: "/images/avatar.png",
    name: "Gaurav Raj Singh",
    number: "9198888436",
    email: "gauravrajsingh047@gmail.com",
    gender: "Male",
    dob: "12-08-2004",
  };
  return (
    <div className="w-full h-full bg-gray-100 p-20">
      <div className="flex lg:flex-row flex-col justify-around items-center w-full h-full bg-white rounded-lg shadow-md">
        <div className="lg:w-1/2 w-full lg:h-full h-1/4 flex flex-col justify-center items-center my-2 ">
          <img
            src={User.img}
            alt="userProfile"
            className="rounded-full lg:h-2/3 h-full"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:h-full h-2/3 flex flex-col lg:justify-center justify-start items-start mt-4 px-4 ">
          <p>
            {" "}
            <span className="font-kanit text-lg">Name : </span>
            {User.name}
          </p>
          <p>
            {" "}
            <span className="font-kanit text-lg">Email : </span>
            {User.email}
          </p>
          <p>
            {" "}
            <span className="font-kanit text-lg">Number : </span>+91-
            {User.number}
          </p>
          <p>
            {" "}
            <span className="font-kanit text-lg">Gender : </span>
            {User.gender}
          </p>
          <p>
            {" "}
            <span className="font-kanit text-lg">Date of Birth : </span>
            {User.dob}
          </p>
        </div>
      </div>
    </div>
  );
}
