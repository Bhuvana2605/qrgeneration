import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import EmployeeListPage from "./pages/EmployeeListPage";
import ScanQRPage from "./pages/ScanQRPage";
import TestQR from "./pages/TestQR";
import './pages/Home.css';

const Navbar = () => (
  <nav className="navbar">
    <ul style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/employeelist">Employee List</Link></li>
      <li><Link to="/scan">Scan QR</Link></li>
    </ul>
  </nav>
);

function App() {
  return (
    <div className="home-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employeelist" element={<EmployeeListPage />} />
        <Route path="/scan" element={<ScanQRPage />} />
        <Route path="/testqr" element={<TestQR />} />
      </Routes>
    </div>
  );
}

export default App;
// This is the main App component that sets up the routing for the application.
// It includes a Navbar for navigation and defines routes for Home, Employee List, Scan QR, and Test QR pages.
// The Navbar component provides links to navigate between different pages of the application.
// The Home component serves as the landing page, while EmployeeListPage displays a list of employees with their QR codes.
// The ScanQRPage allows users to scan or paste encrypted QR codes, and TestQR is a simple test page for QR scanning functionality.