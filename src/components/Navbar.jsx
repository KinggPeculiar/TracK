import React from "react";
import { Link } from "react-router-dom";

const linkClasses = "relative text-white no-underline hover:text-blue-400 transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full";

function Navbar() {
  return (
    <nav className="bg-[#030b1d] flex justify-between items-center p-4">
      <Link to="/" className="text-[#ff0004] text-4xl font-bold hover:cursor-pointer ">Trac<span className="text-[#25b764]">K</span></Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/signin" className={linkClasses}>Sign In</Link>
        <Link to="/signup" className={linkClasses}>Sign Up</Link>
        <Link to="/dashboard" className={linkClasses}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
