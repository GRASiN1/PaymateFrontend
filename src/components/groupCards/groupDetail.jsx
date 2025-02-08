import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GroupDetail() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
  ];

  const [allUsers, setAllUsers] = useState(users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [expandedExpense, setExpandedExpense] = useState(null);

  const handleSelectUser = (user) => {
    setAllUsers(allUsers.filter((u) => u !== user));
    setSelectedUsers([...selectedUsers, user]);
  };

  const handleDeselectUser = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u !== user));
    setAllUsers([...allUsers, user]);
  };

  const handleLogExpense = () => {
    if (!title || !amount || selectedUsers.length === 0 || !payer) return;

    const newExpense = {
      id: expenses.length + 1,
      title,
      amount: parseFloat(amount),
      participants: selectedUsers,
      payer,
    };

    setExpenses([...expenses, newExpense]);
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
        exp.participants.some((participant) => participant.id === user.id)
      )
      .reduce((sum, exp) => sum + exp.amount / exp.participants.length, 0),
  }));

  const graphData = users.map((user) => ({
    name: user.name,
    amount: expenseShare.find((exp) => exp.name === user.name)?.amount || 0,
  }));

  return (
    <div className="w-full min-h-192 flex justify-center items-center flex-col lg:flex-row gap-4 p-4 border rounded-lg shadow-md">
      {/* Left Section: Expense Form */}
      <div className="lg:w-1/2 w-full h-full flex flex-col gap-4 p-4 border-r">
        <input
          type="text"
          placeholder="Expense Title"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* User Selection */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 border p-2 h-40 overflow-auto scrollbar-hide">
            <h3 className="text-sm font-bold">All Users</h3>
            {allUsers.map((user) => (
              <div
                key={user.id}
                className="p-2 border my-1 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectUser(user)}
              >
                {user.name}
              </div>
            ))}
          </div>
          <div className="flex-1 border p-2 h-40 overflow-auto scrollbar-hide">
            <h3 className="text-sm font-bold">Selected Users</h3>
            {selectedUsers.map((user) => (
              <div
                key={user.id}
                className="p-2 border my-1 cursor-pointer hover:bg-gray-200"
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
        >
          <option value="" disabled>
            Select Payer
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>

        {/* Action Buttons */}
        <button
          className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
          onClick={handleLogExpense}
        >
          Save Expense
        </button>
        <button className="bg-red-500 text-white p-2 rounded mt-2 hover:bg-red-600">
          End Trip
        </button>
      </div>

      {/* Right Section: Expenses & Graph */}
      <div className="lg:w-1/2 w-full h-full flex flex-col gap-4">
        {/* Expenses Accordion */}
        <div className="w-full h-56 overflow-auto scrollbar-hide border rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">
            Logged Expenses : Total Expenses - {totalExpenses}
          </h3>
          {expenses.length === 0 ? (
            <p className="text-gray-500">No expenses logged yet.</p>
          ) : (
            expenses.map((expense) => (
              <div key={expense.id} className="border-b pb-2 mb-2">
                <button
                  onClick={() => toggleAccordion(expense.id)}
                  className="w-full text-left p-2 font-semibold bg-gray-200 rounded-md"
                >
                  {expense.title} - ${expense.amount}
                </button>
                {expandedExpense === expense.id && (
                  <div className="p-2 text-sm bg-gray-100 mt-1 rounded">
                    <p>
                      <strong>Payer:</strong> {expense.payer}
                    </p>
                    <p>
                      <strong>Participants:</strong>{" "}
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
