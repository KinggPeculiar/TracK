import React from "react";

function Footer() {
  return (
    <footer style={{ 
      textAlign: "center", 
      padding: "1rem", 
      backgroundColor: "#f4f4f4", 
      borderTop: "1px solid #ddd",
      marginTop: "2rem"
    }}>
      <p>© {new Date().getFullYear()} POS Tracker | Built with React</p>
    </footer>
  );
}

export default Footer;
