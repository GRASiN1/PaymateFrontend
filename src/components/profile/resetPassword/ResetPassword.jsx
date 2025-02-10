import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

export default function ResetPassword() {
  const navigate = useNavigate();

  const { updatePassword } = useUser();

  const [oldPasswordInput, setOldPasswordInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = async (e) => {
    e.preventDefault(); // Prevents page reload

    if (newPassword !== confirmPassword) {
      alert("❌ New passwords do not match!");
      return;
    }
    console.log(oldPasswordInput, newPassword);
    try {
      await updatePassword(oldPasswordInput, newPassword);
      alert("✅ Password updated successfully!");
      navigate("/profile/");
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  const handleCancel = () => {
    setOldPasswordInput("");
    setNewPassword("");
    setConfirmPassword("");
    navigate("/profile/");
  };

  return (
    <div className="w-full h-full bg-gray-100 flex justify-center items-center p-5">
      <div className="flex flex-col justify-center items-center w-full max-w-md bg-white rounded-lg shadow-md p-6 gap-6">
        <h2 className="text-xl font-semibold text-gray-700">Reset Password</h2>

        <form className="flex flex-col gap-5 w-full" onSubmit={handleSave}>
          {/* Old Password Input */}
          <input
            type="password"
            placeholder="Enter Old Password"
            className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={oldPasswordInput}
            onChange={(e) => setOldPasswordInput(e.target.value)}
          />

          {/* New Password Input */}
          <input
            type="password"
            placeholder="Enter New Password"
            className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {/* Confirm New Password Input */}
          <input
            type="password"
            placeholder="Confirm New Password"
            className="bg-gray-50 shadow-sm p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Buttons */}
          <div className="flex flex-row justify-between mt-5 w-full">
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded-md w-1/2 mr-2 hover:bg-blue-600 transition"
              type="submit"
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-md w-1/2 ml-2 hover:bg-red-600 transition"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
