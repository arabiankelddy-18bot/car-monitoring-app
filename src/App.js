// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import Drivers from "./pages/Drivers";
import Trips from "./pages/Trips";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 text-white p-6 flex flex-col">
          <h1 className="text-2xl font-bold mb-6">Car Monitoring</h1>
          <nav className="flex-1">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:bg-blue-700 px-3 py-2 rounded block transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="hover:bg-blue-700 px-3 py-2 rounded block transition"
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/drivers"
                  className="hover:bg-blue-700 px-3 py-2 rounded block transition"
                >
                  Drivers
                </Link>
              </li>
              <li>
                <Link
                  to="/trips"
                  className="hover:bg-blue-700 px-3 py-2 rounded block transition"
                >
                  Trips
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="hover:bg-blue-700 px-3 py-2 rounded block transition"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto text-sm opacity-70">
            &copy; 2025 Car Monitoring System
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

