import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api//contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => setStatus("✅ Message sent successfully!"))
      .catch(() => setStatus("❌ Failed to send message."));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Include your existing header */}
      <Header />

      {/* Contact Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          background: "#f4f7fa",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                resize: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "none",
                background: "#007BFF",
                color: "white",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0056b3")}
              onMouseOut={(e) => (e.target.style.background = "#007BFF")}
            >
              Send Message
            </button>
          </form>

          {status && (
            <p style={{ marginTop: "15px", textAlign: "center", color: "#28a745" }}>
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Include your existing footer */}
      <Footer />
    </div>
  );
}
