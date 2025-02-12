import React, { useState } from "react";
import GroupCards from "./groupCards";
import { useGroups } from "../../contexts/GroupContext";

export default function GroupList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupFrom, setGroupForm] = useState({
    groupTitle: "",
    groupDescription: "",
  });
  const { groups, createGroup } = useGroups();
  function handleOnChange(e) {
    setGroupForm({ ...groupFrom, [e.target.name]: e.target.value });
  }
  const handleCreateGroup = async () => {
    if (!groupFrom.groupTitle.trim()) {
      alert("Please enter a group name!");
      return;
    }
    await createGroup(groupFrom);
    setIsModalOpen(false);
    setGroupForm({
      groupTitle: "",
      groupDescription: "",
    });
  };
  return (
    <div className="w-full grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ">
      <div className="flex flex-col items-center">
        <div
          className="bg-gray-100 rounded-xl p-4 w-80 h-52 shadow-md border flex justify-center items-center cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-4xl text-gray-600 font-bold">+</span>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-xl font-semibold mb-4">Create Group</h2>
              <input
                type="text"
                placeholder="Enter group name"
                name="groupTitle"
                className="w-full p-2 border rounded mb-4"
                value={groupFrom.groupTitle}
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Enter group Description"
                name="groupDescription"
                className="w-full p-2 border rounded mb-4"
                value={groupFrom.groupDescription}
                onChange={handleOnChange}
              />
              <div className="flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleCreateGroup}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {(groups || []).map((group) => {
        return (
          <GroupCards
            key={group._id}
            groupTitle={group.groupTitle}
            groupDescription={group.groupDescription}
            groupMembers={group.groupMembers}
            tripExpense={group.totalExpenses}
            id={group._id}
            groupDetails={group}
          />
        );
      })}
    </div>
  );
}
