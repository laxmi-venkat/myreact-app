import React from "react";
import superchatLogo from "../../../assets/chatSuperlogo.png"

const Footer = () => {
    const footerStyle = { padding: "40px 20px", background: "#035BAA", color: "#fff", textAlign: "center" };
    const linkStyle = { color: "#fff", textDecoration: "none", margin: "0 10px" };

    return (
        <footer style={footerStyle}>
            <img src={superchatLogo} alt="Superchat Logo" style={{ height: "40px", marginBottom: "0px" ,marginRight:'1000px'}} />
            {/* <div style={{ marginBottom: "10px" }}>
                <a href="#" style={linkStyle}>Home</a>
                <a href="#" style={linkStyle}>Services</a>
                <a href="#" style={linkStyle}>About</a>
                <a href="#" style={linkStyle}>Contact</a>
            </div> */}
            <p>&copy;2025
               Superchat LLC. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
