import React, { useEffect, useState } from "react";

export default function About() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/about")
      .then(res => res.text())
      .then(data => setContent(data));
  }, []);

  return (
    <div>
      <h2>About Us</h2>
      <p>{content}</p>
    </div>
  );
}
