import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav style={{ margin: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
