import React, { useState } from "react";

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Home",
      name: "John Doe",
      number: "9876543210",
      fullAddress: "123 Main Street",
      pinCode: "123456",
      city: "New York",
      state: "NY",
      email: "john@example.com",
    },
    {
      id: 2,
      title: "Office",
      name: "John Doe",
      number: "9876543210",
      fullAddress: "456 Business Ave",
      pinCode: "654321",
      city: "San Francisco",
      state: "CA",
      email: "john.work@example.com",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    title: "",
    name: "",
    number: "",
    fullAddress: "",
    pinCode: "",
    city: "",
    state: "",
    email: "",
  });

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editedAddress, setEditedAddress] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAddNew = () => {
    if (!newAddress.title || !newAddress.fullAddress) {
      alert("Please fill all required fields.");
      return;
    }
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setNewAddress({
      title: "",
      name: "",
      number: "",
      fullAddress: "",
      pinCode: "",
      city: "",
      state: "",
      email: "",
    });
    setIsAdding(false);
  };

  const handleEditClick = (id, addr) => {
    setEditingId(id);
    setEditedAddress({ ...addr });
  };

  const handleEditChange = (e) => {
    setEditedAddress({ ...editedAddress, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = (id) => {
    setAddresses(
      addresses.map((addr) => (addr.id === id ? editedAddress : addr))
    );
    setEditingId(null);
    setEditedAddress(null);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="w-full min-h-full flex justify-center items-center bg-gray-100 p-5">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          My Addresses
        </h2>

        {/* Add New Address */}
        {isAdding ? (
          <div className="w-full p-4 border rounded-lg bg-gray-50 shadow-sm mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title (e.g., Home, Office)"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.title}
              onChange={(e) =>
                setNewAddress({ ...newAddress, title: e.target.value })
              }
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.name}
              onChange={(e) =>
                setNewAddress({ ...newAddress, name: e.target.value })
              }
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.number}
              onChange={(e) =>
                setNewAddress({ ...newAddress, number: e.target.value })
              }
            />
            <textarea
              name="fullAddress"
              placeholder="Full Address"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.fullAddress}
              onChange={(e) =>
                setNewAddress({ ...newAddress, fullAddress: e.target.value })
              }
            />
            <input
              type="text"
              name="pinCode"
              placeholder="Pin Code"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.pinCode}
              onChange={(e) =>
                setNewAddress({ ...newAddress, pinCode: e.target.value })
              }
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.city}
              onChange={(e) =>
                setNewAddress({ ...newAddress, city: e.target.value })
              }
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.state}
              onChange={(e) =>
                setNewAddress({ ...newAddress, state: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded-md"
              value={newAddress.email}
              onChange={(e) =>
                setNewAddress({ ...newAddress, email: e.target.value })
              }
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={() => setIsAdding(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-1 rounded-md"
                onClick={handleAddNew}
              >
                Add
              </button>
            </div>
          </div>
        ) : (
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center mb-4"
            onClick={() => setIsAdding(true)}
          >
            ➕ Add New Address
          </button>
        )}

        {/* Existing Addresses */}
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="w-full mb-3 border rounded-lg shadow-sm"
          >
            <div
              className="w-full flex justify-between items-center bg-gray-200 p-3 rounded-t-lg text-gray-700 font-medium cursor-pointer"
              onClick={() => toggleAccordion(addr.id)}
            >
              {addr.title}
              <span>{activeAccordion === addr.id ? "▲" : "▼"}</span>
            </div>

            {activeAccordion === addr.id && (
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <p>
                  <strong>Name:</strong> {addr.name}
                </p>
                <p>
                  <strong>Phone Number:</strong> {addr.number}
                </p>
                <p>
                  <strong>Address:</strong> {addr.fullAddress}
                </p>
                <p>
                  <strong>Pin Code:</strong> {addr.pinCode}
                </p>
                <p>
                  <strong>City:</strong> {addr.city}
                </p>
                <p>
                  <strong>State:</strong> {addr.state}
                </p>
                <p>
                  <strong>Email:</strong> {addr.email}
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleEditClick(addr.id, addr)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleDelete(addr.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>

                {/* Edit Form */}
                {editingId === addr.id && (
                  <div className="mt-4">
                    <input
                      type="text"
                      name="title"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.title}
                      onChange={handleEditChange}
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.name}
                      onChange={handleEditChange}
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      name="number"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.number}
                      onChange={handleEditChange}
                      placeholder="Phone Number"
                    />
                    <textarea
                      name="fullAddress"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.fullAddress}
                      onChange={handleEditChange}
                      placeholder="Full Address"
                    />
                    <input
                      type="text"
                      name="pinCode"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.pinCode}
                      onChange={handleEditChange}
                      placeholder="Pin Code"
                    />
                    <input
                      type="text"
                      name="city"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.city}
                      onChange={handleEditChange}
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="state"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.state}
                      onChange={handleEditChange}
                      placeholder="State"
                    />
                    <input
                      type="email"
                      name="email"
                      className="w-full p-2 mb-2 border rounded-md"
                      value={editedAddress.email}
                      onChange={handleEditChange}
                      placeholder="Email"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-md"
                        onClick={() => handleSaveEdit(addr.id)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
