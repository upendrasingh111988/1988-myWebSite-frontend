import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(() => setStatus("Message sent successfully!"));
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        /><br />
        <input
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
        /><br />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
        /><br />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}
