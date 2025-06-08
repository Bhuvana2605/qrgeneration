import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import logo from './nfc.png';

const Home = () => {
  return (
    <div className="home-root">
      <section className="hero-section">
        <img src={logo} alt="NFC Logo" className="hero-logo" />
        <h1>Nuclear Fuel Complex</h1>
        <hr className="hero-divider" />
        <p className="hero-subheading">
          Welcome to the secure employee authentication portal of NFC.
        </p>
        <Link to="/employeelist">
          <button>Go to Employee List (with QR)</button>
        </Link>
      </section>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Nuclear Fuel Complex. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
// This is the Home component that serves as the landing page for the application.
// It includes a hero section with a logo, title, subheading, and a button to navigate to the employee list page.