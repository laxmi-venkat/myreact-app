import React from "react";

const About = () => {
  const sectionStyle = {
    minHeight: "100vh", // full viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertical centering
    alignItems: "center", // horizontal centering
    textAlign: "center",
    padding: "0 20px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "20px",
    color: "#035BAA",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#232c32",
    marginBottom: "20px",
    maxWidth: "700px",
  };

  const buttonStyle = {
    padding: "10px 26px",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    marginRight: "16px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>About Superchat LLC</h2>
      <p style={paragraphStyle}>
        Superchat LLC pioneers the convergence of Large Language Models, Robotics, and Intelligent Chips. We create super intelligence solutions that transform how organizations operate, think, and evolve.
      </p>
      <p style={paragraphStyle}>
        Our tools, such as mobile and web apps, custom dashboards, and reporting systems, help clients monitor, analyze, and extend the lifespan of their operations.
      </p>
      <div>
        <button style={{ ...buttonStyle, background: "#035BAA", color: "#fff", border: "none" }}>Products</button>
        <button style={{ ...buttonStyle, background: "#fff", color: "#035BAA", border: "2px solid #035BAA" }}>Industries</button>
      </div>
    </section>
  );
};

export default About;
