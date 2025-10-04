import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Welcome to Web technology.</h2>
        <p>This is the Home page.</p>
      </main>
      <Footer />
    </div>
  );
}
