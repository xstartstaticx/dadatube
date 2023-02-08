import React from "react";
const Footer = () => (
  <footer
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: "60px",
      backgroundColor: "black",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 1rem",
    }}
  >
    <p style={{ margin: 0 }}>Copyright &copy; DADATUBE 2023 </p>
    <div style={{ display: "flex" }}>
      <a href="#" style={{ marginRight: "1rem", color: "white" }}>
        About
      </a>
      <a href="#" style={{ color: "white" }}>
        Contact
      </a>
    </div>
    <p style={{ margin: 0 }}>Logout</p>
  </footer>
);
export default Footer;
