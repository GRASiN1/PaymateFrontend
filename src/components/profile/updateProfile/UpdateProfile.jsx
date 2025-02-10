import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

export default function UpdateProfile() {
  const { user, updateUser, uploadImage } = useUser();
  const navigate = useNavigate();

  const [tempUser, setTempUser] = useState({ ...user });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const uploadedImageUrl = await uploadImage(file); // ✅ Upload image
      if (uploadedImageUrl) {
        setTempUser({ ...tempUser, image: uploadedImageUrl }); // ✅ Update with uploaded URL
      } else {
        alert("Image upload failed. Try again.");
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await updateUser(
      tempUser.name,
      tempUser.email,
      tempUser.number,
      tempUser.dob,
      tempUser.gender,
      tempUser.image
    );
    alert("Profile updated successfully!");
    navigate("/profile/");
  };

  const handleCancel = () => {
    setTempUser({ ...user });
    navigate("/profile/");
  };

  return (
    <div className="w-full lg:h-full h-max bg-gray-100 flex justify-center items-center p-5">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-4xl bg-white rounded-lg shadow-md p-6 gap-6">
        {/* Form Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <img
            src={tempUser.image}
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
        <div className="flex flex-col w-full lg:w-2/3">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSave}
            encType="multipart/form-data"
          >
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
            <select
              className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="gender"
              value={tempUser.gender}
              onChange={(e) =>
                setTempUser({ ...tempUser, [e.target.name]: e.target.value })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <div className="flex flex-row justify-between mt-5">
              <button
                className="bg-blue-500 text-white px-5 py-2 rounded-md w-1/2 mr-2 hover:bg-blue-600 transition"
                type="submit"
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
          </form>
        </div>
      </div>
    </div>
  );
}
