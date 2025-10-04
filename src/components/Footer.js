import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "white",
        padding: "1rem",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // 📧 left, 📞 right
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          📧 Email:{" "}
          <a
            href="mailto:contact@mysoftwarecompany.com"
            style={{ color: "white", textDecoration: "none" }}
          >
            contact@mysoftwarecompany.com
          </a>
        </div>
        <div>
          📞 Phone: <span>+91-9876543210</span>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem" }}>
        © 2025 My Software Company. All rights reserved.
      </p>
    </footer>
  );
}
