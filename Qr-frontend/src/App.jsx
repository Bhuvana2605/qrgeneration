import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import EmployeeListPage from "./pages/EmployeeListPage";
import ScanQRPage from "./pages/ScanQRPage";
import './pages/Home.css';

// Unified Navbar for all pages, centered with gap
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
      <li>
        <Link to="/" className="">
          Home
        </Link>
      </li>
      <li>
        <Link to="/employeelist" className="">
          Employee List
        </Link>
      </li>
      <li>
        <Link to="/scan" className="">
          Scan QR
        </Link>
      </li>
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
      </Routes>
    </div>
  );
}

export default App;
// This is the main App component that sets up the routing for the application.