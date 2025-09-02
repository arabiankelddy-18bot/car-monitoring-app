// src/pages/Trips.js
import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";

function Trips() {
  const { trips, setTrips, cars, drivers } = useContext(DataContext);
  const [newTrip, setNewTrip] = useState({
    car: "",
    driver: "",
    date: "",
    fee: "",
  });

  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!newTrip.car || !newTrip.driver || !newTrip.date || !newTrip.fee) return;
    setTrips([...trips, { id: Date.now(), ...newTrip }]);
    setNewTrip({ car: "", driver: "", date: "", fee: "" });
  };

  return (
    <div className="main-content min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-white text-shadow">Trips</h2>

      <form
        onSubmit={handleAddTrip}
        className="bg-white/80 p-6 rounded shadow-lg mb-6"
      >
        <h3 className="text-xl font-bold mb-4">Add New Trip</h3>
        <div className="flex flex-col md:flex-row gap-4 flex-wrap">
          <select
            value={newTrip.car}
            onChange={(e) => setNewTrip({ ...newTrip, car: e.target.value })}
            className="border p-2 rounded flex-1"
          >
            <option value="">Select Car</option>
            {cars.map((car) => (
              <option key={car.id} value={car.name}>{car.name}</option>
            ))}
          </select>

          <select
            value={newTrip.driver}
            onChange={(e) => setNewTrip({ ...newTrip, driver: e.target.value })}
            className="border p-2 rounded flex-1"
          >
            <option value="">Select Driver</option>
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.name}>{driver.name}</option>
            ))}
          </select>

          <input
            type="date"
            value={newTrip.date}
            onChange={(e) => setNewTrip({ ...newTrip, date: e.target.value })}
            className="border p-2 rounded flex-1"
          />

          <input
            type="number"
            placeholder="Fee ($)"
            value={newTrip.fee}
            onChange={(e) => setNewTrip({ ...newTrip, fee: e.target.value })}
            className="border p-2 rounded flex-1"
          />

          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded shadow"
          >
            Add Trip
          </button>
        </div>
      </form>

      <div className="bg-white/80 p-6 rounded shadow-lg">
        <h3 className="text-xl font-bold mb-4">All Trips</h3>
        {trips.length === 0 ? (
          <p className="text-gray-700">No trips recorded yet.</p>
        ) : (
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Car</th>
                <th className="border p-2">Driver</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Fee ($)</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip, idx) => (
                <tr
                  key={trip.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
                >
                  <td className="border p-2">{trip.car}</td>
                  <td className="border p-2">{trip.driver}</td>
                  <td className="border p-2">{trip.date}</td>
                  <td className="border p-2">{trip.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Trips;
