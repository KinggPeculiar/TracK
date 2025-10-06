import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#0077cc",
      color: "white"
    }}>
      <h2>POS Tracker</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>Sign In</Link>
        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Sign Up</Link>
        <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
