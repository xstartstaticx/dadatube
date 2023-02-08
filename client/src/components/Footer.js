import React from "react";
const Footer = () => (
  <footer
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: "60px",
      backgroundColor: "#202D33",
      color: "gray",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 1rem",
    }}
  >
    <p style={{ margin: 0 }}>Copyright &copy; DADATUBE 2023 </p>
    <div style={{ display: "flex" }}>
      <a href="#" style={{ marginRight: "1rem", color: "gray" }}>
        About
      </a>
      <a href="#" style={{ color: "gray" }}>
        Contact
      </a>
    </div>
    <p style={{ margin: 0, color: "#ed6f8" }}>Logout</p>
  </footer>
);
export default Footer;
