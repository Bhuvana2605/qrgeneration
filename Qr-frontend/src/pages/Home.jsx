import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
// Use the correct path to your logo in the pages folder
import logo from './nfc.png';

const Home = () => {
  return (
    <div className="home-root">
      <section className="hero-section">
        {/* Logo */}
        <img src={logo} alt="NFC Logo" className="hero-logo" />
        <h1>Nuclear Fuel Complex</h1>
        <hr className="hero-divider" />
        <p className="hero-subheading">
          Welcome to the secure employee authentication portal of NFC.
        </p>
        
      </section>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Nuclear Fuel Complex. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;