import React from "react";

const Contact = () => {
  const sectionStyle = { padding: "80px 20px", background: "#f0f4f8" };
  const inputStyle = { width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "12px", fontSize: "1rem" };
  const buttonStyle = { padding: "12px 28px", borderRadius: "8px", border: "none", background: "#035BAA", color: "#fff", fontWeight: 600, cursor: "pointer" };

  return (
    <section style={sectionStyle}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: 700, textAlign: "center", marginBottom: "20px", color: "#035BAA" }}>Get In Touch</h2>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 40px auto", color: "#232c32" }}>
        Ready to transform your organization? Contact us to discuss AI solutions.
      </p>
      <form style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
        <input style={inputStyle} placeholder="Name" />
        <input style={inputStyle} type="email" placeholder="Email" />
        <textarea style={{ ...inputStyle, height: "120px" }} placeholder="Message"></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
