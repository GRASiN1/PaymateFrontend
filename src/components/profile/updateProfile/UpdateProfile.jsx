import React, { useState } from "react";

export default function UpdateProfile() {
  const [User, setUserDetails] = useState({
    img: "/images/avatar.png",
    name: "Gaurav Raj Singh",
    number: "9198888436",
    email: "gauravrajsingh047@gmail.com",
    gender: "Male",
    dob: "12-08-2004",
  });

  const [tempUser, setTempUser] = useState({ ...User });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTempUser({ ...tempUser, img: URL.createObjectURL(file) });
    }
  };

  const handleSave = () => {
    setUserDetails(tempUser);
  };

  const handleCancel = () => {
    setTempUser({ ...User });
  };

  return (
    <div className="w-full lg:h-full h-max bg-gray-100 flex justify-center items-center p-5">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-4xl bg-white rounded-lg shadow-md p-6 gap-6">
        {/* Image Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <img
            src={tempUser.img}
            alt="userProfile"
            className="rounded-full w-40 h-40 object-cover border-2 border-gray-300"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="fileInput"
          />
          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            <span className="font-kanit">Edit</span> 🖊️
          </button>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full lg:w-2/3">
          <form className="flex flex-col gap-4">
            <input
              className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              placeholder="Name"
              value={tempUser.name}
              onChange={(e) =>
                setTempUser({ ...tempUser, [e.target.name]: e.target.value })
              }
            />
            <input
              className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="Email"
              value={tempUser.email}
              onChange={(e) =>
                setTempUser({ ...tempUser, [e.target.name]: e.target.value })
              }
            />
            <input
              className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="number"
              placeholder="Phone Number"
              value={tempUser.number}
              onChange={(e) =>
                setTempUser({ ...tempUser, [e.target.name]: e.target.value })
              }
            />
            <input
              className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="dob"
              placeholder="Date of Birth"
              value={tempUser.dob}
              onChange={(e) =>
                setTempUser({ ...tempUser, [e.target.name]: e.target.value })
              }
            />
            <input
              className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="gender"
              placeholder="Gender"
              value={tempUser.gender}
              onChange={(e) =>
                setTempUser({ ...tempUser, [e.target.name]: e.target.value })
              }
            />
          </form>

          {/* Buttons */}
          <div className="flex flex-row justify-between mt-5">
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded-md w-1/2 mr-2 hover:bg-blue-600 transition"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-md w-1/2 ml-2 hover:bg-red-600 transition"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
