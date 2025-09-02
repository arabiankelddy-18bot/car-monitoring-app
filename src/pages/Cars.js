// src/pages/Cars.js
import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";

function Cars() {
  const { cars, setCars } = useContext(DataContext);
  const [newCar, setNewCar] = useState({ name: "", plate: "" });

  const handleAddCar = (e) => {
    e.preventDefault();
    if (!newCar.name || !newCar.plate) return;
    setCars([...cars, { id: Date.now(), ...newCar }]);
    setNewCar({ name: "", plate: "" });
  };

  return (
    <div className="main-content min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-white text-shadow">Cars</h2>

      <form
        onSubmit={handleAddCar}
        className="bg-white/80 p-6 rounded shadow-lg mb-6"
      >
        <h3 className="text-xl font-bold mb-4">Add New Car</h3>
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Car Name"
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            placeholder="Plate Number"
            value={newCar.plate}
            onChange={(e) => setNewCar({ ...newCar, plate: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          >
            Add Car
          </button>
        </div>
      </form>

      <div className="bg-white/80 p-6 rounded shadow-lg">
        <h3 className="text-xl font-bold mb-4">All Cars</h3>
        {cars.length === 0 ? (
          <p className="text-gray-700">No cars available.</p>
        ) : (
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Plate</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, idx) => (
                <tr
                  key={car.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
                >
                  <td className="border p-2">{car.name}</td>
                  <td className="border p-2">{car.plate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Cars;
