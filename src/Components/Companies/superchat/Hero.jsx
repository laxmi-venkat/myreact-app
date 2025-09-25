import React from "react";

const Hero = () => {
  const sectionStyle = {
    minHeight: "70vh",
    display: "flex",
    alignItems: "flex-start", // move content to top
    justifyContent: "center",
    textAlign: "center",
    background: "linear-gradient(to bottom, #f0f4f8, #e6f0ff)",
    paddingTop: "50px", // adjust top spacing as needed
    paddingBottom: "8px",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#035BAA",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    fontSize: "1.25rem",
    color: "#232c32",
    lineHeight: 1.6,
    maxWidth: "700px",
    margin: "0 auto 20px auto",
  };

  const buttonStyle = {
    padding: "12px 28px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
    margin: "0 10px",
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h1 style={titleStyle}>
          Make Your Organization <br />
          <span style={{ color: "#00C2FF" }}>AI Enabled</span>
        </h1>
        <p style={subtitleStyle}>
          LLM + Robotics + Intelligent Chips = Super Intelligence. Superchat LLC transforms organizations
          with cutting-edge AI solutions.
        </p>
        <div>
          <button style={{ ...buttonStyle, background: "#035BAA", color: "#fff" }}>Start Your Journey</button>
          <button style={{ ...buttonStyle, background: "#fff", color: "#035BAA", border: "2px solid #035BAA" }}>Explore AI</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
