import React from "react";
import superchatLogo from "../../../assets/chatSuperlogo.png";

const Header = () => {
  const navStyle = {
    display: "flex",
    gap: "20px",
    fontWeight: 500,
    cursor: "pointer",
  };

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
  };

  const buttonStyle = {
    padding: "10px 22px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
  };

  return (
    <header >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={superchatLogo} alt="Superchat LLC" style={{ height: "70px" }} />
        {/* <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>Superchat LLC</span> */}
      </div>

     

      {/* <div style={{ display: "flex", gap: "12px" }}>
        <button style={{ ...buttonStyle, background: "#fff", color: "#035BAA", border: "2px solid #035BAA" }}>Sign In</button>
        <button style={{ ...buttonStyle, background: "#035BAA", color: "#fff" }}>Get Started</button>
      </div> */}
    </header>
  );
};

export default Header;
