import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Full width header */}
      <Header />

      {/* Page content */}
      <section
        style={{
          flex: 1, // takes remaining vertical space
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "center" }}>
          About Us
        </h1>
        <p style={{ fontSize: "1.1rem", textAlign: "center", marginBottom: "2rem" }}>
          We are a passionate team of software developers dedicated to building
          scalable, secure, and user-friendly applications that empower businesses
          to achieve their goals.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver innovative software solutions that transform
          ideas into reality. We believe in leveraging modern technologies like
          <strong> Spring Boot, React, AWS, and Kubernetes</strong> to create high-performance
          products for enterprises and startups alike.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>✔️ Custom Web & Mobile App Development</li>
          <li>✔️ Cloud & DevOps Solutions (AWS, EKS, Docker, CI/CD)</li>
          <li>✔️ API & Microservices Architecture</li>
          <li>✔️ Data Integration & Analytics</li>
          <li>✔️ Product Consulting & Support</li>
        </ul>

        <h2>Our Values</h2>
        <p>
          We believe in <strong>quality, innovation, teamwork, and transparency</strong>.
          Every project we work on is guided by these values, ensuring that our
          clients receive the best possible solutions.
        </p>
      </section>

      {/* Full width footer */}
      <Footer />
    </div>
  );
}
