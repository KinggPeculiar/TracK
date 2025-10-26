import React from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";

const linkClasses = "relative text-[#25b764] no-underline hover:text-[#28b969] transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#25b764] before:transition-all before:duration-300 hover:before:w-full";

function PublicNavbar() {
  return (
    <nav className="bg-gray-100 flex justify-between items-baseline p-4 border-b-2 border-b-gray-100">
      <Link to="/">
        <Logo />
      </Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/signin" className={linkClasses}>Sign In</Link>
        <Link to="/signup" className={linkClasses}>Sign Up</Link>
        <Link to="/dashboard" className={linkClasses}>Dashboard</Link>
      </div>
    </nav>
  );
}


export default PublicNavbar;
