import React, { useState } from "react";

const servicesData = [
  { title: "Large Language Models", description: "AI language processing that understands, generates, and transforms text." },
  { title: "Robotics Integration", description: "Intelligent robots for enhanced automation in operations." },
  { title: "Intelligent Chips", description: "Custom hardware solutions optimized for AI processing." },
  { title: "AI-Powered Teams", description: "AI agents that augment human capabilities and productivity." },
  { title: "Smart Automation", description: "End-to-end automation solutions for your organization." },
  { title: "Super Intelligence Platform", description: "Unified AI ecosystem for enterprise-grade super intelligence." },
];

const Services = () => {
  const sectionStyle = { padding: "80px 20px", background: "#f0f4f8" };
  const titleStyle = { textAlign: "center", fontSize: "2.5rem", fontWeight: 700, marginBottom: "40px", color: "#035BAA" };
  const gridStyle = { display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }; // row layout

  const cardBaseStyle = {
    padding: "30px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    width: "300px", // increase card width
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  // State to track hover
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Our AI Solutions</h2>
      <div style={gridStyle}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            style={{
              ...cardBaseStyle,
              transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              boxShadow: hoveredIndex === index ? "0 8px 25px rgba(0,0,0,0.15)" : cardBaseStyle.boxShadow,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px", color: "#035BAA" }}>
              {service.title}
            </h3>
            <p style={{ color: "#232c32", lineHeight: 1.5 }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
