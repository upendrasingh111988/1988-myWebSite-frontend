import React from "react";

export default function Header() {
  return (
    <header style={{ background: "#282c34", padding: "20px", color: "white" }}>
      <h1>My Website</h1>
      <nav>
        <a href="/" style={{ margin: "0 10px", color: "white" }}>Home</a>
        <a href="/about" style={{ margin: "0 10px", color: "white" }}>About Us</a>
        <a href="/contact" style={{ margin: "0 10px", color: "white" }}>Contact</a>
      </nav>
    </header>
  );
}
