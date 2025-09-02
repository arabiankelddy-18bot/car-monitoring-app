// src/pages/Dashboard.js
import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Dashboard() {
  const { cars, drivers, trips } = useContext(DataContext);

  const totalRevenue = trips.reduce((sum, trip) => sum + Number(trip.fee), 0);

  return (
    <div className="main-content min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-white text-shadow">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Cars */}
        <div className="bg-blue-700/80 text-white p-6 rounded shadow-lg card">
          <h3 className="text-lg font-bold mb-2">Total Cars</h3>
          <p className="text-3xl font-bold">{cars.length}</p>
        </div>

        {/* Total Drivers */}
        <div className="bg-green-700/80 text-white p-6 rounded shadow-lg card">
          <h3 className="text-lg font-bold mb-2">Total Drivers</h3>
          <p className="text-3xl font-bold">{drivers.length}</p>
        </div>

        {/* Total Trips */}
        <div className="bg-yellow-600/80 text-white p-6 rounded shadow-lg card">
          <h3 className="text-lg font-bold mb-2">Total Trips</h3>
          <p className="text-3xl font-bold">{trips.length}</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-red-700/80 text-white p-6 rounded shadow-lg card">
          <h3 className="text-lg font-bold mb-2">Revenue ($)</h3>
          <p className="text-3xl font-bold">{totalRevenue}</p>
        </div>
      </div>

      {/* Optional quick stats or charts */}
      <div className="mt-8 bg-white/80 p-6 rounded shadow-lg">
        <h3 className="text-xl font-bold mb-4">Recent Trips</h3>
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
              {trips.slice(-5).map((trip, idx) => (
                <tr key={trip.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
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

export default Dashboard;
