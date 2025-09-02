// src/DataContext.js
import React, { createContext, useState } from "react";

// Create context
export const DataContext = createContext();

// Provider component
export const DataProvider = ({ children }) => {
  const [cars, setCars] = useState([
    // Sample initial data (optional)
    // { id: 1, name: "Toyota Corolla", plate: "ABC-123" }
  ]);

  const [drivers, setDrivers] = useState([
    // Sample initial data (optional)
    // { id: 1, name: "John Doe" }
  ]);

  const [trips, setTrips] = useState([
    // Sample initial data (optional)
    // { id: 1, car: "Toyota Corolla", driver: "John Doe", date: "2025-09-01", fee: 50 }
  ]);

  return (
    <DataContext.Provider
      value={{ cars, setCars, drivers, setDrivers, trips, setTrips }}
    >
      {children}
    </DataContext.Provider>
  );
};
