import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGroups } from "../../contexts/GroupContext";
import { useExpense } from "../../contexts/ExpenseContext";

export default function GroupDetail() {
  const { closeGroup, fetchGroupDetails } = useGroups();
  const { createExpense, allExpenses } = useExpense();
  const location = useLocation();
  const groupId = location.state;
  const groupDetails = fetchGroupDetails(groupId);
  const users = groupDetails.groupMembers.map((member) => member);
  const [allUsers, setAllUsers] = useState(users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState(null);
  const [expenses, setExpenses] = useState(allExpenses);
  const [expandedExpense, setExpandedExpense] = useState(null);
  async function handleEndTrip() {
    await closeGroup(groupDetails._id);
  }
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Link Copied"))
      .catch((err) => console.error("Failed to copy:", err));
  }
  const handleSelectUser = (user) => {
    if (!groupDetails.isOpen) return;
    setAllUsers(allUsers.filter((u) => u._id !== user._id));
    setSelectedUsers([...selectedUsers, user]);
  };
  const handleDeselectUser = (user) => {
    if (!groupDetails.isOpen) return;
    setSelectedUsers(selectedUsers.filter((u) => u._id !== user._id));
    setAllUsers([...allUsers, user]);
  };
  const handleLogExpense = async () => {
    if (
      !groupDetails.isOpen ||
      !title ||
      !amount ||
      selectedUsers.length === 0 ||
      !payer
    )
      return;
    const expense = {
      expenseTitle: title,
      amount: parseFloat(amount),
      paidBy: payer,
      participants: selectedUsers.map((user) => ({ _id: user._id })),
    };
    await createExpense(expense, groupDetails._id);
    setTitle("");
    setAmount("");
    setSelectedUsers([]);
    setAllUsers(users);
    setPayer(null);
  };
  const toggleAccordion = (id) => {
    setExpandedExpense(expandedExpense === id ? null : id);
  };
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const expenseShare = users.map((user) => ({
    name: user.name,
    amount: expenses
      .filter((exp) =>
        exp.participants.some((participant) => participant._id === user._id)
      )
      .reduce((sum, exp) => sum + exp.amount / exp.participants.length, 0),
  }));
  const graphData = users.map((user) => ({
    name: user.name,
    amount: expenseShare.find((exp) => exp.name === user.name)?.amount || 0,
  }));
  return (
    <div className="w-full min-h-192 flex justify-center items-center flex-col lg:flex-row gap-4 p-4 border rounded-lg shadow-md">
      {/* Input Area */}
      <div className="lg:w-1/2 w-full h-full flex flex-col gap-4 p-4 border-r">
        {/* Invite Area */}
        <div
          className="p-2 border rounded cursor-pointer"
          hidden={!groupDetails.isOpen}
          onClick={() => {
            copyToClipboard(
              `http://localhost:3000/groups/join/${groupDetails.groupLink}`
            );
          }}
        >
          <span className="text-lg font-bold">Invitation Link : </span>
          http://localhost:3000/groups/join/{groupDetails.groupLink}
        </div>
        <input
          type="text"
          placeholder="Expense Title"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={!groupDetails.isOpen}
        />
        <input
          type="number"
          placeholder="Amount"
          className="p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!groupDetails.isOpen}
        />

        {/* User Selection */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* All Users List */}
          <div className="flex-1 border p-2 h-40 overflow-auto scrollbar-hide">
            <h3 className="text-sm font-bold">All Users</h3>
            {allUsers.map((user) => (
              <div
                key={user._id}
                className={`p-2 border my-1 cursor-pointer hover:bg-gray-200 ${
                  !groupDetails.isOpen ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={() => handleSelectUser(user)}
              >
                {user.name}
              </div>
            ))}
          </div>

          {/* Selected Users List */}
          <div className="flex-1 border p-2 h-40 overflow-auto scrollbar-hide">
            <h3 className="text-sm font-bold">Selected Users</h3>
            {selectedUsers.map((user) => (
              <div
                key={user._id}
                className={`p-2 border my-1 cursor-pointer hover:bg-gray-200 ${
                  !groupDetails.isOpen ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={() => handleDeselectUser(user)}
              >
                {user.name}
              </div>
            ))}
          </div>
        </div>

        {/* Payer Selection */}
        <select
          className="p-2 border rounded"
          value={payer || ""}
          onChange={(e) => setPayer(e.target.value)}
          disabled={!groupDetails.isOpen}
        >
          <option value="" disabled>
            Select Payer
          </option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>

        {/* Action Buttons */}
        <button
          className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 disabled:bg-gray-400"
          onClick={handleLogExpense}
          disabled={!groupDetails.isOpen}
        >
          Save Expense
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded mt-2 hover:bg-red-600 disabled:bg-gray-400"
          onClick={handleEndTrip}
          disabled={!groupDetails.isOpen}
        >
          End Trip
        </button>
      </div>
      {/* Expenses Section */}
      <div className="lg:w-1/2 w-full h-full flex flex-col gap-4">
        {/* Expenses Accordion */}
        <div className="w-full h-56 overflow-auto scrollbar-hide border rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">
            Logged Expenses : Total Expenses - ₹ {totalExpenses}
          </h3>
          {expenses.length === 0 ? (
            <p className="text-gray-500">No expenses logged yet.</p>
          ) : (
            expenses.map((expense) => (
              <div key={expense._id} className="border-b pb-2 mb-2">
                <button
                  onClick={() => toggleAccordion(expense._id)}
                  className="w-full text-left p-2 font-semibold bg-gray-200 rounded-md"
                >
                  {expense.expenseTitle} - ₹ {expense.amount}
                </button>
                {expandedExpense === expense._id && (
                  <div className="p-2 text-sm bg-gray-100 mt-1 rounded">
                    <p>
                      <strong>Payer:</strong>
                      {expense.paidBy.name}
                    </p>
                    <p>
                      <strong>Participants:</strong>
                      {expense.participants.map((u) => u.name).join(", ")}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Expense Graph */}
        <div className="w-full h-80 p-4 border rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={graphData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4A90E2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
