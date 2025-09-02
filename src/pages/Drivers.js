// src/pages/Drivers.js
import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";

function Drivers() {
  const { drivers, setDrivers } = useContext(DataContext);
  const [newDriver, setNewDriver] = useState({ name: "" });

  const handleAddDriver = (e) => {
    e.preventDefault();
    if (!newDriver.name) return;
    setDrivers([...drivers, { id: Date.now(), ...newDriver }]);
    setNewDriver({ name: "" });
  };

  return (
    <div className="main-content min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-white text-shadow">Drivers</h2>

      <form
        onSubmit={handleAddDriver}
        className="bg-white/80 p-6 rounded shadow-lg mb-6"
      >
        <h3 className="text-xl font-bold mb-4">Add New Driver</h3>
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Driver Name"
            value={newDriver.name}
            onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
          >
            Add Driver
          </button>
        </div>
      </form>

      <div className="bg-white/80 p-6 rounded shadow-lg">
        <h3 className="text-xl font-bold mb-4">All Drivers</h3>
        {drivers.length === 0 ? (
          <p className="text-gray-700">No drivers available.</p>
        ) : (
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, idx) => (
                <tr
                  key={driver.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
                >
                  <td className="border p-2">{driver.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Drivers;
